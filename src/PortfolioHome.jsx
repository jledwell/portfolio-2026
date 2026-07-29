import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/PortfolioHome.css'

const portfolioItems = [
  {
    id: 'parameters-service-discovery',
    title: 'Discovery to Outcomes: Parameters Service',
    description:
      'User-centered design, Exploration, Advocacy & storytelling, Systems thinking, User & business insights.',
    // Temporary stand-in until final art is ready
    imagePath: `${import.meta.env.BASE_URL}images/01%20platform/workshop%20whiteboard.png`,
    to: '/parameters-service-discovery',
  },
  {
    id: 'data-platform-integration',
    title: 'Data Platform Integration',
    description:
      'Rationalizing platform architecture to drive product alignment.',
    imagePath: `${import.meta.env.BASE_URL}images/01%20platform/personas.png`,
    to: '/content'
  },
  {
    id: 'placeholder-one',
    title: 'Cohesion Kit Pattern Library',
    description:
      'Balancing flexibility and standardization in a complex ecosystem.',
    imagePath: `${import.meta.env.BASE_URL}images/02%20cohesion%20kit/create-dialog-sizes.png`,
    to: '/cohesion-kit'
  },
]

function PortfolioHome() {
  const [aiDisclosureOpen, setAiDisclosureOpen] = useState(false)
  const aiDisclosureRef = useRef(null)

  useEffect(() => {
    document.title = 'Portfolio - Joshua Ledwell'
  }, [])

  useEffect(() => {
    if (!aiDisclosureOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setAiDisclosureOpen(false)
    }
    const onPointerDown = (event) => {
      if (
        aiDisclosureRef.current &&
        !aiDisclosureRef.current.contains(event.target)
      ) {
        setAiDisclosureOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [aiDisclosureOpen])

  return (
    <main className="portfolio-home">
      <div className="portfolio-home-inner">
        <div className="portfolio-home-header">
          <h1 className="portfolio-home-title">
            Portfolio - <span className="portfolio-home-title-name">Joshua Ledwell</span>
          </h1>
          <div className="ai-disclosure" ref={aiDisclosureRef}>
            <button
              type="button"
              className="ai-disclosure-trigger"
              aria-expanded={aiDisclosureOpen}
              aria-controls="ai-disclosure-tooltip"
              onClick={() => setAiDisclosureOpen((open) => !open)}
            >
              <svg
                className="ai-disclosure-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 16l.6 1.8L7.4 18.4 5.6 19 5 20.8l-.6-1.8L2.6 18.4 4.4 17.8 5 16z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ai-disclosure-label">AI Disclosure</span>
            </button>
            <div
              id="ai-disclosure-tooltip"
              role="dialog"
              aria-label="AI Disclosure"
              hidden={!aiDisclosureOpen}
              className={
                aiDisclosureOpen
                  ? 'ai-disclosure-tooltip ai-disclosure-tooltip--open'
                  : 'ai-disclosure-tooltip'
              }
            >
              <button
                type="button"
                className="ai-disclosure-close"
                aria-label="Close AI Disclosure"
                onClick={() => setAiDisclosureOpen(false)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <p className="ai-disclosure-tooltip-text">
                I used Cursor AI and Figma Make to vibe code my portfolio pages,
                along with component hover effects, and some diagram
                interactivity. All choices of colors and fonts are mine. I wrote
                all the page copy by hand.
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio-grid">
          <article className="portfolio-card portfolio-card--about">
            <img
              src={`${import.meta.env.BASE_URL}images/profile-picture.jpg`}
              alt="Joshua Ledwell"
              className="portfolio-card-image"
            />
            <div className="portfolio-card-body">
              <h2 className="portfolio-card-title">
                Experienced designer, researcher, and strategist.
              </h2>
              <a className="portfolio-contact-link" href="mailto:jledwell@gmail.com">
                <svg
                  className="portfolio-contact-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 7l9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Contact
              </a>
            </div>
          </article>
          {portfolioItems.map((item) => {
            const body = (
              <>
                <img src={item.imagePath} alt={item.title} className="portfolio-card-image" />
                <div className="portfolio-card-body">
                  <h2 className="portfolio-card-title">{item.title}</h2>
                  <p className="portfolio-card-description">{item.description}</p>
                </div>
              </>
            )

            return (
              <article key={item.id} className="portfolio-card">
                {item.to ? (
                  <Link to={item.to} className="portfolio-card-link">
                    {body}
                  </Link>
                ) : (
                  <div className="portfolio-card-link">{body}</div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default PortfolioHome
