import About from "./components/About";
import Hero from "./components/Hero";
import Service from "./components/Service";
import "./index.css";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "./components/Galery";

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
    </>

  )




}

export default App;


