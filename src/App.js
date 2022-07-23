import "./App.css";
import Home from "./Components/Customer/HomePage/Home";
import Login from "./Components/Customer/Login";
import Footer from "./Components/Genral/Footer";
import Navbar from "./Components/Genral/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Login/> */}
        <Navbar />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
