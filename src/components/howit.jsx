import "./howit.css";

const steps = [
  {
    id: "01",
    title: "Sign Up in Minutes",
    text: "Create your secure account in just a few clicks. We streamlined the process so you can get started quickly.",
  },
  {
    id: "02",
    title: "Fund Your Account",
    text: "Deposit using trusted payment methods. Your assets are protected by advanced security controls.",
  },
  {
    id: "03",
    title: "Start Trading",
    text: "Explore digital assets and execute your first trades with confidence on an intuitive platform.",
  },
];

export default function HowIt() {
  return (
    <section className="howit" id="how-it-works" aria-labelledby="how-title">
      <div className="how1">
        <span>How it Works</span>
        <h2 id="how-title">Your First Trade in 3 Simple Steps</h2>
        <p>
          We streamlined the process so you can get started without any hassle.
        </p>
      </div>

      <div className="how2">
        {steps.map((step) => (
          <article className="howblock" key={step.id}>
            <span>{step.id}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
