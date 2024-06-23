import HeroSection from "./components/HeroSection";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function App() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Services />
      <Brands />
      <Footer />
      <Popup />
    </>
  );
}

export default App;
