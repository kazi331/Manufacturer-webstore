import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./images/Dashboard";
import About from "./pages/about/About";
import Purchase from "./pages/checkout/Purchase";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import NotFound from "./shared/NotFound";
import Protected from "./shared/Protected";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./pages/login/Register";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/purchase/:pId"element={ <Protected> <Purchase /></Protected> }/>
        <Route path="/dashboard"element={ <Protected> <Dashboard /></Protected> }/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
