import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import Pricing from './pages/Pricing/Pricing'
import Products from './pages/Products/Products'
import SignUp from './pages/SignUp/SignUp'
import Support from './pages/Support/Support'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
