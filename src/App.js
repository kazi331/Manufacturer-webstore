import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import Navbar from "./shared/Navbar";
import Protected from "./shared/Protected";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Protected><Checkout /></Protected>} />
      </Routes>
    </div>
  );
}

export default App;
