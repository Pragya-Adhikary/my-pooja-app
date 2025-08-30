import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Poojas from "./pages/Poojas";
import Pandits from "./pages/Pandits";
import AboutUs from "./pages/Aboutus";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Redirect "/" to "/home" */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/poojas" element={<Poojas />} />
          <Route path="/pandits" element={<Pandits />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
