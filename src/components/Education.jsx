import { DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="edubg">
      <div className="wrap">
        <p className="slabel rv"><span className="num">02.</span>Education</p>
        <h2 className="stitle rv">Education</h2>
        {DATA.education.map((e,i)=>(
          <div key={i} className={"edublock rv"+(i?" d1":"")}>
            <div className="eduhead">
              <div><h3>{e.degree}</h3><div className="eduinst">{e.institution}</div></div>
              <div style={{textAlign:"right"}}><div className="eduinst">{e.period}</div><div className="eduperio">{e.location}</div></div>
            </div>
            <div className="edugrade">{e.grade}</div>
            <ul>{e.points.map((p,j)=><li key={j} dangerouslySetInnerHTML={{__html:p}}/>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
