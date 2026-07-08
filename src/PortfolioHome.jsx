import { Link } from 'react-router-dom'
import './styles/PortfolioHome.css'

const portfolioItems = [
  {
    id: 'data-platform-integration',
    title: 'Data Platform Integration',
    description:
      'Rationalizing platform architecture to drive product alignment.',
    imagePath: '/images/01%20platform/personas.png',
    to: '/content'
  },
  {
    id: 'placeholder-one',
    title: 'Cohesion Kit Pattern Library',
    description:
      'Balancing flexibility and standardization in a complex ecosystem.',
    imagePath: '/images/02%20cohesion%20kit/create-dialog-sizes.png',
    to: '/cohesion-kit'
  }
]

function PortfolioHome() {
  return (
    <main className="portfolio-home">
      <h1 className="portfolio-home-title">Portfolio - Joshua Ledwell</h1>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <article key={item.id} className="portfolio-card">
            <Link to={item.to} className="portfolio-card-link">
              <img src={item.imagePath} alt={item.title} className="portfolio-card-image" />
              <div className="portfolio-card-body">
                <h2 className="portfolio-card-title">{item.title}</h2>
                <p className="portfolio-card-description">{item.description}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}

export default PortfolioHome
