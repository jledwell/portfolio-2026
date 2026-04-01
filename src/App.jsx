import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioHome from './PortfolioHome.jsx'
import ContentPage from './ContentPage.jsx'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/content" element={<ContentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
