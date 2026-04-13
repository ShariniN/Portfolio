import { DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="expbg">
      <div className="wrap">
        <p className="slabel rv"><span className="num">03.</span>Experience</p>
        <h2 className="stitle rv">Work Experience</h2>
        {DATA.experience.map((e,i)=>(
          <div key={i} className={"expitem rv"+(i?" d1":"")}>
            <div><div className="expperiod">{e.period}</div><div className="expco">{e.company}</div></div>
            <div>
              <div className="expbadge">{e.badge}</div>
              <div className="exprole">{e.role}</div>
              <div className="exploc">{e.company} · {e.location}</div>
              <ul className="expul">{e.points.map((p,j)=><li key={j} dangerouslySetInnerHTML={{__html:p}}/>)}</ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
