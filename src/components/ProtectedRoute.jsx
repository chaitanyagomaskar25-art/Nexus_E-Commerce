import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useAuth();
const navigate = useNavigate()
  if (!isAdmin) {
    navigate('/login', { replace: true });
  }

  return children;
};

export default ProtectedRoute;