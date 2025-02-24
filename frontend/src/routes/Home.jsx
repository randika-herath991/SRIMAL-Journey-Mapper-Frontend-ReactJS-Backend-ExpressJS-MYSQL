import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Trip from "../components/trip/Trip";
import HeroImage from "../assets/travelbackground.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImage={HeroImage}
        title="Your Journey Your Story"
        text="Choose Your favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />     
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
