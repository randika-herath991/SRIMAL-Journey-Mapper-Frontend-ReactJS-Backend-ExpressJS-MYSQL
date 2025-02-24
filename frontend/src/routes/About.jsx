import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import AboutImg from "../assets/aboutus.jpg";
import Footer from "../components/footer/Footer";
import AboutUs from "../components/aboutUs/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
