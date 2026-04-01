import { Link } from 'react-router-dom'
import './styles/PortfolioHome.css'

const portfolioItems = [
  {
    id: 'data-platform-integration',
    title: 'Data Platform Product Integration',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis diam feugiat, egestas nibh vitae, vulputate lacus.',
    imagePath: '/images/dialog-simplification.png',
    to: '/content'
  },
  {
    id: 'placeholder-one',
    title: 'Lorem Ipsum One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dui sed velit viverra faucibus non vitae orci.',
    imagePath: '/images/personas.png',
    to: '/content'
  },
  {
    id: 'placeholder-two',
    title: 'Lorem Ipsum Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id magna id justo luctus volutpat vitae at mauris.',
    imagePath: '/images/workshop%20whiteboard.png',
    to: '/content'
  },
  {
    id: 'placeholder-three',
    title: 'Lorem Ipsum Three',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tortor nec malesuada cursus sed in nibh.',
    imagePath: '/images/Existing%20dialog%20to%20new.png',
    to: '/content'
  }
]

function PortfolioHome() {
  return (
    <main className="portfolio-home">
      <h1 className="portfolio-home-title">Portfolio</h1>
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
