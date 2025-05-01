import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import { AppProvider } from './Context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <AppProvider>
      <App/>
    </AppProvider>
  </StrictMode>,
)
