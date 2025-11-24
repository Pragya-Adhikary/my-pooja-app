import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Poojas from "./pages/Poojas";
import Pandits from "./pages/Pandits";
import AboutUs from "./pages/Aboutus";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

const App: React.FC = () => {
  const [locationAllowed, setLocationAllowed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          localStorage.setItem("lat", String(pos.coords.latitude));
          localStorage.setItem("lng", String(pos.coords.longitude));
          setLocationAllowed(true);
        },
        () => setError("Please allow location access to continue.")
      );
    } else {
      setError("Your browser does not support location.");
    }
  }, []);

  if (!locationAllowed) {
    return (
      <div className="location-loader">
        <div className="loader"></div>
        <h2>📍 Getting your location…</h2>
        <p>Please allow location access.</p>
        {error && <p className="error-text">{error}</p>}
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/poojas" element={<Poojas />} />
          <Route path="/pandits" element={<Pandits />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
