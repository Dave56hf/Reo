import React, { useState } from "react";
import "./testimonials.css";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Maria S.",
    role: "New Investor",
    text: `"The platform is intuitive, and their educational guides helped me feel confident. I feel safe and empowered to start my investing journey here."`,
    rating: 5,
    img: "https://img.freepik.com/premium-photo/person-suit_777078-56281.jpg",
  },
  {
    name: "Ryan C.",
    role: "Active Trader",
    text: `"Reo is so clean and easy to use, and I was able to make my first trade with zero hassle. It's the perfect place for anyone just starting out."`,
    rating: 4.5,
    img: "https://www.nlc.org/wp-content/uploads/2021/07/Eduardo-Cisneros-Headshot-e1627913538310.jpg",
  },
  {
    name: "Jessica L.",
    role: "Crypto Enthusiast",
    text: `"Customer support is excellent and I love the smooth user experience. Highly recommended!"`,
    rating: 5,
    img: "https://tse4.mm.bing.net/th/id/OIP.XkOBcwMZmQ30fiEWsbIZ_wHaHa?pid=ImgDet&w=192&h=192&c=7&o=7&rm=3",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="testimonials">
      <div className="top-text">
        <span className="badge">Testimonials</span>
        <h2>
          Don’t Just <br />
          <span className="gradient-text">Take Our Word For It.</span>
        </h2>
      </div>

      <div className="slider">
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="quote">{t.text}</p>
              <div className="user-info">
                <img src={t.img} alt={t.name} className="user-img" />
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
              <div className="rating">
                {[...Array(Math.floor(t.rating))].map((_, i) => (
                  <FaStar key={i} color="#1E90FF" />
                ))}
                {t.rating % 1 !== 0 && (
                  <FaStar color="#1E90FF" style={{ opacity: 0.5 }} />
                )}
                <span>{t.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="arrow-buttons">
        <button className="arrow" onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <button className="arrow active" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
