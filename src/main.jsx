import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import HeroisApp from './HeroisApp.jsx'
import { Footer } from './Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

// AGREGANDO FUTURE PARA EVITAR ALERTAS DE ROUTE NO CONSOLE
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <HeroisApp />
      {/* <Footer /> */}
    </BrowserRouter>
  </StrictMode>
)
