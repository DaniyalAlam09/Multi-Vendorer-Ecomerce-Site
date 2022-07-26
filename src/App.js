import "./App.css";
import Home from "./Components/Customer/HomePage/Home";
import Login from "./Components/Customer/Login";
import Footer from "./Components/Genral/Footer";
import Navbar from "./Components/Genral/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";
import CartPage from "./Components/Customer/Cart/CartPage";
import Cart from "./Components/Customer/Cart/Cart";
import ShopsPage from "./Components/Customer/Shops/ShopsPage";

function App() {
  return (
    <Router>
      <div className="App">
        
        <CartProvider>
        <Login/>
        <Navbar />
        {/* <Home /> */}
        <ShopsPage/>
        {/* <CartPage/>
        <Cart/> */}
        <Footer />
        </CartProvider>
      </div>
    </Router>

    // <CartProvider>
    //   <CartPage/>
    //   <Cart/>
    // </CartProvider>
  );
}

export default App;
