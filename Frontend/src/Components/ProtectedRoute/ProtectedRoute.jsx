import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
