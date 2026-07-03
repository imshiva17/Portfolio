import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Cursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0

    // Move main cursor instantly
    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out',
      })
    }

    // Follower lags behind smoothly
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.08
      followerY += (mouseY - followerY) * 0.08

      gsap.set(follower, {
        x: followerX,
        y: followerY,
      })

      requestAnimationFrame(animateFollower)
    }

    animateFollower()
    window.addEventListener('mousemove', onMouseMove)

    // Hover effects on interactive elements
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2.5,
        backgroundColor: 'transparent',
        border: '2px solid #00ff87',
        duration: 0.3,
      })
      gsap.to(follower, {
        scale: 0.3,
        duration: 0.3,
      })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#00ff87',
        border: 'none',
        duration: 0.3,
      })
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
      })
    }

    // Hide cursor when leaving window
    const handleMouseLeaveWindow = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3,
      })
    }

    const handleMouseEnterWindow = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.3,
      })
    }

    // Apply hover to all interactive elements
    const interactives = document.querySelectorAll(
      'a, button, [role="button"], input, textarea'
    )

    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    document.addEventListener('mouseleave', handleMouseLeaveWindow)
    document.addEventListener('mouseenter', handleMouseEnterWindow)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeaveWindow)
      document.removeEventListener('mouseenter', handleMouseEnterWindow)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        ref={cursorRef}
        className='fixed top-0 left-0 z-[99999] pointer-events-none'
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: '#00ff87',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />

      {/* Follower Ring */}
      <div
        ref={followerRef}
        className='fixed top-0 left-0 z-[99998] pointer-events-none'
        style={{
          width: '36px',
          height: '36px',
          border: '1.5px solid rgba(0, 255, 135, 0.5)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}

export default Cursor