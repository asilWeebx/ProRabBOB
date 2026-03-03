import { useState, useEffect, useRef } from "react";

import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.jpg";
import img11 from "./assets/11.jpg";
import img12 from "./assets/12.jpg";
import img13 from "./assets/13.jpg";
import img14 from "./assets/14.jpg";
import img15 from "./assets/15.jpg";
import img16 from "./assets/16.jpg";



// ─── PORTFOLIO MA'LUMOTLARI — RASMLARNI imgs[] ICHIGA QO'SHING ───────────────
const PORTFOLIO = [
  {
    id: 1,
    imgs: [
      img1
    ],
  },
  {
    id: 2,
    imgs: [
     img2
    ],
  },
  {
    id: 3,
    imgs: [
     img3
    ],
  },
  {
    id: 4,
    imgs: [
     img4
    ],
  },
  {
    id: 5,
    imgs: [
     img5
    ],
  },
  {
    id: 6,
    imgs: [
     img6
    ],
  },
  {
    id: 7,
    imgs: [
     img7
    ],
  },
  {
    id: 8,
    imgs: [
     img8
    ],
  },
  {
    id: 9,
    imgs: [
     img9
    ],
  },
  {
    id: 10,
    imgs: [
     img10
    ],
  },
  {
    id: 11,
    imgs: [
     img11
    ],
  },
  {
    id: 12,
    imgs: [
     img12
    ],
  },
  {
    id: 13,
    imgs: [
     img13
    ],
  },

  {
    id: 14,
    imgs: [
      img14
    ],
  },
  {
    id: 15,
    imgs: [
      img15
    ],
  },
  {
    id: 16,
    imgs: [
      img16,
    ],
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Bosh sahifa", href: "#hero" },
  { label: "Men haqimda", href: "#about" },
  { label: "Xizmatlar", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Aloqa", href: "#contact" },
];

const SERVICES = [
  { icon: "🛣️", title: "Asfalt Yotqizish", items: ["Issiq asfalt", "Qatlamli asfalt", "Ta'mirlash ishlari"] },
  { icon: "🏗️", title: "Yo'l Tayyorlash", items: ["Grunt tekislash", "Shag'al to'kish", "Zichlash"] },
  { icon: "🚜", title: "Texnika Xizmati", items: ["Katok", "Asfalt yotqizuvchi", "Ekskavator"] },
];

const STATS = [
  { value: "2000+", label: "Kilometr Yo'l" },
  { value: "120+", label: "Loyiha" },
  { value: "7+", label: "Yil Tajriba" },
  { value: "98%", label: "Mijoz Mamnunligi" },
];

const ADVANTAGES = [
  { icon: "⚡", text: "2000+ km tajriba" },
  { icon: "🔍", text: "Sifat nazorati" },
  { icon: "🚧", text: "Zamonaviy texnika" },
  { icon: "📅", text: "Muddatga rioya" },
  { icon: "🛡️", text: "Kafolat beriladi" },
  { icon: "📍", text: "Butun O'zbekiston" },
];

// ─── PLACEHOLDER SVG (rasm bo'lmasa ko'rsatiladi) ─────────────────────────────
function ImgPlaceholder({ name }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "linear-gradient(135deg, #161616 0%, #1e1e1e 100%)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 12,
    }}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="10" width="40" height="28" rx="3" stroke="#333" strokeWidth="2" />
        <circle cx="16" cy="20" r="4" stroke="#444" strokeWidth="2" />
        <path d="M4 32l10-8 8 6 8-10 14 10" stroke="#333" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#333", textAlign: "center", padding: "0 16px" }}>
        {name}
      </span>
    </div>
  );
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function Lightbox({ imgs, name, startIndex, onClose }) {
  const [cur, setCur] = useState(startIndex);
  const total = imgs.length;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCur(c => (c + 1) % total);
      if (e.key === "ArrowLeft") setCur(c => (c - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [total, onClose]);

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(0,0,0,0.96)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: 20,
    }}>
      {/* Close */}
      <button onClick={onClose} style={{
        position: "fixed", top: 20, right: 24,
        background: "none", border: "none",
        color: "#888", fontSize: 28, cursor: "pointer",
        transition: "color .2s", lineHeight: 1,
      }}
        onMouseEnter={e => e.currentTarget.style.color = "#fff"}
        onMouseLeave={e => e.currentTarget.style.color = "#888"}
      >✕</button>

      {/* Counter */}
      <div style={{ position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 15, color: "#666", letterSpacing: 2 }}>
        <span style={{ color: "#F5C518" }}>{cur + 1}</span> / {total} — {name}
      </div>

      {/* Main image */}
      <div onClick={e => e.stopPropagation()} style={{ position: "relative", maxWidth: "88vw", maxHeight: "75vh", display: "flex", alignItems: "center" }}>
        <img
          src={imgs[cur]}
          alt={name}
          style={{ maxWidth: "88vw", maxHeight: "75vh", objectFit: "contain", display: "block", userSelect: "none" }}
        />

        {total > 1 && (
          <>
            <button onClick={() => setCur(c => (c - 1 + total) % total)} style={arrowBtn("left")}>‹</button>
            <button onClick={() => setCur(c => (c + 1) % total)} style={arrowBtn("right")}>›</button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {total > 1 && (
        <div onClick={e => e.stopPropagation()} style={{
          display: "flex", gap: 8, marginTop: 16,
          overflowX: "auto", maxWidth: "88vw", paddingBottom: 4,
        }}>
          {imgs.map((img, i) => (
            <div key={i} onClick={() => setCur(i)} style={{
              width: 60, height: 60, flexShrink: 0,
              border: i === cur ? "2px solid #F5C518" : "2px solid transparent",
              overflow: "hidden", cursor: "pointer",
              opacity: i === cur ? 1 : 0.5,
              transition: "all .2s",
            }}>
              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function arrowBtn(side) {
  return {
    position: "absolute", top: "50%", transform: "translateY(-50%)",
    [side === "left" ? "left" : "right"]: -56,
    background: "rgba(245,197,24,0.1)",
    border: "1px solid rgba(245,197,24,0.3)",
    color: "#F5C518", fontSize: 36,
    width: 48, height: 48,
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", transition: "all .2s", borderRadius: 2,
  };
}

// ─── PORTFOLIO CARD ────────────────────────────────────────────────────────────
function PortfolioCard({ project }) {
  const [slide, setSlide] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [hovered, setHovered] = useState(false);
  const hasImgs = project.imgs.length > 0;
  const total = project.imgs.length;

  // Auto-advance slider on hover
  useEffect(() => {
    if (!hovered || total < 2) return;
    const t = setInterval(() => setSlide(c => (c + 1) % total), 2000);
    return () => clearInterval(t);
  }, [hovered, total]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#111",
        border: `1px solid ${hovered ? "#F5C518" : "#1e1e1e"}`,
        overflow: "hidden",
        transition: "border-color .3s, box-shadow .3s",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.5)" : "none",
      }}
    >
      {/* ── Image area ── */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", background: "#0d0d0d", cursor: hasImgs ? "zoom-in" : "default" }}
        onClick={() => hasImgs && setLightbox(slide)}
      >
        {hasImgs ? (
          <>
            {/* Slides */}
            {project.imgs.map((img, i) => (
              <img key={i} src={img} alt={project.name}
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  opacity: i === slide ? 1 : 0,
                  transform: i === slide ? (hovered ? "scale(1.05)" : "scale(1)") : "scale(1)",
                  transition: "opacity .5s ease, transform .6s ease",
                }}
              />
            ))}

            {/* Gradient overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)", pointerEvents: "none" }} />

            {/* Dot indicators */}
            {total > 1 && (
              <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
                {project.imgs.map((_, i) => (
                  <div key={i} onClick={e => { e.stopPropagation(); setSlide(i); }} style={{
                    width: i === slide ? 20 : 6, height: 6,
                    background: i === slide ? "#F5C518" : "rgba(255,255,255,0.4)",
                    borderRadius: 3, cursor: "pointer",
                    transition: "all .3s",
                  }} />
                ))}
              </div>
            )}

            {/* Prev / Next arrows */}
            {total > 1 && hovered && (
              <>
                <button onClick={e => { e.stopPropagation(); setSlide(c => (c - 1 + total) % total); }} style={slideBtn("left")}>‹</button>
                <button onClick={e => { e.stopPropagation(); setSlide(c => (c + 1) % total); }} style={slideBtn("right")}>›</button>
              </>
            )}

            {/* Image count badge */}
            {total > 1 && (
              <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.7)", border: "1px solid rgba(245,197,24,0.3)", padding: "3px 10px", fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#F5C518" }}>
                📷 {total} ta rasm
              </div>
            )}

            {/* Zoom hint */}
            {hovered && (
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.2)", padding: "8px 16px", fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#fff", pointerEvents: "none", opacity: 0.9, whiteSpace: "nowrap" }}>
                🔍 Kattalashtirish
              </div>
            )}
          </>
        ) : (
          <ImgPlaceholder name="Rasm yo'q — imgs[] ga qo'shing" />
        )}
      </div>

      {/* ── Info ── */}
      <div style={{ padding: "20px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ background: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.3)", padding: "4px 12px" }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: "#F5C518", letterSpacing: 2 }}>{project.km}</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, color: "#444", background: "#1a1a1a", padding: "3px 8px", textTransform: "uppercase", letterSpacing: 1 }}>{project.type}</span>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "#555" }}>{project.year}</span>
          </div>
        </div>
        <div style={{ width: 28, height: 3, background: "#F5C518", marginBottom: 10 }} />
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: "#fff", letterSpacing: 2, marginBottom: 8 }}>{project.name}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: "#F5C518", fontSize: 13 }}>📍</span>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "#666" }}>{project.location}</span>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox imgs={project.imgs} name={project.name} startIndex={lightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}

function slideBtn(side) {
  return {
    position: "absolute", top: "50%", transform: "translateY(-50%)",
    [side === "left" ? "left" : "right"]: 8,
    background: "rgba(0,0,0,0.7)", border: "none",
    color: "#fff", fontSize: 24,
    width: 36, height: 36,
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", borderRadius: 2, lineHeight: 1,
    transition: "background .2s",
  };
}

// ─── COUNTER ──────────────────────────────────────────────────────────────────
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.replace(/\D/g, ""));
    const suffix = target.replace(/[\d]/g, "");
    let startTime = null;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num) + suffix);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [start, target, duration]);
  return count || "0";
}

function StatItem({ value, label, started }) {
  const count = useCountUp(value, 1800, started);
  return (
    <div style={{ textAlign: "center", padding: "8px 16px" }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px,5vw,64px)", color: "#0a0a0a", lineHeight: 1, letterSpacing: 2 }}>{count}</div>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, color: "#333", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginTop: 6 }}>{label}</div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function ProrabBob() {
  const [scrolled, setScrolled] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Barchasi");
  const statsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.2 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const filters = ["Barchasi"];
  const filtered = activeFilter === "Barchasi" ? PORTFOLIO : PORTFOLIO.filter(p => p.type === activeFilter);

  return (
    <div style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        ::selection { background:#F5C518; color:#0a0a0a; }
        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:#111; }
        ::-webkit-scrollbar-thumb { background:#F5C518; border-radius:3px; }

        .nav-link { color:#ccc; font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:15px; letter-spacing:1.5px; text-transform:uppercase; transition:color .2s; cursor:pointer; }
        .nav-link:hover { color:#F5C518; }

        .btn-primary { background:#F5C518; color:#0a0a0a; border:none; padding:16px 40px; font-family:'Bebas Neue',sans-serif; font-size:20px; letter-spacing:2px; cursor:pointer; clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px)); transition:all .2s; display:inline-block; }
        .btn-primary:hover { background:#fff; transform:translateY(-2px); box-shadow:0 8px 30px rgba(245,197,24,.4); }
        .btn-outline { background:transparent; color:#F5C518; border:2px solid #F5C518; padding:14px 36px; font-family:'Bebas Neue',sans-serif; font-size:18px; letter-spacing:2px; cursor:pointer; transition:all .2s; }
        .btn-outline:hover { background:#F5C518; color:#0a0a0a; }

        .service-card { background:#111; border:1px solid #222; padding:40px 32px; cursor:pointer; transition:all .3s; position:relative; overflow:hidden; }
        .service-card::before { content:''; position:absolute; top:0; left:0; width:4px; height:100%; background:#F5C518; transform:scaleY(0); transition:transform .3s; transform-origin:bottom; }
        .service-card:hover::before, .service-card.active::before { transform:scaleY(1); }
        .service-card:hover, .service-card.active { border-color:#F5C518; background:#141414; transform:translateY(-4px); box-shadow:0 20px 60px rgba(0,0,0,.5); }

        .adv-item { display:flex; align-items:center; gap:16px; padding:20px 24px; background:#111; border:1px solid #1e1e1e; transition:all .3s; }
        .adv-item:hover { border-color:#F5C518; background:#141414; }

        .filter-btn { font-family:'Barlow Condensed',sans-serif; font-size:14px; letter-spacing:2px; text-transform:uppercase; padding:8px 20px; border:1px solid #2a2a2a; background:transparent; color:#666; cursor:pointer; transition:all .2s; }
        .filter-btn.active, .filter-btn:hover { background:#F5C518; color:#0a0a0a; border-color:#F5C518; }

        .stripe-bg { background-image:repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(245,197,24,.03) 20px,rgba(245,197,24,.03) 40px); }
        @keyframes float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)} }
        @keyframes pulse-ring { 0%{box-shadow:0 0 0 0 rgba(245,197,24,.4)}70%{box-shadow:0 0 0 20px rgba(245,197,24,0)}100%{box-shadow:0 0 0 0 rgba(245,197,24,0)} }
        .float-anim { animation:float 4s ease-in-out infinite; }
        .pulse-anim { animation:pulse-ring 2s infinite; }
        .yellow-line { width:60px; height:5px; background:#F5C518; margin-bottom:24px; }
        .section-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(48px,7vw,96px); color:#fff; letter-spacing:3px; line-height:1; }
        .contact-input { width:100%; background:#111; border:1px solid #2a2a2a; color:#fff; padding:16px 20px; font-family:'Barlow',sans-serif; font-size:15px; outline:none; transition:border-color .2s; }
        .contact-input:focus { border-color:#F5C518; }
        .contact-input::placeholder { color:#555; }

        @media (max-width:768px) {
          .desktop-nav { display:none !important; }
          .two-col { grid-template-columns:1fr !important; }
          .three-col { grid-template-columns:1fr 1fr !important; }
          .four-col { grid-template-columns:1fr 1fr !important; }
        }
        @media (max-width:480px) {
          .three-col { grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, background:scrolled?"rgba(8,8,8,.97)":"transparent", backdropFilter:scrolled?"blur(20px)":"none", borderBottom:scrolled?"1px solid #1e1e1e":"none", transition:"all .3s", padding:"0 5%" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:70 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ width:38, height:38, background:"#F5C518", display:"flex", alignItems:"center", justifyContent:"center", clipPath:"polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}>
              <span style={{ fontSize:18 }}>🚧</span>
            </div>
            <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:24, color:"#fff", letterSpacing:3 }}>PRORAB<span style={{ color:"#F5C518" }}>BOB</span></span>
          </div>
          <div className="desktop-nav" style={{ display:"flex", gap:36 }}>
            {NAV_LINKS.map(l => <span key={l.href} className="nav-link" onClick={() => go(l.href)}>{l.label}</span>)}
          </div>
          <button className="btn-primary" style={{ fontSize:14, padding:"10px 24px" }} onClick={() => go("#contact")}>BUYURTMA</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ padding:"100px 5%", minHeight:"100vh", display:"flex", alignItems:"center", paddingTop:80, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,#0a0a0a 0%,#0f0f0f 50%,#0a0a0a 100%)" }} />
        <div style={{ position:"absolute", inset:0 }} className="stripe-bg" />
        <div style={{ position:"absolute", top:"20%", right:"-5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(245,197,24,.08) 0%,transparent 70%)" }} />
        <div style={{ position:"relative", zIndex:1, width:"100%", maxWidth:1280, margin:"0 auto" }}>
          <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1.2fr .8fr", gap:60, alignItems:"center" }}>
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:10, background:"rgba(245,197,24,.1)", border:"1px solid rgba(245,197,24,.3)", padding:"8px 20px", marginBottom:28 }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background:"#F5C518" }} className="pulse-anim" />
                <span style={{ fontFamily:"'Barlow Condensed',sans-serif", color:"#F5C518", fontSize:13, letterSpacing:3, fontWeight:700 }}>O'ZBEKISTON BO'YLAB ISHLAYDI</span>
              </div>
              <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(72px,12vw,160px)", lineHeight:.9, color:"#fff", letterSpacing:4 }}>
                PRORAB<br />
                <span style={{ color:"#F5C518", WebkitTextStroke:"2px #F5C518", WebkitTextFillColor:"transparent" }}>BOB</span>
              </h1>
              <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"clamp(22px,3vw,36px)", color:"#aaa", marginTop:16, marginBottom:12, letterSpacing:2, textTransform:"uppercase" }}>
                Asfalt yotqizish & Yo'l qurilishi
              </p>
              <div style={{ display:"flex", gap:8, marginBottom:40, flexWrap:"wrap" }}>
                {["Sifat","Tezlik","Kafolat"].map((t,i) => <span key={i} style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, color:i===1?"#F5C518":"#fff", letterSpacing:4 }}>{t}{i<2?" ·":""}</span>)}
              </div>
              <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
                <button className="btn-primary" onClick={() => go("#contact")}>BUYURTMA BERISH</button>
                <button className="btn-outline" onClick={() => go("#portfolio")}>PORTFOLIO</button>
              </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:20 }} className="float-anim">
              <div style={{ background:"linear-gradient(135deg,#141414,#0e0e0e)", border:"1px solid #222", padding:32, position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, left:0, width:"100%", height:4, background:"linear-gradient(90deg,#F5C518,transparent)" }} />
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:80, color:"#F5C518", lineHeight:1 }}>2000+</div>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:18, color:"#888", letterSpacing:3, fontWeight:600, textTransform:"uppercase" }}>Kilometr Muvaffaqiyatli Topshirilgan</div>
              </div>
              <div className="four-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                {[{n:"120+",l:"Loyiha"},{n:"7+",l:"Yil Tajriba"},{n:"98%",l:"Mamnunlik"},{n:"24/7",l:"Qo'llab-quvvatlash"}].map((s,i) => (
                  <div key={i} style={{ background:"#111", border:"1px solid #1e1e1e", padding:"20px 16px", textAlign:"center" }}>
                    <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:36, color:"#fff" }}>{s.n}</div>
                    <div style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, color:"#666", textTransform:"uppercase", letterSpacing:1 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:80, background:"linear-gradient(to top,#0a0a0a,transparent)" }} />
      </section>

      {/* STATS */}
      <div ref={statsRef} style={{ background:"#F5C518", padding:"32px 5%" }}>
        <div className="four-col" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", maxWidth:1280, margin:"0 auto" }}>
          {STATS.map((s,i) => <StatItem key={i} value={s.value} label={s.label} started={statsVisible} />)}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding:"100px 5%", background:"#0d0d0d" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
            <div>
              <div className="yellow-line" />
              <h2 className="section-title"><span style={{ color:"#F5C518" }}>Biz Haqimizda</span></h2>
              <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:17, color:"#aaa", lineHeight:1.8, marginTop:28, marginBottom:28 }}>
               Yo'l qurilishi va asfalt yotqizish sohasida <strong style={{ color:"#F5C518" }}>2000 kilometrdan ortiq</strong> tajriba.
              </p>
              <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:17, color:"#aaa", lineHeight:1.8, marginBottom:40 }}>
                Davlat va xususiy sektorlardagi buyurtmachilarga eng yuqori sifatli yo'l qurilish xizmatlarini ko'rsatishni maqsad qilganmiz.
              </p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                {["Davlat va xususiy obyektlar","Ko'cha va ichki yo'llar","Sanoat hududlari","Qishloq va shahar infratuzilmasi"].map((item,i) => (
                  <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                    <span style={{ color:"#F5C518", fontSize:20, marginTop:2 }}>✓</span>
                    <span style={{ fontFamily:"'Barlow',sans-serif", fontSize:15, color:"#ccc" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position:"relative" }}>
              <div style={{ background:"linear-gradient(135deg,#141414,#0e0e0e)", border:"1px solid #2a2a2a", padding:48, position:"relative" }}>
                <div style={{ position:"absolute", top:-20, left:24, background:"#F5C518", padding:"8px 20px" }}>
                  <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:16, color:"#0a0a0a", letterSpacing:2 }}>PROFESSIONAL PRORAB</span>
                </div>
                <div style={{ marginTop:24 }}>
                  {[{label:"Asfalt texnologiyalari",pct:95},{label:"Loyiha boshqaruvi",pct:92},{label:"Texnika boshqaruvi",pct:88},{label:"Sifat nazorati",pct:98}].map((skill,i) => (
                    <div key={i} style={{ marginBottom:24 }}>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                        <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:15, color:"#ccc", fontWeight:600, letterSpacing:1 }}>{skill.label}</span>
                        <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:18, color:"#F5C518" }}>{skill.pct}%</span>
                      </div>
                      <div style={{ height:4, background:"#1e1e1e", borderRadius:2 }}>
                        <div style={{ height:"100%", width:`${skill.pct}%`, background:"linear-gradient(90deg,#F5C518,#ffdb4d)", borderRadius:2 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position:"absolute", bottom:-20, right:-20, width:100, height:100, border:"3px solid #F5C518", opacity:.3 }} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding:"100px 5%", background:"#0a0a0a" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:60 }}>
            <div className="yellow-line" style={{ margin:"0 auto 24px" }} />
            <h2 className="section-title">XIZMAT<span style={{ color:"#F5C518" }}>LAR</span></h2>
          </div>
          <div className="three-col" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
            {SERVICES.map((s,i) => (
              <div key={i} className={`service-card ${activeService===i?"active":""}`} onClick={() => setActiveService(i)}>
                <div style={{ fontSize:48, marginBottom:20 }}>{s.icon}</div>
                <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:32, color:"#fff", letterSpacing:2, marginBottom:20 }}>{s.title}</h3>
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {s.items.map((item,j) => (
                    <div key={j} style={{ display:"flex", alignItems:"center", gap:12 }}>
                      <div style={{ width:6, height:6, background:"#F5C518", flexShrink:0 }} />
                      <span style={{ fontFamily:"'Barlow',sans-serif", fontSize:15, color:"#aaa" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop:28, paddingTop:20, borderTop:"1px solid #1e1e1e" }}>
                  <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:14, color:"#F5C518", letterSpacing:2, fontWeight:700, textTransform:"uppercase", cursor:"pointer" }} onClick={() => go("#contact")}>Buyurtma berish →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section style={{ background:"#0d0d0d", padding:"100px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
            <div>
              <div className="yellow-line" />
              <h2 className="section-title">NIMA UCHUN<br /><span style={{ color:"#F5C518" }}>BIZ?</span></h2>
              <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:17, color:"#888", marginTop:24, lineHeight:1.8 }}>15 yillik tajriba, zamonaviy texnika va sifat kafolatigacha bo'lgan professional xizmat.</p>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {ADVANTAGES.map((a,i) => (
                <div key={i} className="adv-item">
                  <span style={{ fontSize:28 }}>{a.icon}</span>
                  <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:16, color:"#ccc", fontWeight:600 }}>{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding:"100px 5%", background:"#0a0a0a" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div className="yellow-line" style={{ margin:"0 auto 24px" }} />
            <h2 className="section-title">PORT<span style={{ color:"#F5C518" }}>FOLIO</span></h2>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:17, color:"#666", marginTop:16 }}>Muvaffaqiyatli yakunlangan loyihalarimiz</p>
          </div>

          {/* Filter tabs */}
          <div style={{ display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap", marginBottom:40 }}>
            {filters.map(f => (
              <button key={f} className={`filter-btn ${activeFilter===f?"active":""}`} onClick={() => setActiveFilter(f)}>{f}</button>
            ))}
          </div>

          <div className="three-col" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
            {filtered.map(p => <PortfolioCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ background:"#F5C518", padding:"60px 5%", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(-45deg,transparent,transparent 30px,rgba(0,0,0,.04) 30px,rgba(0,0,0,.04) 60px)" }} />
        <div style={{ position:"relative", zIndex:1 }}>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(36px,6vw,72px)", color:"#0a0a0a", letterSpacing:4, marginBottom:12 }}>LOYIHANGIZNI BOSHLAYLIK!</h2>
          <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:18, color:"#333", marginBottom:32 }}>Bepul konsultatsiya va narx hisoblash</p>
          <button className="btn-primary" style={{ background:"#0a0a0a", color:"#F5C518", fontSize:18 }} onClick={() => go("#contact")}>BEPUL MASLAHAT OLISH</button>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact" style={{ padding:"100px 5%", background:"#0d0d0d" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80 }}>
            <div>
              <div className="yellow-line" />
              <h2 className="section-title">BOG'LA<span style={{ color:"#F5C518" }}>NISH</span></h2>
              <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:17, color:"#888", marginTop:24, lineHeight:1.8, marginBottom:48 }}>Loyihangizni muhokama qilish uchun bog'laning.</p>
              <div style={{ display:"flex", flexDirection:"column", gap:28 }}>
                {[{icon:"📞",label:"Telefon",value:"+998 94 526 3333",href:"tel:+998"},{icon:"✈️",label:"Telegram",value:"@prorabbob",href:"https://t.me/prorabbob"},{icon:"📧",label:"Email",value:"bobmaxsus@gmail.com",href:"mailto:info@prorabbob.uz"}].map((c,i) => (
                  <a key={i} href={c.href} style={{ display:"flex", alignItems:"center", gap:20, textDecoration:"none" }}>
                    <div style={{ width:56, height:56, background:"rgba(245,197,24,.1)", border:"1px solid rgba(245,197,24,.3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, color:"#555", textTransform:"uppercase", letterSpacing:2, marginBottom:4 }}>{c.label}</div>
                      <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, color:"#fff", fontWeight:600 }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background:"#111", border:"1px solid #1e1e1e", padding:40, position:"relative" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg,#F5C518,#ffdb4d)" }} />
                <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:32, color:"#fff", letterSpacing:2, marginBottom:32 }}>BUYURTMA BERISH</h3>
                <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                  <input className="contact-input" placeholder="Ismingiz" />
                  <input className="contact-input" placeholder="Telefon raqamingiz" />
                  <input className="contact-input" placeholder="Loyiha joylashuvi" />
                  <select className="contact-input" style={{ appearance:"none" }}>
                    <option style={{ background:"#111" }}>Xizmat turini tanlang</option>
                    <option style={{ background:"#111" }}>Asfalt yotqizish</option>
                    <option style={{ background:"#111" }}>Yo'l tayyorlash</option>
                    <option style={{ background:"#111" }}>Texnika xizmati</option>
                  </select>
                  <textarea className="contact-input" rows={4} placeholder="Loyiha haqida qisqacha ma'lumot..." style={{ resize:"none" }} />
                  <button className="btn-primary" style={{ width:"100%", textAlign:"center", fontSize:18, padding:18 }}>YUBORISH</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:"#080808", borderTop:"1px solid #1a1a1a", padding:"40px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:20 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ width:34, height:34, background:"#F5C518", display:"flex", alignItems:"center", justifyContent:"center", clipPath:"polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}>
              <span style={{ fontSize:16 }}>🚧</span>
            </div>
            <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, color:"#fff", letterSpacing:3 }}>PRORAB<span style={{ color:"#F5C518" }}>BOB</span>.UZ</span>
          </div>
          <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, color:"#444" }}>© 2024 ProrabBob.uz — Barcha huquqlar himoyalangan</p>
          <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:14, color:"#F5C518", letterSpacing:2 }}>SIFAT · TEZLIK · KAFOLAT</p>
        </div>
      </footer>

      <a href="https://t.me/prorabbob" style={{ position:"fixed", bottom:32, right:32, zIndex:999, width:60, height:60, background:"#F5C518", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, textDecoration:"none", clipPath:"polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))", boxShadow:"0 8px 30px rgba(245,197,24,.4)", transition:"transform .2s" }} className="pulse-anim"
        onMouseEnter={e => e.currentTarget.style.transform="scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
      >✈️</a>
    </div>
  );
}