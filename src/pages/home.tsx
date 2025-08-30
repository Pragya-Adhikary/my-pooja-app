import React, { useRef } from "react";
import { FaPrayingHands, FaUserTie, FaCertificate } from "react-icons/fa";
import "./home.css";
import "./PoojaCard";
import "./PoojaCard.css"; // Combine all CSS from Hero.css, PopularPoojas.css, WhyChooseUs.css, Testimonial.css here

const HomePage: React.FC = () => {
  // --- Popular Poojas ---
  const poojaListRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    poojaListRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    poojaListRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const poojas = [
    { title: "Nwaran Ceremony", img: "/images/nwaran.png" },
    { title: "Ghar Pooja", img: "/images/ghar pooja.jpg" },
    { title: "Shraddha", img: "/images/shraddha.jpg" },
    { title: "Ghatasthapana", img: "/images/ghatasthapana.jpeg" },
    { title: "Janai Purnima", img: "/images/janai purnima.jpeg" },
    { title: "Satya Narayan", img: "/images/satya narayan pooja.jpeg" },
  ];

  // --- Why Choose Us ---
  const whyItems = [
    { icon: <FaPrayingHands size={40} color="#ff7f50" />, title: "Divine Blessings" },
    { icon: <FaUserTie size={40} color="#ff7f50" />, title: "Expert Pandits" },
    { icon: <FaCertificate size={40} color="#ff7f50" />, title: "Authentic Poojas" },
  ];

  return (
    <main>
      {/* --- Hero Section --- */}
      <section className="hero">
        <h1>Embrace the divine in your home</h1>
        <p>Experience sacred rituals with our expert pandits.</p>
      </section>

      {/* --- Popular Poojas --- */}
      <section className="popular-poojas">
        <h2>Popular Poojas</h2>
        <div className="scroll-container">
          <button className="scroll-btn left" onClick={scrollLeft}>◀</button>
          <div className="pooja-list" ref={poojaListRef}>
            {poojas.map((pooja, idx) => (
              <div className="pooja-card" key={idx}>
                <img src={pooja.img} alt={pooja.title} />
                <p>{pooja.title}</p>
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={scrollRight}>▶</button>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="why-container">
        <h2 className="why-title">Why Choose Us?</h2>
        <div className="why-cards">
          {whyItems.map((item, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-icon">{item.icon}</div>
              <p className="why-text">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Testimonial --- */}
      <section className="testimonial">
        <h2>What Our Devotees Say</h2>
        <p className="quote">
          The nwaran event went so smoothly. Everything was arranged beautifully, 
          and the pandit explained every ritual.
        </p>
        <p className="author">- Ram S, Kathmandu</p>
      </section>
    </main>
  );
};

export default HomePage;
