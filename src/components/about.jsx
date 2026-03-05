import "./about.css";
import Card from "../assets/10293e20-b5ae-4a88-ab9d-4f8e623c935f.png.png";

export default function About() {
  return (
    <section className="aboutUs" id="about" aria-labelledby="about-heading">
      <div className="aboutTxt">
        <span>About us</span>
        <h2 id="about-heading">Unlocking the Digital Economy</h2>
        <p>
          We built Reo to make crypto investing accessible and secure for
          everyone. We are more than an exchange, we are your trusted partner
          on the journey into the digital economy.
        </p>
      </div>

      <div className="aboutImg">
        <img src={Card} alt="Reo wallet card preview" loading="lazy" />
      </div>
    </section>
  );
}
