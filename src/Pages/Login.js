import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../services/api";
import "./../Styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await authAPI.login(formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("auth", "true");
      navigate("/home");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login to AutoParts Pro</h2>
        
        {error && <div className="error-message">{error}</div>}

        <label>Email</label>
        <input 
          type="email" 
          name="email"
          placeholder="Enter your email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />

        <label>Password</label>
        <input 
          type="password" 
          name="password"
          placeholder="Enter your password" 
          value={formData.password}
          onChange={handleChange}
          required 
        />

        <button className="loginButton" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        
        <p className="signup-link">
          Don't have an account? <span onClick={() => navigate("/register")}>Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
