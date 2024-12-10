
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Whishlist from './Pages/Whishlist'
import Cart from './Pages/Cart'
import Footer from './Components/Footer'
import View from './Pages/View'




function App() {
  

  return (
    <>
    
   <Routes>
    <Route element={<Home/> }path='/'/>
    <Route element={<Whishlist/> }path='/Whishlist'/>
    <Route element={<Cart/> }path='/Cart'/>
    {/* :id :is used to indecate its an id note a normal page */}
    <Route element={<View/>}path='/:id/view'/>
   </Routes>
   <Footer/>

    </>
  )
}

export default App
