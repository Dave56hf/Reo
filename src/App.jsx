import Header from "./components/header";
import Showcase from "./components/showcase";
import About from "./components/about";
import HowIt from "./components/howit";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <Showcase />
        <About />
        <HowIt />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
