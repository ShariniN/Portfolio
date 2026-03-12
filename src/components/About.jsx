import { DATA } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="aboutbg">
      <div className="wrap">
        <p className="slabel rv"><span className="num">01.</span>Profile</p>
        <h2 className="stitle rv">The Builder &amp; The Thinker</h2>
        <div className="ahero rv">
          <div className="aleft">
            <div className="agreeting">Available for opportunities</div>
            <h3 className="aheadline">Full-Stack Dev<br/>&amp; <em>AI Enthusiast.</em></h3>
            <div className="abio">{DATA.bio.map((p,i)=><p key={i} dangerouslySetInnerHTML={{__html:p}}/>)}</div>
            <div style={{marginTop:"2rem"}}><a href={"mailto:"+DATA.contact.email} className="btn btno">Get In Touch</a></div>
          </div>
          <div className="aright">
            <div className="statrow">
              <div className="stat"><div className="statnum">85%</div><div className="statlbl">First Class Average</div></div>
              <div className="stat"><div className="statnum">5+</div><div className="statlbl">Live Projects</div></div>
              <div className="stat"><div className="statnum">6+</div><div className="statlbl">Certifications</div></div>
              <div className="stat"><div className="statnum">3+</div><div className="statlbl">Tech Awards</div></div>
            </div>
            <div className="avail"><div className="avdot"/>Open to internship &amp; graduate opportunities</div>
            <div style={{display:"flex",gap:".75rem",flexWrap:"wrap"}}>
              <a href={DATA.contact.github} target="_blank" rel="noreferrer" className="btn btno" style={{fontSize:".72rem",padding:".6rem 1.2rem"}}>⌥ GitHub</a>
              <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer" className="btn btno" style={{fontSize:".72rem",padding:".6rem 1.2rem"}}>↗ LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="skillsgrid rv d1">
          {DATA.skills.map(col=>(
            <div key={col.category} className="scol">
              <h4>{col.category}</h4>
              <ul>{col.items.map(it=><li key={it}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
