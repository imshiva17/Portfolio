// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const About = () => {
//   const sectionRef = useRef(null)
//   const headingRef = useRef(null)
//   const textRef = useRef(null)
//   const imgRef = useRef(null)
//   const statsRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       gsap.fromTo(
//         headingRef.current,
//         { opacity: 0, y: 60 },
//         {
//           opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
//           scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
//         }
//       )

//       gsap.fromTo(
//         imgRef.current,
//         { opacity: 0, x: -80 },
//         {
//           opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
//           scrollTrigger: { trigger: imgRef.current, start: 'top 80%' },
//         }
//       )

//       gsap.fromTo(
//         textRef.current,
//         { opacity: 0, x: 80 },
//         {
//           opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
//           scrollTrigger: { trigger: textRef.current, start: 'top 80%' },
//         }
//       )

//       gsap.fromTo(
//         '.stat-item',
//         { opacity: 0, y: 40 },
//         {
//           opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
//           scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
//         }
//       )

//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   const stats = [
//     { num: '10+', label: 'Projects Shipped' },
//     { num: '1', label: 'Internship' },
//     { num: '300+', label: 'DSA Problems' },
//     { num: '2+', label: 'Years Coding' },
//   ]

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="relative py-32 overflow-hidden"
//       style={{ background: '#0a0a0a' }}
//     >
//       <div
//         className="absolute left-0 top-0 w-px h-full opacity-20"
//         style={{ background: 'linear-gradient(to bottom, transparent, #00ff87, transparent)' }}
//       />

//       <div className="max-w-7xl mx-auto px-6">

//         <div ref={headingRef} className="opacity-0 mb-16">
//           <p className="text-xs font-mono tracking-widest mb-3" style={{ color: '#00ff87' }}>
//             02 / ABOUT ME
//           </p>
//           <h2
//             className="font-bold leading-none"
//             style={{
//               fontFamily: 'Clash Display, sans-serif',
//               fontSize: 'clamp(36px, 5vw, 64px)',
//               color: '#ffffff',
//               letterSpacing: '-1px',
//             }}
//           >
//             Scalable development
//             <br />
//             <span style={{ color: '#00ff87' }}>IS MY WEAPON.</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           <div ref={imgRef} className="opacity-0 flex justify-center lg:justify-start">
//             <div className="relative">

//               <div
//                 className="absolute -top-3 -left-3 w-full h-full rounded-2xl"
//                 style={{ border: '1px solid rgba(0,255,135,0.2)' }}
//               />

//               <div
//                 className="relative w-72 md:w-80 rounded-2xl overflow-hidden"
//                 style={{
//                   border: '1px solid rgba(0,255,135,0.1)',
//                   boxShadow: '0 0 60px rgba(0,255,135,0.08), 0 0 120px rgba(0,255,135,0.04)',
//                 }}
//               >
//                 <img
//                   src="/shiva.jpeg"
//                   alt="Shiva Rajak"
//                   className="w-full"
//                   style={{
//                     display: 'block',
//                     filter: 'contrast(1.05) brightness(0.95)',
//                   }}
//                 />

//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     background: 'linear-gradient(to top, rgba(0,255,135,0.15) 0%, rgba(0,255,135,0.02) 40%, transparent 70%)',
//                   }}
//                 />

//                 <div
//                   className="absolute inset-0 pointer-events-none"
//                   style={{
//                     backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
//                   }}
//                 />
//               </div>

//               <div
//                 className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full flex flex-col items-center justify-center"
//                 style={{
//                   background: '#00ff87',
//                   boxShadow: '0 0 30px rgba(0,255,135,0.4)',
//                 }}
//               >
//                 <span
//                   className="text-black font-bold text-lg leading-none"
//                   style={{ fontFamily: 'Clash Display, sans-serif' }}
//                 >
//                   2026
//                 </span>
//                 <span className="text-black text-xs font-medium">
//                   Active
//                 </span>
//               </div>

//               <div
//                 className="absolute -top-4 right-0 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono"
//                 style={{
//                   background: '#0f0f0f',
//                   border: '1px solid rgba(255,255,255,0.08)',
//                   color: '#888888',
//                 }}
//               >
//                 <span style={{ color: '#00ff87' }}>◉</span>
//                 Satna, MP
//               </div>

//             </div>
//           </div>

//           <div ref={textRef} className="opacity-0 flex flex-col gap-8">

//             <div className="flex flex-col gap-4">
//               <p
//                 className="text-base leading-relaxed"
//                 style={{ fontFamily: 'Cabinet Grotesk, sans-serif', color: '#888888', lineHeight: '1.9' }}
//               >
//                 I am a Full Stack Developer and Computer Science undergraduate
//                 passionate about building scalable, high-performance digital
//                 products that blend functionality with seamless user experience.
//               </p>
//               <p
//                 className="text-base leading-relaxed"
//                 style={{ fontFamily: 'Cabinet Grotesk, sans-serif', color: '#888888', lineHeight: '1.9' }}
//               >
//                 With a strong foundation across frontend and backend technologies,
//                 I work across the entire stack — turning complex ideas into reliable,
//                 production-ready applications. My approach is rooted in problem-solving,
//                 clean architecture, and continuous learning.
//               </p>
//               <p
//                 className="text-base leading-relaxed"
//                 style={{ fontFamily: 'Cabinet Grotesk, sans-serif', color: '#888888', lineHeight: '1.9' }}
//               >
//                 From designing intuitive user interfaces to developing robust APIs
//                 and managing databases, I focus on writing efficient, maintainable
//                 code that delivers real-world impact.
//               </p>
//             </div>

//             <div ref={statsRef} className="grid grid-cols-2 gap-4">
//               {stats.map((stat, i) => (
//                 <div
//                   key={i}
//                   className="stat-item opacity-0 p-5 rounded-xl transition-all duration-300"
//                   style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.05)' }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.borderColor = 'rgba(0,255,135,0.2)'
//                     e.currentTarget.style.background = 'rgba(0,255,135,0.03)'
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
//                     e.currentTarget.style.background = '#0f0f0f'
//                   }}
//                 >
//                   <p
//                     className="text-3xl font-bold mb-1"
//                     style={{ fontFamily: 'Clash Display, sans-serif', color: '#00ff87' }}
//                   >
//                     {stat.num}
//                   </p>
//                   <p
//                     className="text-xs"
//                     style={{ fontFamily: 'Cabinet Grotesk, sans-serif', color: '#555555' }}
//                   >
//                     {stat.label}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="flex items-center gap-4 flex-wrap">
//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-6 py-3 rounded-full font-medium text-black transition-all duration-300 hover:scale-105"
//                 style={{
//                   background: '#00ff87',
//                   fontFamily: 'Cabinet Grotesk, sans-serif',
//                   boxShadow: '0 0 20px rgba(0,255,135,0.2)',
//                 }}
//               >
//                 Download Resume
//               </a>
//               <a
//                 href="#contact"
//                 onClick={(e) => {
//                   e.preventDefault()
//                   document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
//                 }}
//                 className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
//                 style={{
//                   fontFamily: 'Cabinet Grotesk, sans-serif',
//                   color: '#ffffff',
//                   border: '1px solid rgba(255,255,255,0.1)',
//                 }}
//               >
//                 Contact Me
//               </a>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Section label
      gsap.fromTo('.ab-label',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.ab-label', start: 'top 88%' } }
      )

      // Heading
      gsap.fromTo('.ab-heading',
        { opacity: 0, y: 80, skewY: 4 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.1, ease: 'power4.out',
          scrollTrigger: { trigger: '.ab-heading', start: 'top 85%' } }
      )

      // Photo
      gsap.fromTo('.ab-photo',
        { opacity: 0, y: 60, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.ab-photo', start: 'top 82%' } }
      )

      // Text
      gsap.fromTo('.ab-para',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.ab-para', start: 'top 82%' } }
      )

      // Skills
      gsap.fromTo('.ab-skill',
        { opacity: 0, scale: 0.7, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'back.out(2)',
          scrollTrigger: { trigger: '.ab-skill', start: 'top 85%' } }
      )

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const skillsList = [
    'Node.js 18+', 'JavaScript (ES6+)', 'Express.js',
    'Rest APIs', 'React.js', 'Next.js',
    'Tailwind CSS', 'Redux Toolkit',
    'MongoDB', 'PostgreSQL', 'HTML5', 'CSS3', 'JWT',
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ background: '#050505', padding: '140px 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,255,135,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,1) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        {/* Label */}
        <p className="ab-label" style={{
          opacity: 0,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px', color: '#00ff87',
          letterSpacing: '0.3em', marginBottom: '24px',
          display: 'flex', alignItems: 'center', gap: '16px',
        }}>
          <span style={{ width: '40px', height: '1px', background: '#00ff87', display: 'inline-block' }} />
          02 / ABOUT ME
        </p>

        {/* Heading */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ overflow: 'hidden' }}>
            <h2 className="ab-heading" style={{
              opacity: 0,
              fontFamily: 'Clash Display, sans-serif',
              fontSize: 'clamp(44px, 7vw, 96px)',
              fontWeight: '800', color: '#fff',
              letterSpacing: '-3px', lineHeight: '0.9', margin: 0,
            }}>
              Scalable development
            </h2>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <h2 className="ab-heading" style={{
              opacity: 0,
              fontFamily: 'Clash Display, sans-serif',
              fontSize: 'clamp(44px, 7vw, 96px)',
              fontWeight: '800', color: '#00ff87',
              letterSpacing: '-3px', lineHeight: '0.9', margin: 0,
              textShadow: '0 0 80px rgba(0,255,135,0.2)',
            }}>
              IS MY WEAPON.
            </h2>
          </div>
        </div>

        {/* Grid — photo left, text right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '420px 1fr',
          gap: '100px',
          alignItems: 'start',
        }}>

          {/* LEFT — Photo only, simple and clean */}
          <div className="ab-photo" style={{ opacity: 0, position: 'relative' }}>

            {/* Corner brackets */}
            <div style={{ position: 'absolute', top: '-14px', left: '-14px', width: '36px', height: '36px', borderTop: '2px solid #00ff87', borderLeft: '2px solid #00ff87', zIndex: 2, borderRadius: '2px' }} />
            <div style={{ position: 'absolute', top: '-14px', right: '-14px', width: '36px', height: '36px', borderTop: '2px solid rgba(112,0,255,0.5)', borderRight: '2px solid rgba(112,0,255,0.5)', zIndex: 2, borderRadius: '2px' }} />
            <div style={{ position: 'absolute', bottom: '-14px', left: '-14px', width: '36px', height: '36px', borderBottom: '2px solid rgba(112,0,255,0.5)', borderLeft: '2px solid rgba(112,0,255,0.5)', zIndex: 2, borderRadius: '2px' }} />
            <div style={{ position: 'absolute', bottom: '-14px', right: '-14px', width: '36px', height: '36px', borderBottom: '2px solid #00ff87', borderRight: '2px solid #00ff87', zIndex: 2, borderRadius: '2px' }} />

            {/* Photo */}
            <div style={{
              borderRadius: '12px', overflow: 'hidden', position: 'relative',
              boxShadow: '0 60px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,255,135,0.06)',
            }}>
              <img
                src="/shiva.jpeg"
                alt="Shiva Rajak"
                style={{
                  width: '100%', display: 'block',
                  filter: 'contrast(1.08) brightness(0.88) saturate(0.75)',
                }}
              />
              {/* Green tint */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,255,135,0.18) 0%, rgba(0,255,135,0.04) 40%, transparent 70%)',
              }} />
              {/* Scanlines */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)',
              }} />
            </div>

            {/* Skills below photo — exactly like Kartikey */}
            <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skillsList.map((s) => (
                <span
                  key={s}
                  className="ab-skill"
                  style={{
                    opacity: 0,
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px', color: '#555',
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '4px', padding: '6px 12px',
                    transition: 'all 0.25s ease', cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#00ff87'
                    e.target.style.borderColor = 'rgba(0,255,135,0.25)'
                    e.target.style.background = 'rgba(0,255,135,0.04)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#555'
                    e.target.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.target.style.background = 'rgba(255,255,255,0.025)'
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Simple bio like Kartikey */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '8px' }}>

            <p className="ab-para" style={{
              opacity: 0,
              fontFamily: 'Cabinet Grotesk, sans-serif',
              fontSize: '18px', color: '#777', lineHeight: '1.85', margin: 0,
            }}>
              I'm a fullstack developer passionate about building scalable,
              high-performance digital products that blend functionality with
              seamless user experience.
            </p>

            <p className="ab-para" style={{
              opacity: 0,
              fontFamily: 'Cabinet Grotesk, sans-serif',
              fontSize: '18px', color: '#777', lineHeight: '1.85', margin: 0,
            }}>
              With a strong foundation across frontend and backend technologies,
              I work across the entire stack — turning complex ideas into reliable,
              production-ready applications.
            </p>

            <p className="ab-para" style={{
              opacity: 0,
              fontFamily: 'Cabinet Grotesk, sans-serif',
              fontSize: '18px', color: '#777', lineHeight: '1.85', margin: 0,
            }}>
              My approach is rooted in problem-solving, clean architecture, and
              continuous learning. I believe great products are built at the
              intersection of logic, performance, and user experience.
            </p>

            {/* Counter stats — like Kartikey */}
            <div className="ab-para" style={{
              opacity: 0,
              display: 'flex', gap: '48px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              {[
                { num: '10+', label: 'Projects' },
                { num: '1', label: 'Internship' },
                { num: '300+', label: 'Problems Solved' },
              ].map((s, i) => (
                <div key={i}>
                  <p style={{ fontFamily: 'Clash Display, sans-serif', fontSize: '48px', fontWeight: '800', color: '#00ff87', margin: 0, lineHeight: 1 }}>
                    {s.num}
                  </p>
                  <p style={{ fontFamily: 'Cabinet Grotesk, sans-serif', fontSize: '13px', color: '#444', margin: '8px 0 0' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="ab-para" style={{ opacity: 0, display: 'flex', gap: '16px', marginTop: '8px' }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'Cabinet Grotesk, sans-serif', fontSize: '14px',
                  fontWeight: '700', color: '#000', background: '#00ff87',
                  borderRadius: '999px', padding: '14px 30px',
                  textDecoration: 'none', boxShadow: '0 0 30px rgba(0,255,135,0.3)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(0,255,135,0.5)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,135,0.3)' }}
              >
                Download Resume
              </a>
              <a
                href="mailto:shiva17.work@gmail.com"
                style={{
                  fontFamily: 'Cabinet Grotesk, sans-serif', fontSize: '14px',
                  fontWeight: '600', color: '#00ff87',
                  border: '1px solid rgba(0,255,135,0.25)',
                  borderRadius: '999px', padding: '14px 30px',
                  textDecoration: 'none', transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,255,135,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
