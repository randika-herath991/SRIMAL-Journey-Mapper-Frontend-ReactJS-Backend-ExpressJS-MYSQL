import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import TravelPlanImg from "../assets/travel-plan.jpg";
import Footer from "../components/footer/Footer";
import TravelPlanForm from "../components/travelPlanForm/TravelPlanForm";

function TravelPlan() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={TravelPlanImg}
        title="Travel Plan"
        btnClass="hide"
      />
      <TravelPlanForm />
      <Footer />
    </>
  );
}

export default TravelPlan;