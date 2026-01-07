import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StairAnimation from './components/Stair_animation.jsx'

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter> 
    <StairAnimation>
      <App /> 
    </StairAnimation>
    </BrowserRouter> 
)
