'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { TOURS, TEAM, REVIEWS, HOTELS, ECO_RULES, MARQUEE_ITEMS } from '@/lib/kawi-data'
import Chatbot from '@/components/Chatbot'

export default function KawiVoyage() {
  const [chatOpen, setChatOpen] = useState(false)
  const [selectedCat, setSelectedCat] = useState('All')
  const [currentReview, setCurrentReview] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [preloaderDone, setPreloaderDone] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  const categories = ['All', ...Array.from(new Set(TOURS.map((t) => t.cat)))]
  const filtered = selectedCat === 'All' ? TOURS : TOURS.filter((t) => t.cat === selectedCat)

  // Review auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((p) => (p + 1) % REVIEWS.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // GSAP + Lenis animations
  useEffect(() => {
    let lenis: InstanceType<typeof import('lenis').default> | null = null
    let rafId: number | undefined

    const initAnimations = async () => {
      const gsapModule = await import('gsap')
      const gsap = gsapModule.default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const Lenis = (await import('lenis')).default

      gsap.registerPlugin(ScrollTrigger)

      // Lenis smooth scroll
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })

      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add((time: number) => lenis?.raf(time * 1000))
      gsap.ticker.lagSmoothing(0)

      // === PRELOADER ===
      const preloaderTl = gsap.timeline({
        onComplete: () => setPreloaderDone(true),
      })

      preloaderTl
        .to('.preloader-letter', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
        })
        .to(
          '.preloader-line',
          {
            width: 120,
            duration: 0.6,
            ease: 'power2.inOut',
          },
          '-=0.2'
        )
        .to(
          '.preloader-tagline',
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .to('.preloader', {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          delay: 0.4,
        })

      // === HERO ENTRANCE ===
      const heroTl = gsap.timeline({ delay: 2.2 })

      heroTl
        .to('.hero-badge', {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        })
        .to(
          '.hero-title',
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .to(
          '.hero-sub',
          {
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .to(
          '.hero-buttons',
          {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.3'
        )

      // === SCROLL-TRIGGERED SECTIONS ===
      // Utility: reveal children on scroll
      const revealSections = document.querySelectorAll('.reveal-section')
      revealSections.forEach((section) => {
        const items = section.querySelectorAll('.reveal-item')
        gsap.set(items, { opacity: 0, y: 50 })

        ScrollTrigger.create({
          trigger: section,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(items, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power3.out',
            })
          },
        })
      })

      // Counter animations
      const counters = document.querySelectorAll('.counter-value')
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10)
        const isHash = counter.getAttribute('data-prefix') === '#'

        ScrollTrigger.create({
          trigger: counter,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(
              { val: 0 },
              {
                val: target,
                duration: 2,
                ease: 'power2.out',
                onUpdate: function () {
                  const current = Math.round(this.targets()[0].val)
                  counter.textContent = isHash ? `#${current}` : `${current}`
                },
              }
            )
          },
        })
      })

      // Parallax on hero mesh
      gsap.to('.hero-mesh', {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        scale: 1.2,
        opacity: 0,
      })
    }

    initAnimations()

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      lenis?.destroy()
    }
  }, [])

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  // Generate particles for hero
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    duration: `${12 + Math.random() * 10}s`,
    size: `${1 + Math.random() * 2}px`,
    opacity: 0.1 + Math.random() * 0.3,
  }))

  return (
    <div ref={mainRef}>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />

      {/* Noise Grain */}
      <div className="grain-overlay" />

      {/* === PRELOADER === */}
      {!preloaderDone && (
        <div className="preloader">
          <div className="preloader-brand">
            <span className="preloader-letter accent">K</span>
            <span className="preloader-letter">A</span>
            <span className="preloader-letter">W</span>
            <span className="preloader-letter">I</span>
          </div>
          <div className="preloader-line" />
          <div className="preloader-tagline">a place for friends</div>
        </div>
      )}

      {/* === NAVIGATION === */}
      <nav className={`nav-main ${scrolled ? 'scrolled' : ''}`}>
        <a className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span>K</span>AWI
        </a>
        <div className="nav-links">
          <button className="nav-link" onClick={() => scrollTo('story')}>
            Our Story
          </button>
          <button className="nav-link" onClick={() => scrollTo('experiences')}>
            Experiences
          </button>
          <button className="nav-link" onClick={() => scrollTo('team')}>
            Team
          </button>
          <button className="nav-link" onClick={() => scrollTo('hotels')}>
            Stay
          </button>
          <button className="nav-link" onClick={() => scrollTo('eco')}>
            Values
          </button>
          <button className="nav-cta-btn" onClick={() => setChatOpen(true)}>
            Plan My Trip
          </button>
        </div>
      </nav>

      {/* === HERO === */}
      <section className="hero-section">
        <div className="hero-mesh" />
        <div className="hero-particles">
          {particles.map((p) => (
            <div
              key={p.id}
              className="hero-particle"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                opacity: p.opacity,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>

        <div style={{ position: 'relative', zIndex: 2, padding: '0 24px' }}>
          <div className="hero-badge">
            <span className="hero-badge-line" />
            BOCAS DEL TORO &middot; PANAMA
            <span className="hero-badge-line" />
          </div>

          <h1 className="hero-title font-display">
            A Place for
            <br />
            <em>Friends</em>
          </h1>

          <p className="hero-sub">
            Kawi Voyage is your local friend in Panama&apos;s Caribbean. We don&apos;t sell
            tours&nbsp;&mdash; we share the Bocas we love. Trilingual guides, community
            partnerships, and a deep respect for the ocean.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setChatOpen(true)}>
              Plan My Trip &rarr;
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('experiences')}>
              Explore Experiences
            </button>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
          DISCOVER
        </div>
      </section>

      {/* === MARQUEE === */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i}>
              <span className="marquee-dot" style={{ display: 'inline-block', marginRight: 48 }} />
              <span className="marquee-item">{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* === STORY === */}
      <section className="kawi-section story-bg reveal-section" id="story">
        <div className="section-inner">
          <div className="story-grid">
            <div>
              <div className="section-label reveal-item">Our Story</div>
              <h2 className="section-heading reveal-item font-display">
                From Grenoble to the Caribbean&nbsp;&mdash; built on <em>trust</em>, not tourism
              </h2>
              <p className="section-desc reveal-item">
                Sophie left France for adventure. She found home in Bocas del Toro. Over a decade
                of partnership with Ng&auml;be communities and Afro-Caribbean families, she built
                something rare&nbsp;&mdash; a travel company that belongs to the place it shows
                you.
              </p>
              <p
                className="section-desc reveal-item"
                style={{ marginTop: 16, color: 'rgba(244,237,228,0.35)' }}
              >
                Our captains were born on these islands. Our guides grew up in these jungles. When
                we take you somewhere, we&apos;re taking you home.
              </p>
              <div className="story-stats reveal-item">
                <div>
                  <div className="stat-number font-display">
                    <span className="counter-value" data-target="141">
                      0
                    </span>
                  </div>
                  <div className="stat-label">5-Star Reviews</div>
                </div>
                <div>
                  <div className="stat-number font-display">
                    <span className="counter-value" data-target="3" data-prefix="#">
                      #0
                    </span>
                  </div>
                  <div className="stat-label">of 30 in Bocas</div>
                </div>
                <div>
                  <div className="stat-number font-display">
                    <span className="counter-value" data-target="3">
                      0
                    </span>
                  </div>
                  <div className="stat-label">Languages</div>
                </div>
              </div>
            </div>

            <div className="values-stack">
              {[
                {
                  icon: '\uD83E\uDD1D',
                  title: 'Community First',
                  desc: 'Tour fees go directly to Ng\u00E4be villages. Guides are local. Lunches are cooked by families, not caterers.',
                },
                {
                  icon: '\uD83C\uDF0A',
                  title: 'Ocean Respect',
                  desc: 'Reef-safe only. No crowding dolphins. No touching starfish. We follow strict ecotourism codes on every trip.',
                },
                {
                  icon: '\u2728',
                  title: 'Custom Always',
                  desc: "No two trips are the same. We design every day around your energy, your interests, and the weather.",
                },
              ].map((v, i) => (
                <div className="value-card reveal-item" key={i}>
                  <span className="value-icon">{v.icon}</span>
                  <div className="value-title font-display">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === EXPERIENCES === */}
      <section className="kawi-section tours-bg reveal-section" id="experiences">
        <div className="section-inner">
          <div className="section-label reveal-item">Experiences</div>
          <h2 className="section-heading reveal-item font-display">
            Not tours. <em>Memories.</em>
          </h2>
          <p className="section-desc reveal-item">
            Sixteen ways to fall in love with the Caribbean. Every one guided by someone who calls
            it home.
          </p>

          <div className="cat-filters reveal-item">
            {categories.map((c) => (
              <button
                key={c}
                className={`cat-pill ${selectedCat === c ? 'active' : ''}`}
                onClick={() => setSelectedCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="tours-grid">
            {filtered.map((tour) => (
              <div
                className={`tour-card ${tour.popular ? '' : ''}`}
                key={tour.id}
                onClick={() => setChatOpen(true)}
              >
                {tour.popular && <div className="tour-popular-badge">Most Popular</div>}
                <span className="tour-emoji">{tour.emoji}</span>
                <div className="tour-cat">{tour.cat}</div>
                <div className="tour-name font-display">{tour.name}</div>
                <div className="tour-meta">
                  <span>{tour.duration}</span>
                  <span>{tour.time}</span>
                </div>
                <div className="tour-tags">
                  {tour.highlights.map((h, i) => (
                    <span className="tour-tag" key={i}>
                      {h}
                    </span>
                  ))}
                </div>
                {tour.seasonal && (
                  <div className="tour-seasonal">{tour.seasonal}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TEAM === */}
      <section className="kawi-section reveal-section" id="team">
        <div className="section-inner">
          <div className="section-label reveal-item">Your Crew</div>
          <h2 className="section-heading reveal-item font-display">
            People, not <em>employees</em>
          </h2>
          <p className="section-desc reveal-item">
            Every person on our team was born or chose to live in Bocas. They&apos;re not reading
            a script&nbsp;&mdash; they&apos;re showing you their home.
          </p>

          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div className="team-card reveal-item" key={i}>
                <div className="team-avatar">{m.flag}</div>
                <div className="team-name font-display">
                  {m.name}
                  {m.nick ? ` "${m.nick}"` : ''}
                </div>
                <div className="team-role">{m.role}</div>
                <div className="team-detail">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === REVIEWS === */}
      <section className="kawi-section reviews-bg reveal-section" id="reviews">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-label reveal-item">Voices</div>
          <h2 className="section-heading reveal-item font-display">
            Don&apos;t take our word <em>for it</em>
          </h2>

          <div className="review-container reveal-item">
            <div className="review-quote visible font-display" key={currentReview}>
              &ldquo;{REVIEWS[currentReview].text}&rdquo;
            </div>
            <div className="review-author">{REVIEWS[currentReview].author}</div>
            <div className="review-origin">{REVIEWS[currentReview].from}</div>

            <div className="review-dots">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  className={`review-dot ${i === currentReview ? 'active' : ''}`}
                  onClick={() => setCurrentReview(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 14,
                color: 'rgba(244,237,228,0.3)',
                fontStyle: 'italic',
              }}
              className="font-display"
            >
              5.0 on TripAdvisor &middot; 141 reviews &middot; #3 of 30 Outdoor Activities in
              Bocas Town
            </span>
          </div>
        </div>
      </section>

      {/* === HOTELS === */}
      <section className="kawi-section reveal-section" id="hotels">
        <div className="section-inner">
          <div className="section-label reveal-item">Where to Stay</div>
          <h2 className="section-heading reveal-item font-display">
            Hand-picked by <em>Sophie</em>
          </h2>
          <p className="section-desc reveal-item">
            We only recommend places we&apos;d send our friends. Each one personally vetted, from
            budget to overwater luxury.
          </p>

          <div className="hotels-grid">
            {HOTELS.map((h, i) => (
              <div className="hotel-card reveal-item" key={i}>
                <div>
                  <div className="hotel-name font-display">{h.name}</div>
                  <div className="hotel-island">{h.island} Island</div>
                  <div className="hotel-vibe">{h.vibe}</div>
                </div>
                <div className="hotel-price-block">
                  <div className="hotel-from-label">From</div>
                  <div className="hotel-amount font-display">${h.from}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ECO CODE === */}
      <section className="kawi-section eco-bg reveal-section" id="eco">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-label reveal-item">Our Code</div>
          <h2
            className="section-heading reveal-item font-display"
            style={{ maxWidth: 640, margin: '0 auto 12px' }}
          >
            The best you know, the best you <em>protect</em>
          </h2>
          <p className="section-desc reveal-item" style={{ margin: '0 auto' }}>
            This isn&apos;t marketing. It&apos;s how we operate. Every day. Every tour. No
            exceptions.
          </p>

          <div className="eco-grid">
            {ECO_RULES.map((r, i) => (
              <div className="eco-rule reveal-item" key={i}>
                <span className="eco-icon">{r.icon}</span>
                <span className="eco-text">{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="kawi-section cta-bg reveal-section" style={{ paddingTop: 180, paddingBottom: 180 }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-label reveal-item" style={{ textAlign: 'center' }}>
            Ready?
          </div>
          <h2
            className="section-heading reveal-item font-display"
            style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 24px' }}
          >
            Your friend in Panama is one <em>message</em> away
          </h2>
          <p
            className="section-desc reveal-item"
            style={{ textAlign: 'center', margin: '0 auto 48px' }}
          >
            Tell us your dates, your vibe, and your dream day. We&apos;ll design the rest.
          </p>

          <div
            className="reveal-item"
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button className="btn-primary" onClick={() => setChatOpen(true)}>
              Chat with Sophie&apos;s AI &rarr;
            </button>
            <a
              href="https://wa.me/50765559954"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp Sophie Directly
            </a>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="footer-main">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name font-display">
              <span>K</span>AWI VOYAGE
            </div>
            <p className="footer-brand-desc">
              A place for friends in Panama&apos;s Caribbean. Authentic eco-tours in Bocas del
              Toro since 2017.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Explore</div>
            <button className="footer-link" onClick={() => scrollTo('experiences')} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
              Experiences
            </button>
            <button className="footer-link" onClick={() => scrollTo('hotels')} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
              Hotels
            </button>
            <button className="footer-link" onClick={() => scrollTo('team')} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
              Our Team
            </button>
            <button className="footer-link" onClick={() => scrollTo('eco')} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
              Our Values
            </button>
          </div>
          <div>
            <div className="footer-col-title">Connect</div>
            <a
              className="footer-link"
              href="https://wa.me/50765559954"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="footer-link"
              href="https://www.instagram.com/kawivoyagetours/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="footer-link"
              href="https://www.facebook.com/kawivoyage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              className="footer-link"
              href="https://www.youtube.com/channel/UC083wtBbJmoxOdgvf3TsV_g"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
          <div>
            <div className="footer-col-title">Info</div>
            <span className="footer-link" style={{ cursor: 'default' }}>
              +(507) 6555 9954
            </span>
            <span className="footer-link" style={{ cursor: 'default' }}>
              Isla Col&oacute;n, Bocas del Toro
            </span>
            <span className="footer-link" style={{ cursor: 'default' }}>
              Mon&ndash;Thu 9am&ndash;6pm
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; 2026 Kawi Voyage SA &middot; A place for friends
          </div>
          <div className="footer-powered">Powered by MachineMind</div>
        </div>
      </footer>

      {/* === CHAT FAB === */}
      {!chatOpen && (
        <>
          <button
            className="chat-fab"
            onClick={() => setChatOpen(true)}
            aria-label="Open chat with Sophie's AI"
          >
            \uD83C\uDF34
          </button>
          <div className="chat-fab-label">Ask Sophie&apos;s AI</div>
        </>
      )}

      {/* === CHATBOT === */}
      <Chatbot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  )
}
