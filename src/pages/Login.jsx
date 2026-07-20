import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { loginAsAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginAsAdmin();
    navigate("/admin");
  };

  return (
    <button onClick={handleLogin}>
      Login as Admin
    </button>
  );
};

export default AdminLogin;