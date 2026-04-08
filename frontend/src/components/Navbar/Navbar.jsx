import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const Navbar = () => {
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef([])
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const tl = gsap.timeline({ delay: 4.6 })
    tl.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(
      logoRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(
      linksRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power3.out' },
      '-=0.3'
    )
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'services', 'contact']
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id)
          }
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[999] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 255, 135, 0.1)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <a
            ref={logoRef}
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: '#00ff87' }}
            >
              <span
                className="text-black font-bold text-sm"
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                SR
              </span>
            </div>
            <span
              className="text-white font-bold text-lg hidden sm:block"
              style={{ fontFamily: 'Clash Display, sans-serif' }}
            >
              Shiva<span style={{ color: '#00ff87' }}>.</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <a
                  ref={(el) => (linksRef.current[i] = el)}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-sm font-medium transition-colors duration-300"
                  style={{
                    fontFamily: 'Cabinet Grotesk, sans-serif',
                    color: activeSection === link.href.replace('#', '') ? '#00ff87' : '#888888',
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{
                      width: activeSection === link.href.replace('#', '') ? '100%' : '0%',
                      background: '#00ff87',
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-black transition-all duration-300"
            style={{ background: '#00ff87', fontFamily: 'Cabinet Grotesk, sans-serif' }}
          >
            Hire Me
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: '#00ff87',
                transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: '#00ff87',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: '#00ff87',
                transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              }}
            />
          </button>

        </div>
      </nav>

      <div
        className="fixed inset-0 z-[998] flex flex-col items-center justify-center md:hidden"
        style={{
          background: '#000000',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          clipPath: menuOpen ? 'circle(150% at 95% 5%)' : 'circle(0% at 95% 5%)',
          transition: 'clip-path 0.5s ease, opacity 0.3s ease',
        }}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-4xl font-bold text-white transition-colors duration-300"
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 mt-12">
          {[
            { label: 'GitHub', href: 'https://github.com/imshiva17' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivarajak/' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm transition-colors duration-300"
              style={{ color: '#888888' }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar
