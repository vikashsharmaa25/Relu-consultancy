import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Dashboard from "./components/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from "./ProtectedRoute/PublicRoute";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./ProtectedRoute/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <ToastContainer position="top-right" />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterForm />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
