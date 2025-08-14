import About from "./components/About";
import Hero from "./components/Hero";
import Service from "./components/Service";
import "./index.css";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "./components/Galery";
import { Testimmonials } from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

   useEffect(() => {
    AOS.init({
      duration: 800, // duração da animação
      offset: 100,   // distância para iniciar
      once: true,    // anima só uma vez
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Service/>
      <Gallery/>
      <Testimmonials/>
      <Contact/>
      <Footer/>
    </>

  )




}

export default App;


