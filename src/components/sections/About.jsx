import { C, SKILLS } from "../../constants/config";
import { useInView } from "../../hooks/useInView";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import ImageSlider from "../ui/ImageSlider";

export default function About() {
  const [ref, inView] = useInView();
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";

  return (
    <section id="about" style={{ padding: isMobile ? "70px 20px" : isTablet ? "80px 32px" : "100px 48px", background: C.navy }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.gold, textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>About Me</span>
          <h2 style={{ fontSize: isMobile ? 28 : 36, fontWeight: 800, color: C.white, margin: "10px 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}>Who I Am</h2>
        </div>

        <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)", transition: "all 0.7s ease" }}>

          {/* Bio + Slider */}
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 32 : 52,
            marginBottom: 48,
            alignItems: "flex-start",
          }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: isMobile ? 15 : 16, color: C.grayLight, lineHeight: 1.9, margin: "0 0 18px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                I'm a passionate full-stack developer who loves crafting clean, performant digital experiences. I've worked with startups and established companies, helping them build reliable products from the ground up.
              </p>
              <p style={{ fontSize: isMobile ? 15 : 16, color: C.grayLight, lineHeight: 1.9, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                When I'm not coding, I enjoy contributing to open source, writing technical articles, and exploring new frameworks and tools that push the web forward.
              </p>
            </div>
            <div style={{ width: isMobile ? "100%" : isTablet ? "45%" : "46%", flexShrink: 0 }}>
              <ImageSlider />
            </div>
          </div>

          {/* Skills */}
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 44 }}>
            <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: C.gold, textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 24 }}>Tech Stack</p>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
              gap: isMobile ? 12 : 16,
              marginBottom: 44,
            }}>
              {SKILLS.map(({ label, items }) => (
                <div key={label} style={{ background: C.navyMid, borderRadius: 12, padding: isMobile ? 14 : 20, border: `1px solid ${C.border}` }}>
                  <h4 style={{ fontSize: 11, fontWeight: 700, color: C.gold, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label}</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {items.map(item => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, flexShrink: 0 }} />
                        <span style={{ fontSize: isMobile ? 12 : 13, color: C.grayLight, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div style={{
              display: "flex", justifyContent: "center",
              gap: isMobile ? 32 : 80,
              borderTop: `1px solid ${C.border}`, paddingTop: 36,
              flexWrap: "wrap",
            }}>
              {[["5+", "Years Experience"], ["30+", "Projects Completed"], ["15+", "Happy Clients"]].map(([num, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: isMobile ? 32 : 40, fontWeight: 900, color: C.gold, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: isMobile ? 12 : 13, color: C.gray, marginTop: 7, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}