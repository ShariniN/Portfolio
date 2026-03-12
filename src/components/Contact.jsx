import { useState } from 'react';
import { DATA } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({name:"",email:"",message:""});
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="contactbg">
      <div className="wrap">
        <p className="slabel rv"><span className="num">06.</span>Contact</p>
        <div className="contactgrid">
          <div className="rv">
            <h2 className="ch2">Let's build something<br/><em>great</em> together.</h2>
            <p className="csub">I'm actively seeking internship and graduate opportunities in software engineering and AI. Open to collaboration, freelance, or just a good conversation about tech.</p>
            <div className="clinks">
              <a href={"mailto:"+DATA.contact.email} className="ci"><span className="ciicon">✉</span>{DATA.contact.email}</a>
              <a href={"tel:"+DATA.contact.phone.replace(/\s/g,"")} className="ci"><span className="ciicon">☏</span>{DATA.contact.phone}</a>
              <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer" className="ci"><span className="ciicon">↗</span>{DATA.contact.linkedinLabel}</a>
              <a href={DATA.contact.github} target="_blank" rel="noreferrer" className="ci"><span className="ciicon">⌥</span>{DATA.contact.githubLabel}</a>
            </div>
          </div>
          <div className="cform rv d2">
            <div className="fg"><label>Name</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></div>
            <div className="fg"><label>Email</label><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></div>
            <div className="fg"><label>Message</label><textarea rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="What's on your mind?"/></div>
            <button
              className={"btn "+(sent?"":"btnp")}
              style={sent?{background:"#34d399",borderColor:"#34d399",color:"#08080b"}:{}}
              onClick={()=>{if(form.name&&form.email&&form.message)setSent(true)}}
              disabled={sent}
            >{sent?"Sent ✓":"Send Message"}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
