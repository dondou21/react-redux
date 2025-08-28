import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyTheme } from './Theme'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MyTheme>
        <App />
      </MyTheme>,
  </StrictMode>
    
)
