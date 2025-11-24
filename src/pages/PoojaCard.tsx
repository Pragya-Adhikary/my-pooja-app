import React from "react";
import { FaHeart, FaShieldAlt, FaUsers, FaStar } from "react-icons/fa";

const AboutSection: React.FC = () => {
  return (
    <div>
      {/* About Our Mission */}
      <section>
        <h2>About Our Sacred Mission</h2>
        <p>
          We bridge the gap between ancient traditions and modern convenience,
          making authentic spiritual services accessible to every devotee.
        </p>
      </section>

      {/* Connecting Hearts */}
      <section>
        <div>
          <h2>Connecting Hearts with Sacred Traditions</h2>
          <p>
            Founded with the vision of preserving and sharing India's rich
            spiritual heritage, our platform connects devotees with experienced
            and authentic pandits who carry forward centuries-old Vedic
            traditions.
          </p>
          <p>
            Whether it's a simple daily puja, auspicious ceremonies, or sacred
            festivals, we ensure that every spiritual need is met with the
            highest standards of authenticity and devotion.
          </p>

          <div>
            <div>
              <h3>500+</h3>
              <span>Verified Pandits</span>
            </div>
            <div>
              <h3>10,000+</h3>
              <span>Happy Devotees</span>
            </div>
            <div>
              <h3>50+</h3>
              <span>Cities Served</span>
            </div>
          </div>
        </div>

        <div>
          <h3>Our Promise</h3>
          <ul>
            <li>Authentic Vedic knowledge and practices</li>
            <li>Verified and experienced pandits</li>
            <li>Transparent and fair pricing</li>
            <li>24/7 customer support</li>
          </ul>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <div>
          <FaHeart />
          <h3>Spiritual Connection</h3>
          <p>
            We believe in preserving ancient traditions and creating meaningful
            spiritual connections between devotees and learned pandits.
          </p>
        </div>

        <div>
          <FaShieldAlt />
          <h3>Trust & Authenticity</h3>
          <p>
            Every pandit on our platform is verified for their knowledge of Vedic
            scriptures and authentic ritual practices.
          </p>
        </div>

        <div>
          <FaUsers />
          <h3>Community First</h3>
          <p>
            Building a community where spirituality thrives through accessible
            and authentic religious services for everyone.
          </p>
        </div>

        <div>
          <FaStar />
          <h3>Excellence</h3>
          <p>
            Committed to providing exceptional spiritual experiences through
            carefully curated pandits and seamless booking.
          </p>
        </div>
      </section>
    
    </div>
  );
};

export default AboutSection;
