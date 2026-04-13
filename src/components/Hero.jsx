import { DATA } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home">
      <div className="phero">
        <div className="phgrid" />
        <h1 className="hname">{DATA.name.first}<span className="last">{DATA.name.last}.</span></h1>
        <p className="hsub">{DATA.tagline}</p>
        <p className="htag">Software Engineer Intern @ hsenid Business Solutions &nbsp;·&nbsp; BEng (Hons) Software Engineering</p>
        <div className="hchips">{DATA.heroChips.map(c => <span key={c} className="chip">{c}</span>)}</div>
        <div className="hbtns">
          <a href="#projects" className="btn btnp">Featured Work</a>
          <a href={DATA.cvUrl} target="_blank" rel="noreferrer" className="btn btno">Download CV ↗</a>
        </div>
      </div>
    </section>
  );
}
