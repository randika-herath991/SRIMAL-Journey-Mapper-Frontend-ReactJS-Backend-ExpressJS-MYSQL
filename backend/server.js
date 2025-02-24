require('dotenv').config();

const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const app = express();
const port = 5000;

const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,}$/;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  secure: false,
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false,
  },
});

function generateNewPassword() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

function sendPasswordResetEmail(email, newPassword, callback) {
  const mailOptions = {
    from: process.env.SMTP_FROM_EMAIL,
    to: email,
    subject: "Journey Mapper Password Reset Request",
    html: `<html><body style='font-family: Arial, sans-serif; color: #333;'>
        <h1 style='text-align: center; color: #007BFF;'>Password Reset Request</h1>
        <p style='font-size: 16px;'>Hello,</p>
        <p style='font-size: 16px;'>We received a request to reset your password. Below is your new password:</p>
        <div style='background-color: #007BFF; color: white; padding: 10px; border-radius: 5px; font-size: 18px; font-weight: bold; text-align: center;'>${newPassword}</div>
        <p style='font-size: 16px;'>If you did not request a password reset, please ignore this email or contact support immediately.</p>
        <p style='font-size: 16px;'>Thank you, <br> Journey Mapper Support Team</p>
    </body></html>`,
  };

  transporter.sendMail(mailOptions, callback);
}

function checkEmailExists(email, callback) {
  const sql = "SELECT * FROM registrationstore WHERE email = ?";
  db.query(sql, [email], (err, data) => {
    if (err) {
      callback(err, null);
    }
    callback(null, data.length > 0);
  });
}

function checkPasswordExists(password, callback) {
  const sql = "SELECT * FROM registrationstore WHERE password = ?";
  db.query(sql, [password], (err, data) => {
    if (err) {
      callback(err, null);
    }
    callback(null, data.length > 0);
  });
}

app.post("/signup", (req, res) => {
  const { first_name, last_name, contact, email, password, confirm_password } = req.body;

  if (!emailRegex.test(email)) {
    return res.json({ message: "Invalid email format" });
  }

  if (!passwordRegex.test(password)) {
    return res.json({ message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character" });
  }

  checkEmailExists(email, (err, emailExists) => {
    if (err) {
      return res.json({ message: "Error checking email" });
    }
    if (emailExists) {
      return res.json({ message: "Email already exists" });
    }

    checkPasswordExists(password, (err, passwordExists) => {
      if (err) {
        return res.json({ message: "Error checking password" });
      }
      if (passwordExists) {
        return res.json({ message: "Password already exists" });
      }

      if (password !== confirm_password) {
        return res.json({ message: "Passwords do not match" });
      }

      const sql =
        "INSERT INTO registrationstore (first_name, last_name, contact, email, password, confirm_password) VALUES ?";
      const values = [
        [
          first_name,
          last_name,
          contact,
          email,
          password,
          confirm_password,
        ],
      ];
      db.query(sql, [values], (err, data) => {
        if (err) {
          console.error("Error in signup: " + err.message);
          return res.json({ message: "Error during signup" });
        }
        console.log("Signup successful");
        return res.json({ message: "Signup successful", data });
      });
    });
  });
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM registrationstore WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error("Error in login: " + err.message);
      return res.json({ message: "Error in login" });
    }
    if (data.length > 0) {
      console.log("Login successful");
      return res.json({ message: "Login successful", user: data[0] });
    } else {
      console.log("Login failed");
      return res.json({ message: "Invalid email or password" });
    }
  });
});

app.post("/forgotpassword", (req, res) => {
  const { email } = req.body;

  if (!email || !emailRegex.test(email)) {
    return res.json({ message: "Please provide a valid email address." });
  }

  const sql = "SELECT * FROM registrationstore WHERE email = ?";
  db.query(sql, [email], (err, data) => {
    if (err) {
      console.error("Error in forgot password:", err);
      return res.json({ message: "Error processing request" });
    }

    if (data.length > 0) {
      const newPassword = generateNewPassword();
      const confirmPassword = newPassword;

      const updateSql = "UPDATE registrationstore SET password = ?, confirm_password = ? WHERE email = ?";
      db.query(updateSql, [newPassword, confirmPassword, email], (err, result) => {
        if (err) {
          console.error("Error updating password:", err);
          return res.json({ message: "Error updating password" });
        }

        sendPasswordResetEmail(email, newPassword, (err, info) => {
          if (err) {
            console.error("Error sending email:", err);
            return res.json({ message: "Error sending email" });
          }

          console.log("Password reset email sent successfully to", email);
          return res.json({ message: "Password reset successfully. New password sent to your email." });
        });
      });
    } else {
      console.log("Email not found:", email);
      return res.json({ message: "Email not found" });
    }
  });
});

app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const query = "INSERT INTO contactstore (name, email, subject, message) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, subject, message], (err, result) => {
    if (err) {
      console.log("Error inserting data:", err);
      res.status(500).send("Error inserting data");
      return;
    }
    res.status(200).json({ message: "Message sent successfully!" });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});