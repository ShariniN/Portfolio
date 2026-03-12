import { useState, useEffect, useRef } from 'react';
import { DATA, buildSystemPrompt } from '../data/portfolioData';
import { mdToHtml } from '../utils/helpers';

const SUGGESTIONS = [
  "What projects has she built?",
  "What's her tech stack?",
  "Tell me about PrepWise",
  "What certifications does she have?",
  "Is she open to opportunities?",
  "What AI tools does she use?",
];

export default function Chatbot() {
  const [open, setOpen]     = useState(false);
  const [msgs, setMsgs]     = useState([{role:"bot",text:"Hey! 👋 I'm Sharini's portfolio assistant — ask me anything about her projects, skills, or experience!"}]);
  const [input, setInput]   = useState("");
  const [loading, setLoad]  = useState(false);
  const [showSug, setShowSug] = useState(true);
  const endRef   = useRef(null);
  const inputRef = useRef(null);
  const history  = useRef([]);
  const sysPrompt = useRef(buildSystemPrompt());

  // Use the Vite environment variable
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  useEffect(() => {
    if (open) {
      setTimeout(()=>endRef.current?.scrollIntoView({behavior:"smooth"}), 60);
      setTimeout(()=>inputRef.current?.focus(), 120);
    }
  }, [open, msgs]);

  async function send(text) {
    const q = text.trim();
    if (!q || loading) return;
    setShowSug(false);
    setInput("");
    setMsgs(p=>[...p,{role:"user",text:q}]);
    setLoad(true);
    history.current.push({role:"user",parts:[{text:q}]});
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({
            system_instruction: { parts:[{text: sysPrompt.current}] },
            contents: history.current,
            generationConfig: { maxOutputTokens:600, temperature:0.7 }
          })
        }
      );
      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
        ?? "Sorry, I couldn't get a response right now. Please try again!";
      history.current.push({role:"model",parts:[{text:reply}]});
      setMsgs(p=>[...p,{role:"bot",text:reply}]);
    } catch {
      setMsgs(p=>[...p,{role:"bot",text:"Oops — something went wrong. You can reach Sharini directly at "+DATA.contact.email}]);
    } finally {
      setLoad(false);
    }
  }

  return (
    <>
      <button className="cfab" onClick={()=>setOpen(o=>!o)} aria-label="Open AI chat">
        {open
          ? <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          : <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="9" cy="10" r="1" fill="#fff" stroke="none"/><circle cx="12" cy="10" r="1" fill="#fff" stroke="none"/><circle cx="15" cy="10" r="1" fill="#fff" stroke="none"/></svg>
        }
        {!open && <div className="cpulse"/>}
      </button>

      {open && (
        <div className="cwin">
          <div className="chead">
            <div className="chead-l">
              <div className="cavatar">SN</div>
              <div><div className="cname">Sharini's Portfolio AI</div><div className="cstatus">Online · Gemini 2.0 Flash</div></div>
            </div>
            <button className="cclose" onClick={()=>setOpen(false)}>✕</button>
          </div>

          <div className="cmsgs">
            {msgs.map((m,i)=>(
              <div key={i} className={"cmsg "+(m.role==="user"?"user":"bot")}>
                <span className="cmlabel">{m.role==="user"?"You":"Sharini's AI"}</span>
                {m.role==="user"
                  ? <div className="cmbubble">{m.text}</div>
                  : <div className="cmbubble" dangerouslySetInnerHTML={{__html: mdToHtml(m.text)}}/>
                }
              </div>
            ))}
            {loading && (
              <div className="cmsg bot">
                <span className="cmlabel">Sharini's AI</span>
                <div className="ctyping"><span/><span/><span/></div>
              </div>
            )}
            <div ref={endRef}/>
          </div>

          {showSug && (
            <div className="csugg">
              {SUGGESTIONS.map(s=><button key={s} className="csug" onClick={()=>send(s)}>{s}</button>)}
            </div>
          )}

          <div className="cinputrow">
            <textarea
              ref={inputRef}
              className="cinput"
              rows={1}
              placeholder="Ask me anything about Sharini..."
              value={input}
              onChange={e=>setInput(e.target.value)}
              onKeyDown={e=>{ if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send(input);} }}
              disabled={loading}
            />
            <button className="csend" onClick={()=>send(input)} disabled={loading||!input.trim()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
