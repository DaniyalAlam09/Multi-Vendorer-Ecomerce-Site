import "./App.css";
import Home from "./Components/Customer/HomePage/Home";
import Login from "./Components/Customer/Login";
import Footer from "./Components/Genral/Footer";
import Navbar from "./Components/Genral/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";
import CartPage from "./Components/Customer/Cart/CartPage";
import Cart from "./Components/Customer/Cart/Cart";
import ShopsPage from "./Components/Customer/Shops/ShopsPage";
import About from "./Components/Genral/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Login />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shops" element={<ShopsPage />} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>

    // <CartProvider>
    //   <CartPage/>
    //   <Cart/>
    // </CartProvider>
  );
}

export default App;
