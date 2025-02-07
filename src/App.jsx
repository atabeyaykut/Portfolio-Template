import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { useTheme } from './contextAPI/ThemeContext'
import HomePage from './pages/HomePage'

function App() {
  const { theme } = useTheme()

  return (
    <div className={`
      ${theme === "dark" ? "bg-gray-500 text-amber-500" : "bg-slate-200 text-gray-800"}
      min-h-screen
      px-4 
      sm:px-6 
      md:px-12 
      lg:px-24 
      xl:px-32 
      2xl:px-80 
      pt-4
      font-sans 
      font-normal
    `}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
