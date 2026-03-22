import { useState, useEffect } from "react";
import { C, NAV_LINKS } from "./constants/config";

import Nav     from "./components/sections/Nav";
import Hero    from "./components/sections/Hero";
import About   from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer  from "./components/sections/Footer";

export default function App() {
  const [active, setActive] = useState("Home");

  const onNav = (section) => {
    setActive(section);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll spy — update active nav link based on scroll position
  useEffect(() => {
    const fn = () => {
      const offsets = NAV_LINKS.map(l => ({
        name: l,
        top: document.getElementById(l.toLowerCase())?.offsetTop || 0,
      }));
      const scrollY = window.scrollY + 120;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i].top) { setActive(offsets[i].name); break; }
      }
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${C.navy}; font-family: 'Plus Jakarta Sans', sans-serif; color: ${C.white}; -webkit-font-smoothing: antialiased; }
        ::selection { background: ${C.gold}; color: ${C.navy}; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${C.navy}; }
        ::-webkit-scrollbar-thumb { background: ${C.gold}; border-radius: 3px; }
        input::placeholder, textarea::placeholder { color: ${C.gray}; }
        input, textarea { font-family: 'Plus Jakarta Sans', sans-serif; }
        img { max-width: 100%; }
      `}</style>

      <Nav active={active} onNav={onNav} />

      <main>
        <Hero     onNav={onNav} />
        <About    />
        <Projects />
        <Contact  />
      </main>

      <Footer onNav={onNav} />
    </>
  );
}