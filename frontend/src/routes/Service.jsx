import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import ServiceImg from "../assets/service.jpg";
import Footer from "../components/footer/Footer";
import Destination from "../components/destination/Destination";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={ServiceImg}
        title="Service"
        btnClass="hide"
      />
      <Destination />
      <Footer />
    </>
  );
}

export default Service;