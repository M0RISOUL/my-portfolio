import { useState, useEffect } from "react";
import { C, SLIDER_PICS } from "../../constants/config";

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (idx) => {
    if (fading || idx === current) return;
    setFading(true);
    setTimeout(() => { setCurrent(idx); setFading(false); }, 300);
  };

  const prev = () => goTo((current - 1 + SLIDER_PICS.length) % SLIDER_PICS.length);
  const next = () => goTo((current + 1) % SLIDER_PICS.length);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % SLIDER_PICS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${C.border}`, boxShadow: "0 24px 64px rgba(0,0,0,0.4)", userSelect: "none" }}>
      {/* Image */}
      <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: C.navyMid }}>
        <img
          src={SLIDER_PICS[current].url}
          alt={SLIDER_PICS[current].caption}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            opacity: fading ? 0 : 1,
            transform: fading ? "scale(1.04)" : "scale(1)",
            transition: "all 0.3s ease",
          }}
        />
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,27,42,0.7) 0%, transparent 50%)" }} />

        {/* Prev / Next arrows */}
        {[{ fn: prev, label: "‹", side: "left" }, { fn: next, label: "›", side: "right" }].map(({ fn, label, side }) => (
          <button
            key={side}
            onClick={fn}
            style={{
              position: "absolute", top: "50%", [side]: 14, transform: "translateY(-50%)",
              width: 38, height: 38, borderRadius: "50%", border: `1px solid ${C.border}`,
              background: "rgba(13,27,42,0.7)", backdropFilter: "blur(8px)",
              color: C.goldLight, fontSize: 22, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", lineHeight: 1,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = C.gold; e.currentTarget.style.color = C.navy; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(13,27,42,0.7)"; e.currentTarget.style.color = C.goldLight; }}
          >{label}</button>
        ))}

        {/* Dot indicators */}
        <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
          {SLIDER_PICS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 22 : 7, height: 7, borderRadius: 4,
                border: "none", cursor: "pointer", padding: 0,
                background: i === current ? C.gold : "rgba(255,255,255,0.35)",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Caption */}
      <div style={{ background: C.navyMid, padding: "12px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, color: C.grayLight, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {SLIDER_PICS[current].caption}
        </span>
        <span style={{ fontSize: 12, color: C.gray, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {current + 1} / {SLIDER_PICS.length}
        </span>
      </div>
    </div>
  );
}