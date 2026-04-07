import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);
  const nameRef = useRef(null);
  const badgeRef = useRef(null);
  const roleRef = useRef(null);
  const overlayRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Phase 1 — Counter 0 to 100
    let start = 0;
    const duration = 2500;
    const increment = 100 / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= 100) {
        start = 100;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    // Phase 2 — Name reveal at 2.5s
    tl.to(nameRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.out",
      delay: 2.5,
    })

      // Phase 3 — Badge reveal
      .to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })

      // Phase 4 — Role reveal
      .to(roleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })

      // Phase 5 — Exit loader
      .to(overlayRef.current, {
        scaleY: 1,
        duration: 0.8,
        ease: "power4.inOut",
        delay: 0.3,
      })
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });

    return () => clearInterval(counter);
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Scanline Effect */}
      <div className="scanline" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,135,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-accent" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-accent" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-accent" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-accent" />

      {/* Anime Character — Pixel Silhouette Running */}
      <div className="absolute bottom-0 w-full flex justify-start overflow-hidden pointer-events-none">
        <div
          className="text-6xl mb-0"
          style={{
            animation: "runAcross 2.5s ease-in-out forwards",
            filter: "drop-shadow(0 0 10px #00ff87)",
          }}
        >
          🥷
        </div>
      </div>

      {/* Counter */}
      <div ref={counterRef} className="loader-counter mb-8 text-glow">
        {String(count).padStart(2, "0")}
        <span className="text-4xl text-accent">%</span>
      </div>

      {/* Loading Bar */}
      <div className="w-64 h-[2px] bg-gray-800 rounded-full mb-10 overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-100"
          style={{ width: `${count}%` }}
        />
      </div>

      {/* Name */}
      <div
        ref={nameRef}
        className="opacity-0 translate-y-8"
        style={{ fontFamily: "Clash Display, sans-serif" }}
      >
        <h1
          className="glitch text-5xl md:text-7xl font-bold text-white text-center tracking-wider"
          data-text="SHIVA RAJAK"
        >
          SHIVA RAJAK
        </h1>
      </div>

      {/* NASA Badge */}
      <div ref={badgeRef} className="opacity-0 translate-y-4 mt-4">
        <span className="flex items-center gap-2 text-sm font-mono text-accent border border-accent/30 rounded-full px-4 py-1.5">
          <span>🏆</span>
          <span>NASA Space Apps Hackathon — Runner Up</span>
        </span>
      </div>

      {/* Role */}
      <div ref={roleRef} className="opacity-0 translate-y-4 mt-3">
        <p className="text-gray-400 text-sm font-mono tracking-[0.3em] uppercase">
          Full Stack Developer
        </p>
      </div>

      {/* Overlay for exit transition */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-accent origin-bottom"
        style={{ transform: "scaleY(0)" }}
      />

      {/* Run animation keyframes */}
      <style>{`
        @keyframes runAcross {
          0%   { transform: translateX(-100px) scaleX(1); }
          45%  { transform: translateX(45vw) scaleX(1); }
          50%  { transform: translateX(45vw) scaleX(1) scale(1.3); }
          55%  { transform: translateX(45vw) scaleX(1); }
          100% { transform: translateX(110vw) scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
