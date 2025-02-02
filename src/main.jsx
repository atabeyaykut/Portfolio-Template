import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './contextAPI/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './contextAPI/LanguageContext.jsx'
import { ThemeProvider } from './contextAPI/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(

  <LanguageProvider>
    <UserProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  </LanguageProvider>

)
