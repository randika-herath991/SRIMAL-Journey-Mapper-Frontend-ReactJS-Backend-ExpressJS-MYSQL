import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Trip from "../components/trip/Trip";
import HeroImage from "../assets/travelbackground.jpg";

function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('You must be logged in to view this page.');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch protected data. Please log in.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImage={HeroImage}
        title="Your Journey Your Story"
        text="Choose Your favourite Destination."
        buttonText="Travel Plan"
        url="/travel-plan"
        btnClass="show"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;