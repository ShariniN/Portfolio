import { DATA } from '../data/portfolioData';

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
                  <span className="ct">prepwise/api/assessRoute.js</span>
                </div>
                <div className="codebody">
                  <div><span className="ccm">// adaptive skill assessment engine</span></div>
                  <div><span className="ckw">const</span> <span className="cfn">assessCandidate</span> = <span className="ckw">async</span> (req, res) =&gt; {"{"}</div>
                  <div>&nbsp;&nbsp;<span className="ckw">const</span> {"{"} userId, stack {"}"} = req.body;</div>
                  <div>&nbsp;&nbsp;<span className="ckw">const</span> profile = <span className="ckw">await</span> Profile.<span className="cfn">findById</span>(userId);</div>
                  <div>&nbsp;&nbsp;<span className="ckw">const</span> questions = <span className="ckw">await</span> llm.<span className="cfn">generate</span>({"{"}</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;model: <span className="cstr">"mistralai/Mixtral-8x7B"</span>,</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;max_tokens: <span className="cnm">512</span>,</div>
                  <div>&nbsp;&nbsp;{"}"});</div>
                  <div>&nbsp;&nbsp;res.<span className="cfn">json</span>({"{"} questions, sessionId {"}"});</div>
                  <div>{"};"}  </div>
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
