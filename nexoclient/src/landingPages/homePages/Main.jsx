import Header from "../../commonPages/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Event from "./components/Event";
import Venue from "./components/Venue";
import Roadmap from "./components/Roadmap";
import Faqs from "./components/Faqs";
import Footer from "../../commonPages/Footer";

function Main() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Event />
      <Venue />
      <Roadmap />
      <Faqs />
      <Footer />
    </>
  );
}

export default Main;
