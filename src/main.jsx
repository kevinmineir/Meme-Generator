import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MemeGeneratorApp } from "./components/App/index.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <MemeGeneratorApp/>
    </main>
  </StrictMode>,
)
