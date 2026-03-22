// ============================================================
// 🔧 CONFIGURATION — Edit these values to customize your portfolio
// ============================================================
export const CONFIG = {
  name: "Mariano Cholo Marcelino",
  initials: "MCM",
  role: "Full-Stack Developer",
  location: "Manila, Philippines",
  email: "cholo@marcelino.dev",
  profileImage: "/images/profile.jpg",
  logoImage: null,
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
};

export const NAV_LINKS = ["Home", "About", "Projects", "Contact"];

export const PROJECTS = [
  {
    id: 1,
    title: "Nexus Dashboard",
    type: "Full-Stack · SaaS",
    year: "2024",
    desc: "Analytics platform with real-time data visualization and AI-driven insights for enterprise clients.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    emoji: "📊",
  },
  {
    id: 2,
    title: "Arche Mobile App",
    type: "Mobile · UI Design",
    year: "2024",
    desc: "Cross-platform fitness app with adaptive workout plans, biometric tracking, and social challenges.",
    tags: ["React Native", "Firebase", "Tailwind CSS"],
    emoji: "📱",
  },
];

export const SKILLS = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend",  items: ["Laravel", "Node.js", "GraphQL", "REST API"] },
  { label: "Database", items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"] },
  { label: "DevOps",   items: ["Docker", "AWS", "Vercel", "CI/CD"] },
];

export const SLIDER_PICS = [
  { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80", caption: "Deep in code 💻" },
  { url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80", caption: "Problem solving mode 🔍" },
  { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80", caption: "Team collaboration 🤝" },
  { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80", caption: "Brainstorming ideas 💡" },
];

// Colors
export const C = {
  navy:      "#0D1B2A",
  navyMid:   "#1A2E42",
  navyLight: "#243B55",
  gold:      "#C9A84C",
  goldLight: "#E8C97A",
  white:     "#F8F9FA",
  gray:      "#8899AA",
  grayLight: "#B8C8D8",
  border:    "rgba(201,168,76,0.2)",
};