import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const m = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const move = (e) => { m.current.x = e.clientX; m.current.y = e.clientY; };
    document.addEventListener("mousemove", move);
    let raf;
    const loop = () => {
      m.current.rx += (m.current.x - m.current.rx) * 0.13;
      m.current.ry += (m.current.y - m.current.ry) * 0.13;
      if (dot.current) { dot.current.style.left = m.current.x + "px"; dot.current.style.top = m.current.y + "px"; }
      if (ring.current) { ring.current.style.left = m.current.rx + "px"; ring.current.style.top = m.current.ry + "px"; }
      raf = requestAnimationFrame(loop);
    };
    loop();
    const over = () => { dot.current?.classList.add("big"); ring.current?.classList.add("big"); };
    const out  = () => { dot.current?.classList.remove("big"); ring.current?.classList.remove("big"); };
    const attach = () => {
      document.querySelectorAll("a,button,.projcard,.certcard,.awardcard,.scol,.expitem,.stat,.chip")
        .forEach(el => { el.addEventListener("mouseenter", over); el.addEventListener("mouseleave", out); });
    };
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { document.removeEventListener("mousemove", move); cancelAnimationFrame(raf); mo.disconnect(); };
  }, []);

  return <><div ref={dot} className="cur-dot"/><div ref={ring} className="cur-ring"/></>;
}
