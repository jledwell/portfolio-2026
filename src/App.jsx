import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioHome from './PortfolioHome.jsx'
import ContentPage from './ContentPage.jsx'
import CohesionKitPage from './CohesionKitPage.jsx'
import ParametersServiceDiscoveryPage from './ParametersServiceDiscoveryPage.jsx'
import BridgingWorkflowGapsWithDynamoPlayerPage from './BridgingWorkflowGapsWithDynamoPlayerPage.jsx'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/cohesion-kit" element={<CohesionKitPage />} />
          <Route
            path="/parameters-service-discovery"
            element={<ParametersServiceDiscoveryPage />}
          />
          <Route
            path="/bridging-workflow-gaps-with-dynamo-player"
            element={<BridgingWorkflowGapsWithDynamoPlayerPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
