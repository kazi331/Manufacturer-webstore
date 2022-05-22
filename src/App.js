import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import NotFound from "./shared/NotFound";
import Protected from "./shared/Protected";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Protected><Checkout /></Protected>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
