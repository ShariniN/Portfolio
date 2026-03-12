import { DATA } from '../data/portfolioData';

export default function Certs() {
  return (
    <section id="certs" className="certbg">
      <div className="wrap">
        <p className="slabel rv"><span className="num">05.</span>Achievements</p>
        <h2 className="stitle rv">Certificates &amp; Awards</h2>
        <div className="certsgrid">
          {DATA.certifications.map((c,i)=>{
            const Tag = c.url ? "a" : "div";
            const props = c.url ? {href:c.url,target:"_blank",rel:"noreferrer"} : {};
            return (
              <Tag key={i} className={"certcard rv d"+(i%6+1)+(c.url?"":" certnl")} {...props}>
                <div className="certissuer">{c.issuer}</div>
                <div className="certtitle">{c.title}</div>
                <div className="certyear">{c.year}</div>
                <div className="certarrow">{c.url ? "↗ View Certificate" : "— Link coming soon"}</div>
              </Tag>
            );
          })}
        </div>
        <h3 className="rv" style={{fontSize:"1.3rem",fontWeight:700,letterSpacing:"-.03em",marginTop:"3.5rem",marginBottom:"1.5rem"}}>Awards &amp; Recognition</h3>
        <div className="awardsgrid">
          {DATA.awards.map((a,i)=>(
            <div key={i} className={"awardcard rv d"+(i+1)}>
              <span className="awardicon">{a.icon}</span>
              <h4>{a.title}</h4>
              <p>{a.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
