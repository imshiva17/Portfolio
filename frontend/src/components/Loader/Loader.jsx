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


// import { useEffect, useRef, useState } from 'react'
// import { gsap } from 'gsap'
// import anime from 'animejs'

// const Loader = ({ onComplete }) => {
//   const loaderRef = useRef(null)
//   const [count, setCount] = useState(0)
//   const [phase, setPhase] = useState('powering')

//   useEffect(() => {
//     const obj = { val: 0 }
//     anime({
//       targets: obj,
//       val: 100,
//       duration: 3200,
//       easing: 'easeInOutExpo',
//       update: () => setCount(Math.floor(obj.val)),
//       complete: () => {
//         setPhase('slashing')
//         setTimeout(() => {
//           gsap.to('.slash-line', {
//             scaleX: 1, duration: 0.12, ease: 'power4.out',
//             onComplete: () => {
//               gsap.to('.slash-top', { y: '-100vh', duration: 0.5, ease: 'power4.in' })
//               gsap.to('.slash-bottom', {
//                 y: '100vh', duration: 0.5, ease: 'power4.in',
//                 onComplete: () => {
//                   gsap.to(loaderRef.current, {
//                     opacity: 0, duration: 0.3,
//                     onComplete: () => onComplete && onComplete()
//                   })
//                 }
//               })
//             }
//           })
//         }, 500)
//       }
//     })
//   }, [])

//   const progress = count / 100

//   return (
//     <div
//       ref={loaderRef}
//       style={{
//         position: 'fixed', inset: 0, zIndex: 99999,
//         background: '#000', overflow: 'hidden',
//         display: 'flex', flexDirection: 'column',
//         alignItems: 'center', justifyContent: 'center',
//       }}
//     >
//       {/* Scanline */}
//       <div style={{
//         position: 'absolute', left: 0, right: 0,
//         height: '2px',
//         background: 'rgba(0,255,135,0.12)',
//         animation: 'scanline 2.5s linear infinite',
//         zIndex: 1, pointerEvents: 'none',
//       }} />

//       {/* Grid bg */}
//       <div style={{
//         position: 'absolute', inset: 0, pointerEvents: 'none',
//         backgroundImage: 'linear-gradient(rgba(0,255,135,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,0.03) 1px, transparent 1px)',
//         backgroundSize: '40px 40px',
//       }} />

//       {/* Aura glow */}
//       <div style={{
//         position: 'absolute',
//         width: `${200 + progress * 500}px`,
//         height: `${200 + progress * 500}px`,
//         borderRadius: '50%',
//         background: `radial-gradient(circle, rgba(0,255,135,${0.03 + progress * 0.1}) 0%, transparent 70%)`,
//         filter: 'blur(50px)',
//         transition: 'all 0.15s ease',
//         pointerEvents: 'none',
//       }} />

//       {/* Character section */}
//       <div style={{
//         position: 'relative', zIndex: 2,
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         marginBottom: '40px',
//         width: '200px', height: '200px',
//       }}>

//         {/* Power rings */}
//         {count > 20 && (
//           <div style={{
//             position: 'absolute',
//             width: `${120 + (count - 20) * 2.5}px`,
//             height: `${120 + (count - 20) * 2.5}px`,
//             borderRadius: '50%',
//             border: `1px solid rgba(0,255,135,${(count - 20) / 120})`,
//             animation: 'ring-expand 1.2s ease-out infinite',
//             top: '50%', left: '50%',
//             transform: 'translate(-50%, -50%)',
//           }} />
//         )}
//         {count > 50 && (
//           <div style={{
//             position: 'absolute',
//             width: `${80 + (count - 50) * 3}px`,
//             height: `${80 + (count - 50) * 3}px`,
//             borderRadius: '50%',
//             border: `1.5px solid rgba(0,255,135,${(count - 50) / 80})`,
//             animation: 'ring-expand 0.9s ease-out infinite 0.4s',
//             top: '50%', left: '50%',
//             transform: 'translate(-50%, -50%)',
//           }} />
//         )}
//         {count > 80 && (
//           <div style={{
//             position: 'absolute',
//             width: `${60 + (count - 80) * 4}px`,
//             height: `${60 + (count - 80) * 4}px`,
//             borderRadius: '50%',
//             border: `2px solid rgba(0,255,135,${(count - 80) / 40})`,
//             animation: 'ring-expand 0.6s ease-out infinite 0.2s',
//             top: '50%', left: '50%',
//             transform: 'translate(-50%, -50%)',
//           }} />
//         )}

//         {/* Sparks at high power */}
//         {count > 65 && [...Array(8)].map((_, i) => (
//           <div key={i} style={{
//             position: 'absolute',
//             width: '2px',
//             height: `${6 + (count - 65) / 6}px`,
//             background: 'linear-gradient(to top, #00ff87, transparent)',
//             borderRadius: '2px',
//             top: '50%', left: '50%',
//             transformOrigin: '0 0',
//             transform: `rotate(${i * 45}deg) translateY(-${40 + (count - 65)}px)`,
//             animation: 'spark 0.25s ease-in-out infinite',
//             boxShadow: '0 0 6px #00ff87',
//           }} />
//         ))}

//         {/* Ninja character */}
//         <div style={{
//           fontSize: count > 90 ? '96px' : count > 60 ? '88px' : '80px',
//           filter: `drop-shadow(0 0 ${6 + progress * 36}px rgba(0,255,135,${0.2 + progress * 0.8}))`,
//           transition: 'font-size 0.3s ease, filter 0.1s',
//           animation: count > 75 ? 'char-shake 0.08s infinite' : 'none',
//           userSelect: 'none', position: 'relative', zIndex: 3,
//         }}>
//           🥷
//         </div>
//       </div>

//       {/* Big counter */}
//       <div style={{
//         position: 'relative', zIndex: 2,
//         fontFamily: 'JetBrains Mono, monospace',
//         fontSize: 'clamp(72px, 13vw, 150px)',
//         fontWeight: '700',
//         color: '#00ff87',
//         lineHeight: 1,
//         letterSpacing: '-3px',
//         textShadow: `0 0 ${20 + progress * 50}px rgba(0,255,135,${0.2 + progress * 0.8})`,
//         marginBottom: '20px',
//       }}>
//         {String(count).padStart(2, '0')}
//         <span style={{ fontSize: '0.3em', letterSpacing: 0, color: 'rgba(0,255,135,0.5)' }}>%</span>
//       </div>

//       {/* Energy bar */}
//       <div style={{
//         position: 'relative', zIndex: 2,
//         width: 'min(320px, 80vw)', height: '2px',
//         background: 'rgba(255,255,255,0.05)',
//         borderRadius: '999px', marginBottom: '20px', overflow: 'hidden',
//       }}>
//         <div style={{
//           height: '100%', width: `${count}%`,
//           background: count > 90 ? 'linear-gradient(90deg, #00ff87, #ffffff)' : '#00ff87',
//           borderRadius: '999px',
//           boxShadow: `0 0 ${10 + progress * 20}px rgba(0,255,135,0.9)`,
//           transition: 'width 0.05s linear',
//         }} />
//       </div>

//       {/* Status */}
//       <p style={{
//         position: 'relative', zIndex: 2,
//         fontFamily: 'JetBrains Mono, monospace',
//         fontSize: '10px', letterSpacing: '0.3em',
//         color: count > 90 ? '#00ff87' : 'rgba(255,255,255,0.2)',
//         transition: 'color 0.3s',
//         margin: 0,
//       }}>
//         {count < 25 ? '// INITIALIZING SYSTEM'
//           : count < 55 ? '// LOADING ASSETS'
//           : count < 85 ? '// POWERING UP'
//           : count < 100 ? '// MAXIMUM POWER'
//           : '// READY'}
//       </p>

//       {/* Name flash at 100 */}
//       {count >= 100 && phase === 'powering' && (
//         <div style={{
//           position: 'absolute', zIndex: 5,
//           fontFamily: 'Clash Display, sans-serif',
//           fontSize: 'clamp(40px, 8vw, 80px)',
//           fontWeight: '800', color: '#fff',
//           letterSpacing: '-2px',
//           textShadow: '0 0 40px rgba(0,255,135,0.8)',
//           animation: 'name-flash 0.4s ease-out',
//         }}>
//           SHIVA<span style={{ color: '#00ff87' }}>.</span>
//         </div>
//       )}

//       {/* SLASH PANELS */}
//       {phase === 'slashing' && (
//         <>
//           <div className="slash-line" style={{
//             position: 'absolute',
//             top: '50%', left: 0, right: 0, height: '3px',
//             background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,135,0.5) 20%, #fff 50%, rgba(0,255,135,0.5) 80%, transparent 100%)',
//             boxShadow: '0 0 30px #00ff87, 0 0 80px rgba(0,255,135,0.4)',
//             transformOrigin: 'left center',
//             transform: 'scaleX(0)', zIndex: 20,
//           }} />
//           <div className="slash-top" style={{
//             position: 'absolute', top: 0, left: 0, right: 0,
//             height: '50.1%', background: '#000', zIndex: 15,
//           }} />
//           <div className="slash-bottom" style={{
//             position: 'absolute', bottom: 0, left: 0, right: 0,
//             height: '50.1%', background: '#000', zIndex: 15,
//           }} />
//         </>
//       )}

//       {/* Corner brackets */}
//       {[
//         { top: '24px', left: '24px', borderTop: true, borderLeft: true },
//         { top: '24px', right: '24px', borderTop: true, borderRight: true },
//         { bottom: '24px', left: '24px', borderBottom: true, borderLeft: true },
//         { bottom: '24px', right: '24px', borderBottom: true, borderRight: true },
//       ].map((corner, i) => (
//         <div key={i} style={{
//           position: 'absolute',
//           width: '20px', height: '20px',
//           ...corner,
//           borderTop: corner.borderTop ? '1px solid rgba(0,255,135,0.25)' : 'none',
//           borderBottom: corner.borderBottom ? '1px solid rgba(0,255,135,0.25)' : 'none',
//           borderLeft: corner.borderLeft ? '1px solid rgba(0,255,135,0.25)' : 'none',
//           borderRight: corner.borderRight ? '1px solid rgba(0,255,135,0.25)' : 'none',
//         }} />
//       ))}

//       <style>{`
//         @keyframes scanline {
//           0% { top: -2px; }
//           100% { top: 100%; }
//         }
//         @keyframes ring-expand {
//           0% { opacity: 0.7; transform: translate(-50%,-50%) scale(0.85); }
//           100% { opacity: 0; transform: translate(-50%,-50%) scale(1.5); }
//         }
//         @keyframes char-shake {
//           0%, 100% { transform: translate(0, 0); }
//           25% { transform: translate(-2px, 1px); }
//           75% { transform: translate(2px, -1px); }
//         }
//         @keyframes spark {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.2; }
//         }
//         @keyframes name-flash {
//           0% { opacity: 0; transform: scale(1.4) translateY(10px); }
//           60% { opacity: 1; transform: scale(1) translateY(0); }
//           100% { opacity: 1; transform: scale(1) translateY(0); }
//         }
//       `}</style>
//     </div>
//   )
// }

// export default Loader
