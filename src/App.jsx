import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'


function App() {

  return (
    <div className='px-80 pt-4 font-sans font-normal'>
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
