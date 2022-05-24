import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loader from "./Loader";

const Protected = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
if(loading) return  <div class="text-center p-20 flex items-center justify-center">
                 <Loader/>    
</div>
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default Protected;
