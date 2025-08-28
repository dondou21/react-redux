import { useContext } from 'react';
import { ThemeContext } from './Theme';

export default function App() {
  const { theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div 
      style= {{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        height: "100vh",
      }}  
    >
      <h1> Theme: { theme === "light" ? "Day Mode ☀️ " : "Night Mode🌚 " } </h1>
      <button
        onClick={ toggleTheme }
      >
        Change Theme
      </button>
    </div>
  )
}