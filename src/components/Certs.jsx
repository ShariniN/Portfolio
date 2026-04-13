import { DATA } from '../data/portfolioData';

export default function Certs() {
  return (
    <section id="certs" className="certbg">
      <div className="wrap">
        <p className="slabel rv"><span className="num">05.</span>Credentials</p>
        <h2 className="stitle rv">Certifications</h2>
        <div className="certsgrid">
          {DATA.certifications.map((c, i) => {
            const Tag = c.url ? "a" : "div";
            const props = c.url ? { href: c.url, target: "_blank", rel: "noreferrer" } : {};
            return (
              <Tag key={i} className={"certcard rv d" + (i % 6 + 1) + (c.url ? "" : " certnl")} {...props}>
                <div className="certissuer">{c.issuer}</div>
                <div className="certtitle">{c.title}</div>
                <div className="certyear">{c.year}</div>
                <div className="certarrow">{c.url ? "↗ View Certificate" : "— Link coming soon"}</div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
