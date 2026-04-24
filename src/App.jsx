import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioHome from './PortfolioHome.jsx'
import ContentPage from './ContentPage.jsx'
import CohesionKitPage from './CohesionKitPage.jsx'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/cohesion-kit" element={<CohesionKitPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
