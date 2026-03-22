import { C, PROJECTS } from "../../constants/config";
import { useInView } from "../../hooks/useInView";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export default function Projects() {
  const [ref, inView] = useInView(0.05);
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";

  return (
    <section id="projects" style={{ padding: isMobile ? "70px 20px" : isTablet ? "80px 32px" : "100px 48px", background: C.navyMid }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.gold, textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>My Work</span>
          <h2 style={{ fontSize: isMobile ? 28 : 36, fontWeight: 800, color: C.white, margin: "10px 0 8px", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}>Projects Completed</h2>
          <p style={{ fontSize: isMobile ? 14 : 16, color: C.gray, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>A selection of things I've built.</p>
        </div>

        {/* Project cards */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? 16 : 24,
          }}
        >
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              style={{
                background: C.navy, borderRadius: 16, padding: isMobile ? 20 : 28,
                border: `1px solid ${C.border}`, boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)",
                transitionDelay: `${i * 80}ms`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 48px rgba(201,168,76,0.15)";
                e.currentTarget.style.borderColor = C.gold;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
                e.currentTarget.style.borderColor = C.border;
              }}
            >
              {/* Card header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, background: "rgba(201,168,76,0.1)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, border: `1px solid ${C.border}` }}>
                  {p.emoji}
                </div>
                <span style={{ fontSize: 11, color: C.gray, background: C.navyMid, padding: "3px 10px", borderRadius: 20, fontFamily: "'Plus Jakarta Sans', sans-serif", border: `1px solid ${C.border}` }}>
                  {p.year}
                </span>
              </div>

              <h3 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, color: C.white, margin: "0 0 5px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{p.title}</h3>
              <p style={{ fontSize: 11, color: C.gold, fontWeight: 600, margin: "0 0 10px", fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>{p.type}</p>
              <p style={{ fontSize: isMobile ? 13 : 14, color: C.gray, lineHeight: 1.75, margin: "0 0 18px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{p.desc}</p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontSize: 11, padding: "3px 9px", background: "rgba(201,168,76,0.08)", color: C.goldLight, borderRadius: 6, fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif", border: `1px solid ${C.border}` }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: 16, borderTop: `1px solid ${C.border}`, paddingTop: 14 }}>
                <a href="#" style={{ fontSize: 13, color: C.gold, fontWeight: 600, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Live Demo ↗</a>
                <a href="#" style={{ fontSize: 13, color: C.gray, fontWeight: 500, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}