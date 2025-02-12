import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.css" //bootstrap styling
import "./index.css" //custom css styling
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
