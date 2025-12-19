import { Navigate } from "react-router-dom";

const ProtectedRout = ({ children }) => {
  const auth = localStorage.getItem("auth");
  if (auth === "true") {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRout;
