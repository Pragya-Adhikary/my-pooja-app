import React from "react";
import "./Poojas.css";

type Service = {
  id: number;
  category: string;
  title: string;
  description: string;
  duration: string;
  bookings: string;
  rating: number;
  reviews: number;
};

const services: Service[] = [
  {
    id: 1,
    category: "Home Ceremonies",
    title: "Griha Pravesh Pooja",
    description:
      "Sacred ceremony for entering a new home, bringing peace and prosperity to your family.",
    duration: "2-3 hours",
    bookings: "245+ bookings",
    rating: 4.8,
    reviews: 245,
  },
  {
    id: 2,
    category: "Marriage",
    title: "Wedding Ceremony",
    description:
      "Complete Hindu wedding rituals performed by experienced pandits with authentic traditions.",
    duration: "4-6 hours",
    bookings: "156+ bookings",
    rating: 4.9,
    reviews: 156,
  },
    {
    id: 2,
    category: "Death Rites",
    title: "Shraddha (श्राद्ध)",
    description:
      "Shraddha Pooja is a deeply significant ritual in Nepali and Hindu tradition, performed to honor and pay homage to deceased ancestors.",
    duration: "1-3 hours",
    bookings: "156+ bookings",
    rating: 4.9,
    reviews: 156,
  },
      {
    id: 2,
    category: "Festival Pooja",
    title: "Ghatasthapana (घटस्थापना)",
    description:
      "Ghatasthapana is a ritual to invoke divine energy at the start of Navratri, symbolizing the goddess residing in the household, and is an essential part of Navratri celebrations across India and Nepal.",
    duration: "1-2",
    bookings: "156+ bookings",
    rating: 4.9,
    reviews: 156,
  },    
  {
    id: 2,
    category: "Religious Pooja",
    title: "Satyanarayan Puja (सत्यनारायण पूजा)",
    description:
      "Satyanarayan Puja is a popular, auspicious ritual for devotees of Lord Vishnu, often performed during festivals, special occasions, or as a regular monthly devotion.",
    duration: "1.5–2 hours",
    bookings: "156+ bookings",
    rating: 4.9,
    reviews: 156,
  },
      {
    id: 2,
    category: "Life-cycle ritual",
    title: "Annaprashan (Rice Feeding Ceremony)",
    description:
      "First rice feeding ceremony for infants, performed with prayers and blessings to ensure health, growth, and well-being.",
    duration: "1–1.5 hours",
    bookings: "156+ bookings",
    rating: 4.9,
    reviews: 156,
  },
      {
    id: 2,
    category: "Life-cycle initiation",
    title: "Bratabandha",
    description:
      "Sacred thread ceremony that initiates boys into Vedic studies, involving rituals, blessings, and the chanting of mantras.",
    duration: "2–3 hours",
    bookings: "156+ bookings",
    rating: 4.9,
    reviews: 156,
  },
      {
    id: 2,
    category: "Life-cycle festival",
    title: "Janai Purnima",
    description:
      "Festival where men wear or renew their sacred thread, accompanied by prayers and family blessings for protection and prosperity.",
    duration: "1–2 hours",
    bookings: "156+ bookings",
    rating: 4.9,
    reviews: 156,
  },
      {
    id: 2,
    category: "Religious observance",
    title: "Rishi Panchami (ऋषि पंचमी)",
    description:
      ": A Hindu festival honoring the seven sages, observed with prayers, fasting, and purification rituals for spiritual cleansing.",
    duration: "4-6 hours",
    bookings: "156+ bookings",
    rating: 4.9,
    reviews: 156,
  },
      {
    id: 2,
    category: "Astrological ritual",
    title: "Graha Shanti Puja",
    description:
      "Graha Shanti Puja is a significant Hindu ritual performed to appease the nine planetary deities (Navagrahas) and reduce their malefic effects in a person’s life.",
    duration: "2–3 hours",
    bookings: "156+ bookings",
    rating: 4.9,
    reviews: 156,
  },
      {
    id: 2,
    category: "Vedic ritual",
    title: "Rudri Puja",
    description:
      "Rudri Puja is a powerful and highly revered Vedic ritual, especially among Brahmin and Chhetri communities in Nepal",
    duration: "3–6 hours",
    bookings: "156+ bookings",
    rating: 4.9,
    reviews: 156,
  },
      {
    id: 2,
    category: "Ancestral ritual",
    title: "Kul Puja",
    description:
      "Kul Puja (sometimes called Kula Devi/Debata Puja) is an important ritual in Hindu households, especially among Brahmin and Chhetri communities in Nepal.",
    duration: "2–3 hours",
    bookings: "156+ bookings",
    rating: 4.9,
    reviews: 156,
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="service-card">
      <span className="service-category">{service.category}</span>

      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>

      <div className="service-meta">
        <span>⏰ {service.duration}</span>
        <span>👥 {service.bookings}</span>
      </div>

      <div className="service-rating">
        {"★".repeat(5)}{" "}
        <span>
          {service.rating} ({service.reviews} reviews)
        </span>
      </div>

      <div className="service-footer">
        <button className="service-button">Book Now</button>
      </div>
    </div>
  );
};

const Poojas: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Sacred Services</h2>
        <p>
          From intimate home poojas to grand celebrations, find the perfect
          spiritual service performed by our verified and experienced pandits.
        </p>
      </div>

      <div className="services-container">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Poojas;
