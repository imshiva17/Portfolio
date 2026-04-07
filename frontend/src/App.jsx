import { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="noise">
      {/* Custom Cursor */}
      <Cursor />

      {/* Loader */}
      {loading && <Loader />}

      {/* Main Content */}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
