import { DATA } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="aboutbg">
      <div className="wrap">
        <p className="slabel rv"><span className="num">01.</span>Profile</p>
        <h2 className="stitle rv">About Me</h2>
        <div className="ahero rv" style={{ gridTemplateColumns: "1fr" }}>
          <div className="aleft" style={{ borderRight: "none" }}>
            <h3 className="aheadline">Full-Stack Dev<br />&amp; <em>AI Enthusiast.</em></h3>
            <div className="abio">{DATA.bio.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}</div>
            <div style={{ marginTop: "2rem" }}><a href={"mailto:" + DATA.contact.email} className="btn btno">Get In Touch</a></div>
          </div>
        </div>
        <div className="skillsgrid rv d1">
          {DATA.skills.map(col => (
            <div key={col.category} className="scol">
              <h4>{col.category}</h4>
              <ul>{col.items.map(it => <li key={it}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
