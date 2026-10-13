import { DATA } from '../data/portfolioData';

// code lines are stored as [class, text, class, text, ...]
const pairs = (line) => line.reduce((acc, v, i) => (i % 2 ? acc[acc.length - 1].push(v) : acc.push([v]), acc), []);

export default function Projects() {
  const feat = DATA.projects.find(p => p.featured);
  const rest = DATA.projects.filter(p => !p.featured);
  return (
    <section id="projects" className="projbg">
      <div className="wrap">
        <p className="slabel rv"><span className="num">04.</span>Projects</p>
        <h2 className="stitle rv">Featured Work</h2>
        <div className="projgrid">
          {feat && (
            <div className="projfeat rv">
              <div>
                <p className="pflabel">★Projects</p>
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
                <div className="pftags">{feat.tags.map(t => <span key={t} className="ptag">{t}</span>)}</div>
                <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
                  {feat.github && <a href={feat.github} target="_blank" rel="noreferrer" className="btn btno" style={{ fontSize: ".72rem", padding: ".65rem 1.4rem" }}>GitHub →</a>}
                  {feat.live && <a href={feat.live} target="_blank" rel="noreferrer" className="btn btnp" style={{ fontSize: ".72rem", padding: ".65rem 1.4rem" }}>Live Demo ↗</a>}
                </div>
              </div>
              <div className="codewin">
                <div className="codebar">
                  <div className="cd" style={{ background: "#ff5f56" }} /><div className="cd" style={{ background: "#ffbd2e" }} /><div className="cd" style={{ background: "#27c93f" }} />
                  <span className="ct">{feat.code?.file}</span>
                </div>
                <div className="codebody">
                  {feat.code?.lines.map((line, i) => (
                    <div key={i} style={{ whiteSpace: "pre" }}>
                      {pairs(line).map(([cls, text], j) => cls ? <span key={j} className={cls}>{text}</span> : text)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {rest.map((proj, i) => (
            <div key={proj.title} className={"projcard rv d" + (i % 4 + 1)}>
              <p className="projn">0{i + 1}</p>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="ptags">{proj.tags.map(t => <span key={t} className="ptag">{t}</span>)}</div>
              <div className="plinks">
                {proj.github && <a href={proj.github} target="_blank" rel="noreferrer" className="plink">GitHub →</a>}
                {proj.live && <a href={proj.live} target="_blank" rel="noreferrer" className="plink">Live ↗</a>}
                {!proj.github && !proj.live && <span style={{ fontFamily: "var(--mono)", fontSize: ".68rem", color: "var(--muted)" }}>Private repo</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
