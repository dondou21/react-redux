import { useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {ThemeContext} from './ThemeContext'
import './App.css'

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <>
      <div className={theme === 'light' ? 'dark' : 'light'}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
        <button onClick={toggleTheme}>
          Change Theme
        </button>
      </div>
      
      
    </>
  )
}

export default App
