import "./App.css";
import { useState } from "react";
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
import Contact from "./Components/Genral/Contact";
import Search from "./Components/Customer/HomePage/Search/Search";
import Detail from "./Components/Customer/SingleProduct/Detail";
import CheckOut from "./Components/Customer/Cart/CheckOut";
import Products from "./Components/Customer/Products/Products";
import data from "./Components/Customer/HomePage/Data";
import Signup from "./Components/Customer/Signup";

function App() {
  const { productItem } = data;
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route productItem={productItem} exact path="/" element={<Home />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Login />} />
          <Route path="/create-account" element={<Signup/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/singleProduct" element={<Detail />} />
          <Route  path="/cart" element={<CartPage />} />
          <Route path="/products" element={<Products />} />
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
