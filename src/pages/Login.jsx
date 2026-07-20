import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginAsAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginAsAdmin();
    navigate("/admin");
  };

  return (
    <>
    <Link to='/'>Back to Home</Link> <br />
    <button onClick={handleLogin}>
      Login as Admin
    </button>
    
    </>
    
  );
};

export default Login;