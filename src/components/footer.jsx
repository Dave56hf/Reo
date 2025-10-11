import "./footer.css";
import { FaEthereum } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const comp = [
  {
    head: "Company",
    trade: "Trade",
    trad: "Feature",
    tra: "Market",
    tr: "Portfolio",
  },
  {
    head: "Company",
    trade: "Trade",
    trad: "Feature",
    tra: "Market",
    tr: "Portfolio",
  },
  {
    head: "Company",
    trade: "Trade",
    trad: "Feature",
    tra: "Market",
    tr: "Portfolio",
  },
  {
    head: "Company",
    trade: "Trade",
    trad: "Feature",
    tra: "Market",
    tr: "Portfolio",
  },
];
export default function footer() {
  return (
    <div div className="footCon">
      <div className="Contact">
        <h2>Ready to start your journey?</h2>
        <p>
          Its's time to build your future. Sign up now and begin trading in
          minutes
        </p>
        <button className="btn get">Get started</button>
        <button className="btn con">Contact Us</button>
      </div>
      {/* footer */}
      <div className="foote">
        <div className="foot1">
          <h1>
            <FaEthereum
              className="FaEthereum"
              color="#1E90FF"
              style={{ fontSize: 28 }}
            />
            REO
          </h1>
          <p>
            Your gateway to the future <br />
            of finance powred by Reo
          </p>
          <div className="fa">
            <FaTwitter color="#fff" /> <FaInstagram color="#fff" />
            <FaFacebook color="#fff" />
          </div>
        </div>
        {comp.map((i, index) => (
          <div className="foot2" key={index}>
            <h4>{i.head}</h4>
            <ul>
              <li>{i.trade}</li>
              <li>{i.trad}</li>
              <li>{i.tra}</li>
              <li>{i.tr}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="bodtop">
        <span>Terms & Condition</span>
        <span>Privacy policy</span>
        <span>&copy; Copyright 2025 Reo</span>
      </div>
    </div>
  );
}
