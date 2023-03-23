import React, { useState, useEffect } from "react";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Why from "./components/Why";

function App() {
  const [background, setBackground] = useState("main");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackground("bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 border navbar-index text-black");
      } else {
        setBackground("main");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <div
        className={`sticky top-0 left-0 right-0 z-999 ${
          background === "main" ? "bg-main  navbar-index text-white" : background
        }`}
      >
        <Navbar />
      </div>
    <main className="font-Roboto">
      <section className=" pb-16">
        <Hero />
      </section>
      <section className="pt-16">
        <Features />
      </section>
      <section className="pt-16">
        <About/>
      </section>
      <section className="pt-16 bg-background">
        <Why/>
      </section>
      <section className="pt-16">
        <NewsLetter/>
      </section>
      <footer className="pt-16">
        <Footer/>
      </footer>
    </main>
    </>
  );
}

export default App;


// w-[80%] md:w-[90%] lg:w-full