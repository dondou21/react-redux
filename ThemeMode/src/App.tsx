import './index.css'
import {useThemeContext} from './ThemeContext'

function App() {
  const {theme, setTheme} = useThemeContext()

  console.log(theme)
  return (
    <div className={theme === 'light' ? 'dark' : 'light'} >
      <h1>Theme toggling</h1>
      <button onClick={()=>setTheme(prev=>prev==='light'? 'dark':'light')} className=''>change theme</button>
    </div >
  )
}

export default App
