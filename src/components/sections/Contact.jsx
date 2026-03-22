import { useState } from "react";
import { C, CONFIG } from "../../constants/config";
import { useInView } from "../../hooks/useInView";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%", padding: "12px 14px",
    border: `1.5px solid ${C.border}`, borderRadius: 8,
    fontSize: 14, color: C.white, fontFamily: "'Plus Jakarta Sans', sans-serif",
    background: C.navy, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: isMobile ? "70px 20px" : isTablet ? "80px 32px" : "100px 48px", background: C.navy }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.gold, textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Contact</span>
          <h2 style={{ fontSize: isMobile ? 28 : 36, fontWeight: 800, color: C.white, margin: "10px 0 8px", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}>Let's Work Together</h2>
          <p style={{ fontSize: isMobile ? 14 : 16, color: C.gray, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Have a project in mind? I'd love to hear about it.</p>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1.4fr",
            gap: isMobile ? 36 : 52,
            opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)", transition: "all 0.7s ease",
          }}
        >
          {/* Info */}
          <div>
            <p style={{ fontSize: isMobile ? 14 : 15, color: C.grayLight, lineHeight: 1.85, margin: "0 0 32px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              I'm currently available for full-time roles, and collaboration on interesting projects. Let's build something exceptional together!
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                { icon: "✉️", label: "Email", value: CONFIG.email },
                { icon: "📍", label: "Location", value: CONFIG.location },
                { icon: "⏱️", label: "Response Time", value: "Within 24 hours" },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 42, height: 42, background: "rgba(201,168,76,0.1)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0, border: `1px solid ${C.border}` }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: C.gray, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
                    <div style={{ fontSize: isMobile ? 13 : 14, color: C.grayLight, fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: C.navyMid, borderRadius: 16, padding: isMobile ? 20 : 32, border: `1px solid ${C.border}` }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14, marginBottom: 14 }}>
              {[
                { key: "name", label: "Name", placeholder: "Mariano Cholo", type: "text" },
                { key: "email", label: "Email", placeholder: "cholo@email.com", type: "email" },
              ].map(({ key, label, placeholder, type }) => (
                <div key={key}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: C.grayLight, display: "block", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</label>
                  <input
                    type={type} placeholder={placeholder}
                    value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = C.gold}
                    onBlur={e => e.currentTarget.style.borderColor = C.border}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontSize: 11, fontWeight: 600, color: C.grayLight, display: "block", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.06em" }}>Message</label>
              <textarea
                rows={5} placeholder="Tell me about your project..."
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={e => e.currentTarget.style.borderColor = C.gold}
                onBlur={e => e.currentTarget.style.borderColor = C.border}
              />
            </div>
            <button
              onClick={handleSubmit}
              style={{
                width: "100%", padding: "14px", borderRadius: 8, border: "none", cursor: "pointer",
                fontSize: 15, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: sent ? "#22c55e" : `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                color: sent ? "white" : C.navy,
                boxShadow: sent ? "none" : "0 4px 20px rgba(201,168,76,0.35)", transition: "all 0.2s",
              }}
              onMouseEnter={e => { if (!sent) e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
            >
              {sent ? "✓ Message Sent!" : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}