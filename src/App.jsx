// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { WhatsAppFloat } from './components/ui'

import Home       from './pages/Home'
import Planos     from './pages/Planos'
import QuemSomos  from './pages/QuemSomos'
import FAQ        from './pages/FAQ'
import Contato    from './pages/Contato'
import AreaCliente from './pages/AreaCliente'
import Contratos  from './pages/Contratos'
import Cameras    from './pages/Cameras'
import NotFound   from './pages/NotFound'

import './styles/global.css'
import './styles/animations.css'
import './styles/components.css'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/"            element={<Home />}        />
            <Route path="/planos"      element={<Planos />}      />
            <Route path="/quem-somos"  element={<QuemSomos />}   />
            <Route path="/faq"         element={<FAQ />}         />
            <Route path="/contato"     element={<Contato />}     />
            <Route path="/area-cliente" element={<AreaCliente />} />
            <Route path="/contratos"    element={<Contratos />}   />
            <Route path="/cameras"      element={<Cameras />}     />
            <Route path="*"             element={<NotFound />}    />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </ThemeProvider>
  )
}
