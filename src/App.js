import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './components/pages/Home'
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Cart from "./components/pages/Cart"
import { useState } from "react";


function App() {
  const [cart, setCart] = useState(10)
  return (
    <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home cart={cart} setCart={setCart}/>}/>
      <Route path="/About" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/Cart" element={<Cart cart={cart} setCart ={setCart} />}/>
    </Routes>
    </div>
  );
}

export default App;
