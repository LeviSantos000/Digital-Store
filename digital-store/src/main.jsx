import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import styled from 'styled-components'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
