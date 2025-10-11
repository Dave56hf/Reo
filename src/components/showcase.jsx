import "./showcase.css";
import Bitcoin from "../assets/bitcoin.png";
import Etherum from "../assets/4373172_ethereum_logo_logos_icon 1.png";
import Polygon from "../assets/polygon 1.png";
import Solana from "../assets/solana.png";
import Price from "../assets/Screenshot 2025-09-23 172041.jpg";
import Pric from "../assets/Screenshot 2025-09-23 172010.jpg";
import Pri from "../assets/Screenshot 2025-09-23 172041.jpg";

export default function showcase() {
  return (
    <div className="showcase">
      <div className="show1">
        <span>Trusted by 1million traders</span>
        <h3>
          Your Crypto Journey, <br />
          Powered By <span className="highlight">Reo</span>
        </h3>
        <p>
          Our dynamic tools and intuitive interface give you the power to move
          <br />
          with confidence in a fast-paced market
        </p>
        <button>Get Started</button>
        <div className="icon">
          <div className="ico1 right">
            <img src={Bitcoin} alt="" />
          </div>
          <div className="ico lefttop">
            <img src={Etherum} alt="" />
          </div>
          <div className="ico leftbottom">
            <img src={Polygon} alt="" />
          </div>
          <div className="ico right">
            <img src={Solana} alt="" />
          </div>
        </div>
      </div>
      <div className="sho2">
        <div className="im">
          <img src={Price} alt="" />
        </div>
        <div className="im">
          <img src={Pric} alt="" />
        </div>
        <div className="im">
          <img src={Pri} alt="" />
        </div>
      </div>
    </div>
  );
}
