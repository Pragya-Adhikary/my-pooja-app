import React from "react";
import "./Testimonial.css";

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial">
      <h2>What Our Devotees Say</h2>
      <p className="quote">
        The nwaran event went so smoothly. Everything was arranged beautifully, 
        and the pandit explained every ritual.
      </p>
      <p className="author">- Ram S, Kathmandu</p>
    </section>
  );
};

export default Testimonial;
