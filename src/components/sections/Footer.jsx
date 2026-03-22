import { C, CONFIG, NAV_LINKS } from "../../constants/config";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export default function Footer({ onNav }) {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";

  return (
    <footer style={{
      background: "#060F18",
      padding: isMobile ? "28px 20px" : "36px 48px",
      borderTop: `1px solid ${C.border}`,
    }}>
      <div style={{
        maxWidth: 1160, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 16,
      }}>
        <span style={{ fontSize: 12, color: C.gray, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          © 2025 {CONFIG.name}. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: isMobile ? 14 : 20, flexWrap: "wrap" }}>
          {NAV_LINKS.map(l => (
            <button
              key={l}
              onClick={() => onNav(l)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: C.gray, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = C.gold}
              onMouseLeave={e => e.currentTarget.style.color = C.gray}
            >{l}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}