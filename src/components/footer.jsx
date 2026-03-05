import { FaEthereum, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.css";

const footerGroups = [
  {
    heading: "Company",
    links: ["Trade", "Features", "Market", "Portfolio"],
  },
  {
    heading: "Crypto Market",
    links: [
      "Price Charts",
      "Market Analysis",
      "Latest News",
      "Initial Coin Offerings",
    ],
  },
  {
    heading: "Resources",
    links: ["Guide for Beginners", "Features", "Trading Platform", "Digital Wallet"],
  },
  {
    heading: "Community",
    links: [
      "Crypto Discussion Forum",
      "Discord Group",
      "Local Meetup Events",
      "Project Collaboration",
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footCon" id="contact">
      <section className="Contact" aria-labelledby="cta-title">
        <h2 id="cta-title">Ready to start your journey?</h2>
        <p>
          It&apos;s time to build your future. Sign up now and begin trading in
          minutes.
        </p>
        <button className="btn get" type="button">
          Get Started
        </button>
        <button className="btn con" type="button">
          Contact Us
        </button>
      </section>

      <div className="foote">
        <div className="foot1">
          <h3>
            <FaEthereum className="FaEthereum" color="#1E90FF" />
            REO
          </h3>
          <p>
            Your gateway to the future
            <br />
            of finance powered by Reo.
          </p>
          <div className="fa">
            <a href="https://twitter.com" aria-label="Reo on Twitter">
              <FaTwitter color="#fff" />
            </a>
            <a href="https://instagram.com" aria-label="Reo on Instagram">
              <FaInstagram color="#fff" />
            </a>
            <a href="https://facebook.com" aria-label="Reo on Facebook">
              <FaFacebook color="#fff" />
            </a>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div className="foot2" key={group.heading}>
            <h4>{group.heading}</h4>
            <ul>
              {group.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bodtop">
        <span>Website created by David Fubara David-West</span>
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
        <span>&copy; {currentYear} Reo</span>
      </div>
    </footer>
  );
}
