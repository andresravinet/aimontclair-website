import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Industries from './pages/Industries'
import About from './pages/About'
import Contact from './pages/Contact'
import AIChatbot from './pages/services/AIChatbot'
import SchedulingAutomation from './pages/services/SchedulingAutomation'
import WorkflowAutomation from './pages/services/WorkflowAutomation'
import AITraining from './pages/services/AITraining'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai-chatbot" element={<AIChatbot />} />
          <Route path="/services/scheduling-automation" element={<SchedulingAutomation />} />
          <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/services/ai-training" element={<AITraining />} />
          <Route path="/services/:service" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
