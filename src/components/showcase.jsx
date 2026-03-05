import "./showcase.css";
import Bitcoin from "../assets/bitcoin.png";
import Ethereum from "../assets/4373172_ethereum_logo_logos_icon 1.png";
import Polygon from "../assets/polygon 1.png";
import Solana from "../assets/solana.png";
import PriceOne from "../assets/Screenshot 2025-09-23 172041.jpg";
import PriceTwo from "../assets/Screenshot 2025-09-23 172010.jpg";
import PriceThree from "../assets/Screenshot 2025-09-23 171940.jpg";

const coinIcons = [
  { src: Bitcoin, alt: "Bitcoin" },
  { src: Ethereum, alt: "Ethereum" },
  { src: Polygon, alt: "Polygon" },
  { src: Solana, alt: "Solana" },
];

const previewImages = [
  { src: PriceOne, alt: "Portfolio analytics preview" },
  { src: PriceTwo, alt: "Asset chart preview" },
  { src: PriceThree, alt: "Wallet trend preview" },
];

export default function Showcase() {
  return (
    <section className="showcase" id="showcase" aria-labelledby="hero-heading">
      <div className="show1">
        <span>Trusted by 1 million traders</span>
        <h1 id="hero-heading">
          Your Crypto Journey,
          <br />
          Powered By <span className="highlight">Reo</span>
        </h1>
        <p>
          Our dynamic tools and intuitive interface give you the confidence to
          navigate fast-moving markets with clarity.
        </p>
        <button type="button">Get Started</button>

        <div className="icon" aria-hidden="true">
          {coinIcons.map((coin) => (
            <div className="ico" key={coin.alt}>
              <img src={coin.src} alt={coin.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="sho2" aria-label="Platform preview">
        {previewImages.map((image) => (
          <div className="im" key={image.alt}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
