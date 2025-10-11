import Header from "./components/header";
import Showcase from "./components/showcase";
import About from "./components/about";
import Howit from "./components/howit";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import "./App.css";

function Reon() {
  return (
    <div className="container">
      <Header />
      <Showcase />
      <About />
      <Howit />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Reon;
