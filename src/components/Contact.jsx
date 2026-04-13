import { useState } from 'react';
import { DATA } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({name:"",email:"",message:""});
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (form.name && form.email && form.message) {
      const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.open(`mailto:${DATA.contact.email}?subject=${subject}&body=${body}`, '_self');
      setSent(true);
    }
  };

  return (
    <section id="contact" className="contactbg">
      <div className="wrap">
        <p className="slabel rv"><span className="num">06.</span>Contact</p>
        <div style={{ maxWidth: "600px" }}>
          <div className="rv">
            <h2 className="ch2">Let's work<br/><em>together.</em></h2>
            <p className="csub">Open to collaboration, freelance projects, and conversations about software engineering and AI. Feel free to reach out.</p>
            <div className="clinks">
              <a href={"mailto:"+DATA.contact.email} className="ci"><span className="ciicon">✉</span>{DATA.contact.email}</a>
              <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer" className="ci"><span className="ciicon">↗</span>{DATA.contact.linkedinLabel}</a>
              <a href={DATA.contact.github} target="_blank" rel="noreferrer" className="ci"><span className="ciicon">↗</span>{DATA.contact.githubLabel}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
