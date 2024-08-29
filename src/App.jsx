import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'
import WatchHistory from './Pages/WatchHistory'


function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home-page' element={<HomePage/>}/>
        <Route path='/watch-history' element={<WatchHistory/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
