import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Order from './pages/Order'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="px-4 sm:px-[5vw] md:[7vw] lg:px-[9vw]">
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/order' element={<Order />} />
          <Route path='/placeholder' element={<PlaceOrder />} />
          <Route path='/product/:productId' element={<Product />} />
         

        </Routes>
        <Footer />
      </div>
    
  )
}

export default App
