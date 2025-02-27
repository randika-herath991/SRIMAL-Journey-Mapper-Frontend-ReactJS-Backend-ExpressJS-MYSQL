require('dotenv').config();

const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

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
    html: `<html>
      <body style='font-family: "Segoe UI", Arial, sans-serif; background-color: #f4f7fc; color: #333; padding: 20px;'>
        <div style='max-width: 600px; margin: 0 auto; padding: 20px; background-color: white; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);'>
          <h1 style='text-align: center; color: #007BFF;'>Password Reset Request</h1>
          <p style='font-size: 16px; color: #555;'>Hello,</p>
          <p style='font-size: 16px; color: #555;'>We received a request to reset your password. Please find your new password below:</p>
          <div style='background-color: #007BFF; color: white; padding: 15px; border-radius: 5px; font-size: 18px; font-weight: bold; text-align: center; letter-spacing: 1px;'>${newPassword}</div>
          <p style='font-size: 16px; color: #555; margin-top: 20px;'>If you did not request this password reset, simply ignore this email or get in touch with our support team for assistance.</p>
          <p style='font-size: 16px; color: #555;'>Thank you, <br> <strong>Journey Mapper Support Team</strong></p>
        </div>
        <footer style='text-align: center; font-size: 14px; color: #aaa; margin-top: 20px;'>
          <p>&copy; 2025 Journey Mapper. All rights reserved.</p>
        </footer>
      </body>
    </html>`,
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

function verifyToken(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
}

app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM registrationstore WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error("Error in login: " + err.message);
      return res.json({ message: "Error in login" });
    }
    if (data.length > 0) {
      const user = data[0];
      const token = jwt.sign(
        { id: user.id, email: user.email, first_name: user.first_name },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      console.log("Login successful");
      return res.json({ message: "Login successful", token, user });
    } else {
      console.log("Login failed");
      return res.json({ message: "Invalid email or password" });
    }
  });
});

app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
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

app.post("/travelplan", (req, res) => {
  const { fullName, nic, mobileNumber, email, travelDate, venue, members, paymentMethod, specialRequest } = req.body;

  if (!fullName || !nic || !mobileNumber || !travelDate || !email || !venue || !members || !paymentMethod) {
    return res.status(400).json({ message: "All fields are required instead of Special Request" });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const query = "INSERT INTO travelplanstore (fullName, nic, mobileNumber, email, travelDate, venue, members, paymentMethod, specialRequest) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(query, [fullName, nic, mobileNumber, email, travelDate, venue, members, paymentMethod, specialRequest], (err, result) => {
    if (err) {
      console.log("Error inserting data:", err);
      res.status(500).send("Error inserting data");
      return;
    }
    res.status(200).json({ message: "Travel Plan Submission successfully!" });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});