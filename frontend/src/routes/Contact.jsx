import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import ContactImg from "../assets/contactus.webp";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/contactForm/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
