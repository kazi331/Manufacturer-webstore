import { Route, Routes } from "react-router-dom";
import "./App.css";
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
import Dashboard from "./pages/dashboard/Dashboard";
import MyOrders from "./pages/dashboard/MyOrders";
import MyReviews from "./pages/dashboard/MyReviews";
import AddReviews from "./pages/dashboard/AddReviews";
import UserProfile from "./pages/dashboard/UserProfile";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <div>
      <Navbar/>
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/purchase/:pId"element={ <Protected> <Purchase /></Protected> }/>
        <Route path="/dashboard"element={ <Protected> <Dashboard /></Protected> }> 
          <Route index element={ <MyOrders/>} />
          <Route path="/dashboard/my-reviews" element={ <MyReviews/>} />
          <Route path="/dashboard/add-review" element={ <AddReviews/>} />
          <Route path="/dashboard/user-profile" element={ <UserProfile/>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer/>
    </div>
      <Footer />
    </div>
  );
}

export default App;
