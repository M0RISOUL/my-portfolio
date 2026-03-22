import { useState, useEffect } from "react";
import { C, CONFIG, NAV_LINKS } from "../../constants/config";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export default function Nav({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleNav = (link) => { onNav(link); setMenuOpen(false); };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled || menuOpen ? "rgba(13,27,42,0.97)" : "transparent",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all 0.35s ease",
        padding: isMobile ? "0 20px" : "0 48px",
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <button onClick={() => handleNav("Home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {CONFIG.logoImage
                ? <img src={CONFIG.logoImage} alt="logo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 8 }} />
                : <span style={{ color: C.navy, fontWeight: 900, fontSize: 11, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{CONFIG.initials}</span>
              }
            </div>
            {!isMobile ? (
              <span style={{ fontWeight: 700, fontSize: 14, color: C.white, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {CONFIG.name.split(" ")[0]}{" "}
                <span style={{ color: C.gold }}>{CONFIG.name.split(" ").slice(1).join(" ")}</span>
              </span>
            ) : (
              <span style={{ fontWeight: 700, fontSize: 14, color: C.gold, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {CONFIG.initials}
              </span>
            )}
          </button>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNav(link)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    padding: "8px 14px", borderRadius: 6, fontSize: 14, fontWeight: 500,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: active === link ? C.gold : C.grayLight,
                    borderBottom: active === link ? `2px solid ${C.gold}` : "2px solid transparent",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { if (active !== link) e.currentTarget.style.color = C.white; }}
                  onMouseLeave={e => { if (active !== link) e.currentTarget.style.color = C.grayLight; }}
                >{link}</button>
              ))}
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: 12, padding: "8px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600,
                  background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                  color: C.navy, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: "0 2px 12px rgba(201,168,76,0.35)", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(201,168,76,0.55)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(201,168,76,0.35)"; }}
              >Resume</a>
            </div>
          )}

          {/* Hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{
                background: "none", border: `1px solid ${C.border}`, borderRadius: 8,
                width: 40, height: 40, cursor: "pointer", color: C.gold, fontSize: 18,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
          background: "rgba(13,27,42,0.99)", borderBottom: `1px solid ${C.border}`,
          backdropFilter: "blur(16px)", padding: "12px 20px 20px",
        }}>
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                background: "none", border: "none", cursor: "pointer",
                padding: "14px 0", fontSize: 16, fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: active === link ? C.gold : C.grayLight,
                borderBottom: `1px solid ${C.border}`,
              }}
            >{link}</button>
          ))}
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block", marginTop: 16, padding: "13px", borderRadius: 8, textAlign: "center",
              background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
              color: C.navy, textDecoration: "none", fontWeight: 700, fontSize: 15,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >Resume</a>
        </div>
      )}
    </>
  );
}