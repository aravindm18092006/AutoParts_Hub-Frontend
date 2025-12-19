import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const userData = localStorage.getItem("user");
    
    if (auth === "true" && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/home">
          <img src="/Images/download.png" alt="AutoParts Pro" />
          <span>AutoParts Pro</span>
        </NavLink>
      </div>
      
      <nav className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/shop">Shop Parts</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
        {isAuthenticated ? (
          <>
            <NavLink to="/addparts">Add Parts</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <div className="user-info">
              <span>Welcome, {user?.name}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
