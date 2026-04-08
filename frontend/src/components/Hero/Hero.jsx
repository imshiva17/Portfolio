// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const Hero = () => {
//   const heroRef = useRef(null)
//   const badgeRef = useRef(null)
//   const subRef = useRef(null)
//   const descRef = useRef(null)
//   const ctaRef = useRef(null)
//   const scrollRef = useRef(null)
//   const imgRef = useRef(null)
//   const availableRef = useRef(null)

//   useEffect(() => {
//     const tl = gsap.timeline({ delay: 4.8 })

//     tl.fromTo(
//       badgeRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
//     )
//     .fromTo(
//       '.hero-char',
//       { opacity: 0, y: 100, rotateX: -90 },
//       { opacity: 1, y: 0, rotateX: 0, duration: 0.6, stagger: 0.04, ease: 'power4.out' },
//       '-=0.3'
//     )
//     .fromTo(
//       subRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
//       '-=0.3'
//     )
//     .fromTo(
//       descRef.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
//       '-=0.3'
//     )
//     .fromTo(
//       ctaRef.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
//       '-=0.3'
//     )
//     .fromTo(
//       imgRef.current,
//       { opacity: 0, x: 100, scale: 0.8 },
//       { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
//       '-=0.8'
//     )
//     .fromTo(
//       availableRef.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
//       '-=0.4'
//     )
//     .fromTo(
//       scrollRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 0.5, ease: 'power2.out' },
//       '-=0.2'
//     )
//   }, [])

//   const splitText = (text) => {
//     return text.split('').map((char, i) => (
//       <span key={i} className="hero-char inline-block">
//         {char === ' ' ? '\u00A0' : char}
//       </span>
//     ))
//   }

//   const handleNavClick = (e, href) => {
//     e.preventDefault()
//     const target = document.querySelector(href)
//     if (target) target.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <section
//       id="hero"
//       ref={heroRef}
//       className="relative min-h-screen flex items-center overflow-hidden"
//       style={{ background: '#0a0a0a' }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(0,255,135,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,0.5) 1px, transparent 1px)',
//           backgroundSize: '60px 60px',
//         }}
//       />

//       <div
//         className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
//         style={{
//           background: 'radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 70%)',
//           filter: 'blur(40px)',
//         }}
//       />

//       <div
//         className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
//         style={{
//           background: 'radial-gradient(circle, rgba(112,0,255,0.06) 0%, transparent 70%)',
//           filter: 'blur(40px)',
//         }}
//       />

//       <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           <div className="flex flex-col gap-6">

//             <div ref={badgeRef} className="opacity-0 w-fit">
//               <span
//                 className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full border"
//                 style={{
//                   color: '#00ff87',
//                   borderColor: 'rgba(0,255,135,0.3)',
//                   background: 'rgba(0,255,135,0.05)',
//                 }}
//               >
//                 <span>🏆</span>
//                 NASA Space Apps Hackathon — Runner Up
//               </span>
//             </div>

//             <div className="overflow-hidden" style={{ perspective: '1000px' }}>
//               <h1
//                 className="font-bold leading-none"
//                 style={{
//                   fontFamily: 'Clash Display, sans-serif',
//                   fontSize: 'clamp(52px, 8vw, 110px)',
//                   letterSpacing: '-2px',
//                   color: '#ffffff',
//                 }}
//               >
//                 {splitText('SHIVA')}
//                 <br />
//                 <span style={{ color: '#00ff87' }}>
//                   {splitText('RAJAK')}
//                 </span>
//               </h1>
//             </div>

//             <div ref={subRef} className="opacity-0 flex items-center gap-3">
//               <div className="w-8 h-px" style={{ background: '#00ff87' }} />
//               <p
//                 className="text-lg font-medium uppercase"
//                 style={{
//                   fontFamily: 'Cabinet Grotesk, sans-serif',
//                   color: '#888888',
//                   letterSpacing: '0.2em',
//                 }}
//               >
//                 Full Stack Developer
//               </p>
//             </div>

//             <p
//               ref={descRef}
//               className="opacity-0 text-base leading-relaxed max-w-md"
//               style={{ fontFamily: 'Cabinet Grotesk, sans-serif', color: '#666666' }}
//             >
//               Full Stack Developer and CS undergraduate skilled in building
//               scalable web applications using React.js, Next.js, Node.js,
//               and MongoDB. 300+ coding problems solved.
//             </p>

//             <div ref={ctaRef} className="opacity-0 flex items-center gap-4 flex-wrap">
//               <a
//                 href="#projects"
//                 onClick={(e) => handleNavClick(e, '#projects')}
//                 className="px-6 py-3 rounded-full font-medium text-black transition-all duration-300 hover:scale-105"
//                 style={{
//                   background: '#00ff87',
//                   fontFamily: 'Cabinet Grotesk, sans-serif',
//                   boxShadow: '0 0 20px rgba(0,255,135,0.3)',
//                 }}
//               >
//                 View My Work
//               </a>
//               <a
//                 href="#contact"
//                 onClick={(e) => handleNavClick(e, '#contact')}
//                 className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
//                 style={{
//                   fontFamily: 'Cabinet Grotesk, sans-serif',
//                   color: '#ffffff',
//                   border: '1px solid rgba(255,255,255,0.15)',
//                 }}
//               >
//                 Get In Touch
//               </a>
//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
//                 style={{
//                   fontFamily: 'Cabinet Grotesk, sans-serif',
//                   color: '#00ff87',
//                   border: '1px solid rgba(0,255,135,0.3)',
//                 }}
//               >
//                 Resume
//               </a>
//             </div>

//             <div className="flex items-center gap-6">
//               {[
//                 { label: 'GitHub', href: 'https://github.com/imshiva17' },
//                 { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivarajak/' },
//                 { label: 'LeetCode', href: 'https://leetcode.com/u/imshiva17/' },
//                 { label: 'CodeChef', href: 'https://www.codechef.com/users/imshiva17' },
//               ].map((s) => (
//                 <a
//                   key={s.label}
//                   href={s.href}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-xs font-mono transition-all duration-300"
//                   style={{ color: '#555555' }}
//                   onMouseEnter={(e) => (e.target.style.color = '#00ff87')}
//                   onMouseLeave={(e) => (e.target.style.color = '#555555')}
//                 >
//                   {s.label}
//                 </a>
//               ))}
//             </div>

//           </div>

//           <div ref={imgRef} className="opacity-0 flex flex-col items-center gap-6 relative">

//             <div ref={availableRef} className="opacity-0 absolute -top-4 -right-4 z-10">
//               <div
//                 className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono"
//                 style={{
//                   background: 'rgba(0,255,135,0.1)',
//                   border: '1px solid rgba(0,255,135,0.3)',
//                   color: '#00ff87',
//                 }}
//               >
//                 <span
//                   className="w-2 h-2 rounded-full"
//                   style={{ background: '#00ff87', animation: 'pulse 1.5s infinite' }}
//                 />
//                 Available for Work
//               </div>
//             </div>

//             <div
//               className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden"
//               style={{
//                 border: '1px solid rgba(0,255,135,0.2)',
//                 boxShadow: '0 0 40px rgba(0,255,135,0.1)',
//               }}
//             >
//               <img
//                 src="/shiva.jpeg"
//                 alt="Shiva Rajak"
//                 className="w-full h-full object-cover object-top"
//               />
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   background: 'linear-gradient(to top, rgba(0,255,135,0.1) 0%, transparent 50%)',
//                 }}
//               />
//             </div>

//             <div className="flex items-center gap-8">
//               {[
//                 { num: '10+', label: 'Projects' },
//                 { num: '1', label: 'Internship' },
//                 { num: '300+', label: 'DSA Solved' },
//               ].map((stat) => (
//                 <div key={stat.label} className="text-center">
//                   <p
//                     className="text-2xl font-bold"
//                     style={{ fontFamily: 'Clash Display, sans-serif', color: '#00ff87' }}
//                   >
//                     {stat.num}
//                   </p>
//                   <p className="text-xs" style={{ color: '#555555' }}>
//                     {stat.label}
//                   </p>
//                 </div>
//               ))}
//             </div>

//           </div>

//         </div>

//         <div
//           ref={scrollRef}
//           className="opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//         >
//           <p className="text-xs font-mono tracking-widest" style={{ color: '#555555' }}>
//             SCROLL DOWN
//           </p>
//           <div
//             className="w-px h-12"
//             style={{
//               background: 'linear-gradient(to bottom, #00ff87, transparent)',
//               animation: 'pulse 1.5s infinite',
//             }}
//           />
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Hero
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const canvasRef = useRef(null)
  const sectionRef = useRef(null)

  // THREE.JS PARTICLE BACKGROUND
  useEffect(() => {
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 3

    // Particles
    const count = 3000
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0x00ff87,
      size: 0.012,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Mouse movement
    let mouseX = 0, mouseY = 0
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 0.3
    }
    window.addEventListener('mousemove', onMouseMove)

    // Animation loop
    let animId
    const tick = () => {
      animId = requestAnimationFrame(tick)
      particles.rotation.y += 0.0003
      particles.rotation.x += 0.0001
      camera.position.x += (mouseX - camera.position.x) * 0.05
      camera.position.y += (mouseY - camera.position.y) * 0.05
      renderer.render(scene, camera)
    }
    tick()

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  // GSAP ANIMATIONS
  useEffect(() => {
    const tl = gsap.timeline({ delay: 4.8 })

    // Top info items
    tl.fromTo('.h-top-item',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    )

    // Name chars
    .fromTo('.h-char',
      { opacity: 0, y: 120, rotateX: -90 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.035, ease: 'power4.out' },
      '-=0.2'
    )

    // Role line
    .fromTo('.h-role',
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.4'
    )

    // Photo
    .fromTo('.h-photo',
      { opacity: 0, scale: 0.85, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.6'
    )

    // Bottom items
    .fromTo('.h-bottom',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
      '-=0.5'
    )

    // Scroll-triggered parallax on photo
    gsap.to('.h-photo', {
      y: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  const splitName = (word, color) =>
    word.split('').map((char, i) => (
      <span
        key={i}
        className="h-char"
        style={{
          display: 'inline-block',
          color: color,
          willChange: 'transform',
        }}
      >
        {char}
      </span>
    ))

  const scroll = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{ minHeight: '100vh', background: '#050505', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.8) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1400px', margin: '0 auto',
        padding: '0 40px', width: '100%',
        flex: 1, display: 'flex', flexDirection: 'column',
        justifyContent: 'center', paddingTop: '90px', paddingBottom: '40px',
      }}>

        {/* TOP ROW */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' }}>
          <span className="h-top-item" style={{ opacity: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#444', letterSpacing: '0.25em' }}>
            2026
          </span>
          <span className="h-top-item" style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff87', letterSpacing: '0.2em' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ff87', boxShadow: '0 0 8px #00ff87', animation: 'pulse 1.5s infinite', display: 'inline-block' }} />
            AVAILABLE FOR PROJECTS
          </span>
          <span className="h-top-item" style={{ opacity: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#444', letterSpacing: '0.2em' }}>
            INDIA
          </span>
        </div>

        {/* MAIN GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '60px', alignItems: 'center' }}>

          {/* LEFT - NAME */}
          <div>
            {/* NASA Badge */}
            <div className="h-role" style={{ opacity: 0, marginBottom: '28px' }}>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
                color: '#00ff87', letterSpacing: '0.15em',
                background: 'rgba(0,255,135,0.06)',
                border: '1px solid rgba(0,255,135,0.2)',
                borderRadius: '4px', padding: '8px 16px',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>
                🏆 NASA SPACE APPS — RUNNER UP
              </span>
            </div>

            {/* GIANT NAME */}
            <div style={{ perspective: '1200px', marginBottom: '28px' }}>
              <h1 style={{
                fontFamily: 'Clash Display, sans-serif',
                fontSize: 'clamp(80px, 13vw, 180px)',
                fontWeight: '800', margin: 0,
                letterSpacing: '-5px', lineHeight: '0.88',
              }}>
                <div style={{ overflow: 'hidden' }}>
                  {splitName('SHIVA', '#ffffff')}
                </div>
                <div style={{ overflow: 'hidden' }}>
                  {splitName('RAJAK', '#00ff87')}
                </div>
              </h1>
            </div>

            {/* ROLE */}
            <div className="h-role" style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
              <div style={{ width: '40px', height: '1px', background: '#00ff87' }} />
              <span style={{
                fontFamily: 'Cabinet Grotesk, sans-serif',
                fontSize: '16px', fontWeight: '500',
                color: '#666', letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}>
                Full Stack Developer
              </span>
            </div>

            {/* DESC */}
            <p className="h-role" style={{
              opacity: 0,
              fontFamily: 'Cabinet Grotesk, sans-serif',
              fontSize: '16px', color: '#555',
              lineHeight: '1.8', maxWidth: '480px', margin: '0 0 48px',
            }}>
              Full Stack Developer crafting scalable web applications using
              React.js, Node.js, and modern backend technologies. 300+ problems solved.
            </p>

            {/* BUTTONS */}
            <div className="h-bottom" style={{ opacity: 0, display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => scroll('#projects')}
                style={{
                  fontFamily: 'Cabinet Grotesk, sans-serif', fontSize: '14px',
                  fontWeight: '700', color: '#000', background: '#00ff87',
                  border: 'none', borderRadius: '999px', padding: '15px 32px',
                  cursor: 'none', boxShadow: '0 0 30px rgba(0,255,135,0.4)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(0,255,135,0.6)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,135,0.4)' }}
              >
                Explore Work
              </button>
              <button
                onClick={() => scroll('#contact')}
                style={{
                  fontFamily: 'Cabinet Grotesk, sans-serif', fontSize: '14px',
                  fontWeight: '600', color: '#fff', background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.12)', borderRadius: '999px',
                  padding: '15px 32px', cursor: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0,255,135,0.4)'; e.currentTarget.style.color = '#00ff87' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff' }}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* RIGHT - PHOTO */}
          <div className="h-photo" style={{ opacity: 0, position: 'relative' }}>

            {/* Decorative ring */}
            <div style={{
              position: 'absolute', top: '-20px', right: '-20px',
              width: '100%', height: '100%',
              border: '1px solid rgba(0,255,135,0.1)',
              borderRadius: '20px',
            }} />

            {/* Photo frame */}
            <div style={{
              borderRadius: '16px', overflow: 'hidden', position: 'relative',
              boxShadow: '0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,255,135,0.08)',
            }}>
              <img
                src="/shiva.jpeg"
                alt="Shiva Rajak"
                style={{
                  width: '100%', display: 'block',
                  filter: 'contrast(1.1) brightness(0.88) saturate(0.8)',
                  mixBlendMode: 'normal',
                }}
              />
              {/* Color overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(160deg, rgba(0,255,135,0.12) 0%, transparent 50%, rgba(112,0,255,0.08) 100%)',
              }} />
              {/* Bottom fade */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(5,5,5,0.5), transparent)',
              }} />
            </div>

            {/* Scroll down indicator on photo */}
            <div style={{
              position: 'absolute', bottom: '-40px', left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
            }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#333', letterSpacing: '0.2em' }}>SCROLL</span>
              <div style={{
                width: '1px', height: '40px',
                background: 'linear-gradient(to bottom, #00ff87, transparent)',
                animation: 'pulse 2s infinite',
              }} />
            </div>
          </div>
        </div>

        {/* BOTTOM ROW - Socials + Stats */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginTop: '100px', paddingTop: '28px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          flexWrap: 'wrap', gap: '20px',
        }}>
          {/* Socials */}
          <div style={{ display: 'flex', gap: '28px' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/imshiva17' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivarajak/' },
              { label: 'LeetCode', href: 'https://leetcode.com/u/imshiva17/' },
              { label: 'CodeChef', href: 'https://www.codechef.com/users/imshiva17' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="h-bottom"
                style={{
                  opacity: 0,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px', color: '#444',
                  textDecoration: 'none', letterSpacing: '0.08em',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.target.style.color = '#00ff87'}
                onMouseLeave={(e) => e.target.style.color = '#444'}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '48px' }}>
            {[
              { num: '10+', label: 'Projects' },
              { num: '300+', label: 'DSA Solved' },
              { num: '1', label: 'Internship' },
            ].map((s, i) => (
              <div key={i} className="h-bottom" style={{ opacity: 0, textAlign: 'center' }}>
                <p style={{ fontFamily: 'Clash Display, sans-serif', fontSize: '30px', fontWeight: '800', color: '#00ff87', margin: 0, lineHeight: 1 }}>
                  {s.num}
                </p>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#444', margin: '6px 0 0', letterSpacing: '0.1em' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
