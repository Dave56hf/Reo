import "./about.css";
import Card from "../assets/10293e20-b5ae-4a88-ab9d-4f8e623c935f.png.png";

export default function about() {
  return (
    <div className="aboutUs">
      <div className="aboutTxt">
        <span>About us</span>
        <h1>
          Unlocking the Digital <br />
          Economy
        </h1>
        <p>
          We built Reo to make crypto investing accessible and <br />
          $2,328.50 secure for everyone, We're more than an exchange-we're
          <br />
          your trusted partner on the journey into the digital economy.
        </p>
      </div>
      <div className="aboutImg">
        <img src={Card} alt="" />
      </div>
    </div>
  );
}
