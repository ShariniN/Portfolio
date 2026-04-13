import { useState, useEffect } from 'react';
import './styles/global.css';

import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certs from './components/Certs';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.title = "Sharini Nirmalan — Software Engineer";

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("vi"); }),
      { threshold: 0.08 }
    );
    const t = setTimeout(() => {
      document.querySelectorAll(".rv").forEach(el => obs.observe(el));
    }, 80);

    const onScroll = () => {
      let cur = "home";
      document.querySelectorAll("section[id]").forEach(s => {
        if (window.scrollY >= s.offsetTop - 140) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      obs.disconnect();
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Cursor/>
      <Nav active={active}/>
      <main>
        <Hero/>
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
        <Certs/>
        <Contact/>
      </main>
      <div style={{maxWidth:"1300px",margin:"0 auto",borderTop:"1px solid var(--border)"}}/>
      <footer className="footer">
        <p className="fc">© 2026 <em>Sharini Nirmalan</em>. All Rights Reserved.</p>
      </footer>
      <Chatbot/>
      <Analytics/>
    </>
  );
}
