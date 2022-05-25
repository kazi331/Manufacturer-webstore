import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
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
import AddReviews from "./pages/dashboard/AddReviews";
import UserProfile from "./pages/dashboard/UserProfile";
import ManageReviews from "./pages/dashboard/ManageReviews";
import AllProducts from "./pages/AllProducts/AllProducts";
import Purchase from "./pages/purchase/Purchase";
import ManageOrders from "./pages/dashboard/ManageOrders";

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
          <Route path="/dashboard/reviews" element={ <ManageReviews/>} />
          <Route path="/dashboard/orders" element={ <ManageOrders/>} />
          <Route path="/dashboard/user-profile" element={ <UserProfile/>} />
          <Route path="/dashboard/add-review" element={ <AddReviews/>} />
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
