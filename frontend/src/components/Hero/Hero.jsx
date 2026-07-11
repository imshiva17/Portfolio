// // src/components/Hero/Hero.jsx

// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import * as THREE from 'three'

// const Hero = () => {
//   const canvasRef = useRef(null)

//   // Three.js particles background
//   useEffect(() => {
//     const canvas = canvasRef.current
//     const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//     renderer.setSize(window.innerWidth, window.innerHeight)

//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//     camera.position.z = 5

//     const count = 3000
//     const positions = new Float32Array(count * 3)
//     for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 16

//     const geo = new THREE.BufferGeometry()
//     geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
//     const mat = new THREE.PointsMaterial({ color: 0x00ff87, size: 0.01, transparent: true, opacity: 0.4 })
//     const particles = new THREE.Points(geo, mat)
//     scene.add(particles)

//     let mx = 0, my = 0
//     const onMouse = e => {
//       mx = (e.clientX / window.innerWidth - 0.5) * 2
//       my = -(e.clientY / window.innerHeight - 0.5) * 2
//     }
//     window.addEventListener('mousemove', onMouse)

//     const onResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight
//       camera.updateProjectionMatrix()
//       renderer.setSize(window.innerWidth, window.innerHeight)
//     }
//     window.addEventListener('resize', onResize)

//     let frame
//     const tick = () => {
//       frame = requestAnimationFrame(tick)
//       particles.rotation.y += 0.0002
//       camera.position.x += (mx * 0.2 - camera.position.x) * 0.04
//       camera.position.y += (my * 0.2 - camera.position.y) * 0.04
//       renderer.render(scene, camera)
//     }
//     tick()

//     return () => {
//       cancelAnimationFrame(frame)
//       window.removeEventListener('mousemove', onMouse)
//       window.removeEventListener('resize', onResize)
//       renderer.dispose()
//     }
//   }, [])

//   // GSAP animations
//   useEffect(() => {
//     const tl = gsap.timeline({ delay: 4.2 })

//     tl.fromTo('.h-available', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
//     tl.fromTo('.h-name-1', { opacity: 0, x: -80 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power4.out' }, '-=0.2')
//     tl.fromTo('.h-name-2', { opacity: 0, x: -80 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power4.out' }, '-=0.6')
//     tl.fromTo('.h-role', { opacity: 0, x: -80 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power4.out' }, '-=0.6')
//     tl.fromTo('.h-photo', { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }, '-=1.2')
//     tl.fromTo('.h-year', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.8')
//     tl.fromTo('.h-bottom', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.4')
//   }, [])

//   const go = (e, href) => {
//     e.preventDefault()
//     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <section id="hero" style={{
//       position: 'relative',
//       width: '100%',
//       height: '100vh',
//       background: '#080808',
//       overflow: 'hidden',
//       display: 'flex',
//       flexDirection: 'column',
//     }}>
//       {/* Three.js canvas */}
//       <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

//       {/* Photo — full right side, blended */}
//       <div className="h-photo" style={{
//         position: 'absolute',
//         right: 0, top: 0,
//         width: '55%', height: '100%',
//         zIndex: 1, opacity: 0,
//       }}>
//         <img
//           src="/shiva.jpeg"
//           alt="Shiva Rajak"
//           style={{
//             width: '100%', height: '100%',
//             objectFit: 'cover',
//             objectPosition: 'top center',
//             filter: 'brightness(0.75) contrast(1.1) saturate(0.7)',
//           }}
//         />
//         {/* Blend left edge into background */}
//         <div style={{
//           position: 'absolute', inset: 0,
//           background: 'linear-gradient(to right, #080808 0%, rgba(8,8,8,0.7) 30%, transparent 60%)',
//         }} />
//         {/* Green tint overlay */}
//         <div style={{
//           position: 'absolute', inset: 0,
//           background: 'linear-gradient(135deg, rgba(0,255,135,0.06) 0%, transparent 60%)',
//         }} />
//         {/* Bottom fade */}
//         <div style={{
//           position: 'absolute', inset: 0,
//           background: 'linear-gradient(to top, #080808 0%, transparent 40%)',
//         }} />
//       </div>

//       {/* "2026" watermark — like Kartikey */}
//       <div className="h-year" style={{
//         position: 'absolute',
//         right: '8%', top: '50%',
//         transform: 'translateY(-50%)',
//         fontFamily: 'Clash Display, sans-serif',
//         fontSize: 'clamp(120px, 18vw, 260px)',
//         fontWeight: '800',
//         color: 'rgba(255,255,255,0.04)',
//         letterSpacing: '-8px',
//         zIndex: 2,
//         userSelect: 'none',
//         opacity: 0,
//       }}>
//         2026
//       </div>

//       {/* Main content */}
//       <div style={{
//         position: 'relative', zIndex: 3,
//         flex: 1,
//         padding: '0 5vw',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         paddingTop: '80px',
//       }}>

//         {/* Available badge */}
//         <div className="h-available" style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
//           <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ff87', boxShadow: '0 0 8px #00ff87', display: 'inline-block', animation: 'pulse-dot 1.5s infinite' }} />
//           <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff87', letterSpacing: '0.2em' }}>
//             AVAILABLE FOR PROJECTS
//           </span>
//         </div>

//         {/* HUGE Name — exactly like Kartikey */}
//         <div style={{ lineHeight: '0.88' }}>
//           <h1 className="h-name-1" style={{
//             opacity: 0,
//             fontFamily: 'Clash Display, sans-serif',
//             fontSize: 'clamp(80px, 13vw, 180px)',
//             fontWeight: '800',
//             color: '#ffffff',
//             letterSpacing: '-3px',
//             margin: 0,
//             lineHeight: '0.9',
//             textTransform: 'uppercase',
//           }}>
//             SHIVA
//           </h1>
//           <h1 className="h-name-2" style={{
//             opacity: 0,
//             fontFamily: 'Clash Display, sans-serif',
//             fontSize: 'clamp(80px, 13vw, 180px)',
//             fontWeight: '800',
//             color: '#ffffff',
//             letterSpacing: '-3px',
//             margin: 0,
//             lineHeight: '0.9',
//             textTransform: 'uppercase',
//           }}>
//             RAJAK
//           </h1>

//           {/* Role in accent color — like Kartikey's orange, we use green */}
//           <h2 className="h-role" style={{
//             opacity: 0,
//             fontFamily: 'Clash Display, sans-serif',
//             fontSize: 'clamp(60px, 9vw, 130px)',
//             fontWeight: '800',
//             color: '#00ff87',
//             letterSpacing: '-2px',
//             margin: '4px 0 0',
//             lineHeight: '0.9',
//             textTransform: 'uppercase',
//             textShadow: '0 0 60px rgba(0,255,135,0.35)',
//           }}>
//             FULL STACK DEV.
//           </h2>
//         </div>
//       </div>

//       {/* Bottom row — like Kartikey */}
//       <div style={{
//         position: 'relative', zIndex: 3,
//         padding: '0 5vw 40px',
//         display: 'flex',
//         alignItems: 'flex-end',
//         justifyContent: 'space-between',
//         gap: '20px',
//         flexWrap: 'wrap',
//       }}>
//         {/* Left — description */}
//         <p className="h-bottom" style={{
//           opacity: 0,
//           fontFamily: 'Cabinet Grotesk, sans-serif',
//           fontSize: '15px',
//           color: '#666',
//           lineHeight: '1.7',
//           maxWidth: '300px',
//           margin: 0,
//         }}>
//           Full Stack Developer crafting scalable web applications using React, Node.js, and modern backend technologies.
//         </p>

        
        
//           {/* Center — CTA button */}
// <a
//   href="#projects"
//   onClick={(e) => go(e, '#projects')}
//   className="h-bottom"
//   style={{
//     opacity: 0,
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '12px',
//     fontFamily: 'Cabinet Grotesk, sans-serif',
//     fontSize: '13px',
//     fontWeight: '700',
//     color: '#000',
//     background: '#00ff87',
//     padding: '18px 36px',
//     borderRadius: '4px',
//     textDecoration: 'none',
//     letterSpacing: '0.1em',
//     textTransform: 'uppercase',
//     boxShadow: '0 0 40px rgba(0,255,135,0.3)',
//     transition: 'all 0.3s ease',
//   }}
//   onMouseEnter={(e) => {
//     e.currentTarget.style.transform = 'translateY(-3px)'
//     e.currentTarget.style.boxShadow =
//       '0 0 70px rgba(0,255,135,0.6)'
//   }}
//   onMouseLeave={(e) => {
//     e.currentTarget.style.transform = 'none'
//     e.currentTarget.style.boxShadow =
//       '0 0 40px rgba(0,255,135,0.3)'
//   }}
// >
//   EXPLORE WORK
//   <span style={{ fontSize: '18px' }}>→</span>
// </a>

//         {/* Right — scroll down */}
//         <div className="h-bottom" style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
//           <div style={{ width: '40px', height: '1px', background: '#444' }} />
//           <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#444', letterSpacing: '0.15em' }}>
//             SCROLL DOWN
//           </span>
//         </div>
//       </div>

//       {/* Socials — left side vertical */}
//       <div style={{
//         position: 'absolute', left: '24px', top: '50%',
//         transform: 'translateY(-50%)',
//         display: 'flex', flexDirection: 'column',
//         gap: '20px', zIndex: 3,
//       }}>
//         {[
//           { label: 'GH', href: 'https://github.com/imshiva17' },
//           { label: 'LI', href: 'https://www.linkedin.com/in/shivarajak/' },
//           { label: 'LC', href: 'https://leetcode.com/u/imshiva17/' },
//         ].map(s => (
//           <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
//             style={{
//               fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
//               color: '#333', textDecoration: 'none',
//               writingMode: 'vertical-rl',
//               letterSpacing: '0.1em', transition: 'color 0.3s',
//             }}
//             onMouseEnter={e => e.target.style.color = '#00ff87'}
//             onMouseLeave={e => e.target.style.color = '#333'}
//           >
//             {s.label}
//           </a>
//         ))}
//       </div>

//      </section>
//   )
// }

// export default Hero