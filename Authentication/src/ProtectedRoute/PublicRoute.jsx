import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div id="overlay">
        <div class="spinner"></div>
        <br />
        Loading...
      </div>
    );

  return !user ? children : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
