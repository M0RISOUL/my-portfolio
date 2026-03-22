import { useState, useEffect } from "react";
import { C, CONFIG } from "../../constants/config";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export default function Hero({ onNav }) {
  const [show, setShow] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";

  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  const fade = (delay = 0) => ({
    opacity: show ? 1 : 0,
    transform: show ? "none" : "translateY(28px)",
    transition: `all 0.7s ease ${delay}ms`,
  });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: isMobile ? "90px 20px 60px" : isTablet ? "100px 32px 70px" : "100px 48px 80px",
        background: `linear-gradient(135deg, ${C.navy} 0%, #0F2035 50%, #0D1B2A 100%)`,
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: isMobile ? 200 : 420, height: isMobile ? 200 : 420,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1160, margin: "0 auto", width: "100%",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? 40 : isTablet ? 48 : 72,
        alignItems: "center",
      }}>
        {/* LEFT — Text */}
        <div>
          <div style={{ ...fade(0), display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${C.border}`, borderRadius: 24, padding: "6px 16px", marginBottom: 24, background: "rgba(201,168,76,0.08)" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.gold }} />
            <span style={{ fontSize: 11, color: C.gold, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.06em" }}>FULL-STACK DEVELOPER</span>
          </div>

          <h1 style={{
            ...fade(80),
            fontSize: isMobile ? 32 : isTablet ? 40 : 52,
            fontWeight: 800, color: C.white, lineHeight: 1.12,
            margin: "0 0 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em",
          }}>
            Hi, I'm<br />
            <span style={{ color: C.gold }}>{CONFIG.name}</span>
          </h1>

          <p style={{ ...fade(160), fontSize: isMobile ? 15 : 17, color: C.grayLight, lineHeight: 1.8, margin: "0 0 10px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Building fast, scalable, and elegant web applications from Manila, PH.
          </p>
          <p style={{ ...fade(200), fontSize: 13, color: C.gray, margin: "0 0 32px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            5+ years of experience · 30+ projects shipped
          </p>

          <div style={{ ...fade(240), display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={() => onNav("Projects")}
              style={{
                padding: isMobile ? "11px 22px" : "13px 28px", borderRadius: 10,
                fontSize: isMobile ? 14 : 15, fontWeight: 700,
                background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                color: C.navy, border: "none", cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                boxShadow: "0 4px 20px rgba(201,168,76,0.4)", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
            >View My Work →</button>

            <button
              onClick={() => onNav("Contact")}
              style={{
                padding: isMobile ? "11px 22px" : "13px 28px", borderRadius: 10,
                fontSize: isMobile ? 14 : 15, fontWeight: 600,
                background: "transparent", color: C.grayLight,
                border: "1.5px solid rgba(184,200,216,0.3)", cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(184,200,216,0.3)"; e.currentTarget.style.color = C.grayLight; }}
            >Contact Me</button>
          </div>

          <div style={{ ...fade(300), display: "flex", gap: 20, marginTop: 32, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, color: C.gray, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Connect:</span>
            {[["GitHub", CONFIG.socials.github], ["LinkedIn", CONFIG.socials.linkedin], ["Twitter", CONFIG.socials.twitter]].map(([label, href]) => (
              <a
                key={label} href={href}
                style={{ fontSize: 13, color: C.grayLight, textDecoration: "none", fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = C.gold}
                onMouseLeave={e => e.currentTarget.style.color = C.grayLight}
              >{label}</a>
            ))}
          </div>
        </div>

        {/* RIGHT — Profile card */}
        <div style={{ ...fade(150), display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: 340 }}>
            <div style={{
              background: C.navyMid, borderRadius: 24,
              border: `1px solid ${C.border}`,
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
              padding: isMobile ? 24 : 32, textAlign: "center",
            }}>
              {/* Profile picture */}
              <div style={{
                width: 100, height: 100, borderRadius: "50%", margin: "0 auto 16px",
                overflow: "hidden", border: `3px solid ${C.gold}`,
                background: `linear-gradient(135deg, ${C.navyLight}, ${C.navy})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 0 6px rgba(201,168,76,0.1)",
              }}>
                <img
                  src={CONFIG.profileImage}
                  alt={CONFIG.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }}
                />
                <span style={{ fontSize: 32, color: C.gold, fontWeight: 900, fontFamily: "'Plus Jakarta Sans', sans-serif", display: "none", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                  {CONFIG.initials}
                </span>
              </div>

              <h3 style={{ fontWeight: 800, fontSize: isMobile ? 16 : 18, color: C.white, margin: "0 0 4px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{CONFIG.name}</h3>
              <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, margin: "0 0 4px", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.04em", textTransform: "uppercase" }}>{CONFIG.role}</p>
              <p style={{ color: C.gray, fontSize: 12, margin: "0 0 20px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>📍 {CONFIG.location}</p>

              <div style={{ display: "flex", justifyContent: "center", gap: 7, flexWrap: "wrap", marginBottom: 20 }}>
                {["React", "Laravel", "Node.js"].map(t => (
                  <span key={t} style={{ fontSize: 11, padding: "4px 10px", background: "rgba(201,168,76,0.1)", color: C.goldLight, borderRadius: 6, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", border: `1px solid ${C.border}` }}>{t}</span>
                ))}
              </div>

              <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 18, display: "flex", justifyContent: "space-around" }}>
                {[["5+", "Years"], ["30+", "Projects"], ["15+", "Clients"]].map(([num, label]) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: C.gold, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{num}</div>
                    <div style={{ fontSize: 11, color: C.gray, fontFamily: "'Plus Jakarta Sans', sans-serif", marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges (desktop only) */}
            {!isMobile && (
              <>
                <div style={{ position: "absolute", top: -14, right: -18, background: C.navyMid, borderRadius: 10, padding: "8px 12px", border: `1px solid ${C.border}`, boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.white, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>⚡ Available Now</span>
                </div>
                <div style={{ position: "absolute", bottom: -14, left: -18, background: C.navyMid, borderRadius: 10, padding: "8px 12px", border: `1px solid ${C.border}`, boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.white, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>🚀 30+ Projects</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}