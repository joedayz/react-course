import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import FirstApp from './FirstApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstApp title='Hola, soy JoeDayz'/>
  </StrictMode>,
)
