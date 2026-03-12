import { DATA } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home">
      <div className="phero">
        <div className="phgrid"/>
        <div className="hpre"><span>&lt;</span>FullStack + AI<span>/&gt;</span></div>
        <p className="heyebrow">Portfolio 2025</p>
        <h1 className="hname">{DATA.name.first}<span className="last">{DATA.name.last}.</span></h1>
        <p className="hsub">{DATA.tagline}</p>
        <p className="htag">Final-Year Software Engineering Undergraduate &nbsp;·&nbsp; <em>First Class (85%)</em> &nbsp;·&nbsp; AI & Full-Stack Developer</p>
        <div className="hchips">{DATA.heroChips.map(c=><span key={c} className="chip">{c}</span>)}</div>
        <div className="hbtns">
          <a href="#projects" className="btn btnp">Featured Work</a>
          <a href={"mailto:"+DATA.contact.email} className="btn btno">Download CV</a>
        </div>
        <div className="hscroll"><div className="sline"/>scroll</div>
      </div>
    </section>
  );
}
