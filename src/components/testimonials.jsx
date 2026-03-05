import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import "./testimonials.css";

const testimonials = [
  {
    name: "Maria S.",
    role: "New Investor",
    text: "The platform is intuitive, and the educational guides helped me feel confident. I feel safe and empowered to start my investing journey here.",
    rating: 5,
    img: "https://img.freepik.com/premium-photo/person-suit_777078-56281.jpg",
  },
  {
    name: "Ryan C.",
    role: "Active Trader",
    text: "Reo is clean and easy to use, and I was able to make my first trade with zero hassle. It is a strong platform for beginners.",
    rating: 4.5,
    img: "https://www.nlc.org/wp-content/uploads/2021/07/Eduardo-Cisneros-Headshot-e1627913538310.jpg",
  },
  {
    name: "Jessica L.",
    role: "Crypto Enthusiast",
    text: "Customer support is excellent and I love the smooth user experience. Highly recommended.",
    rating: 5,
    img: "https://tse4.mm.bing.net/th/id/OIP.XkOBcwMZmQ30fiEWsbIZ_wHaHa?pid=ImgDet&w=192&h=192&c=7&o=7&rm=3",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="top-text">
        <span className="badge">Testimonials</span>
        <h2 id="testimonials-title">
          Don&apos;t Just
          <br />
          <span className="gradient-text">Take Our Word For It.</span>
        </h2>
      </div>

      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <p className="quote">{testimonial.text}</p>
              <div className="user-info">
                <img
                  src={testimonial.img}
                  alt={`${testimonial.name} testimonial avatar`}
                  className="user-img"
                  loading="lazy"
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <div className="rating" aria-label={`Rating ${testimonial.rating} out of 5`}>
                {[...Array(Math.floor(testimonial.rating))].map((_, index) => (
                  <FaStar key={`${testimonial.name}-${index}`} color="#1E90FF" />
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <FaStar color="#1E90FF" style={{ opacity: 0.5 }} />
                )}
                <span>{testimonial.rating}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="arrow-buttons">
        <button
          className="arrow"
          type="button"
          aria-label="Previous testimonial"
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </button>
        <button
          className="arrow"
          type="button"
          aria-label="Next testimonial"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
