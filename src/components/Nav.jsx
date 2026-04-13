import { useState, useEffect } from 'react';
import { DATA } from '../data/portfolioData';

export default function Nav({ active }) {
  const [sc, setSc] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const h = () => setSc(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    ["#home","Home"],["#about","About"],["#education","Education"],
    ["#experience","Experience"],["#projects","Projects"],["#certs","Certifications"]
  ];

  return (
    <nav className={"pnav" + (sc ? " sc" : "")}>
      <a href="#home" className="plogo"><em>{DATA.initials}</em></a>
      <ul className="pnl">
        {links.map(([h,l]) => <li key={h}><a href={h} className={active===h.slice(1)?"act":""}>{l}</a></li>)}
      </ul>
      <a href="#contact" className="pncta">Contact</a>
      <button className="phb" onClick={()=>setMenu(!menu)}>
        <span/><span/><span/>
      </button>
      {menu && (
        <div style={{position:"fixed",inset:0,background:"rgba(8,8,11,.97)",zIndex:300,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"2rem"}}>
          <button onClick={()=>setMenu(false)} style={{position:"absolute",top:"1.5rem",right:"1.5rem",background:"none",border:"none",color:"var(--muted)",fontSize:"1.5rem",cursor:"none"}}>✕</button>
          {links.map(([h,l]) => <a key={h} href={h} onClick={()=>setMenu(false)} style={{fontFamily:"var(--mono)",fontSize:"1.2rem",color:"var(--text)",textDecoration:"none"}}>{l}</a>)}
          <a href="#contact" onClick={()=>setMenu(false)} className="btn btnp">Contact</a>
        </div>
      )}
    </nav>
  );
}
