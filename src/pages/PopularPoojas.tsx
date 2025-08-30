import React, { useRef } from "react";
import PoojaCard from "./PoojaCard";
import "./PopularPoojas.css";

interface Pooja {
  name: string;
  img: string;
}

const PopularPoojas: React.FC = () => {
  const poojaListRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    poojaListRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    poojaListRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const poojas: Pooja[] = [
    { name: "Nwaran Ceremony", img: "/images/nwaran.png" },
    { name: "Ghar Pooja", img: "/images/ghar pooja.jpg" },
    { name: "Shraddha", img: "/images/shraddha.jpg" },
    { name: "Ghatasthapana", img: "/images/ghatasthapana.jpeg" },
    { name: "Janai Purnima", img: "/images/janai purnima.jpeg" },
    { name: "Satya Narayan", img: "/images/satya narayan pooja.jpeg" },
  ];

  return (
    <section className="popular-poojas">
      <h2>Popular Poojas</h2>
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={scrollLeft}>
          ◀
        </button>
        <div className="pooja-list" ref={poojaListRef}>
          {poojas.map((pooja, index) => (
            <PoojaCard key={index} name={pooja.name} img={pooja.img} />
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          ▶
        </button>
      </div>
    </section>
  );
};

export default PopularPoojas;
