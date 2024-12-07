import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const DashboardCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all duration-200"
  >
    <div className="flex items-center space-x-4">
      <div className="bg-indigo-100 rounded-lg p-3">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <UserCircleIcon className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-lg font-semibold text-gray-900">
                Dashboard
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
              Logout
            </motion.button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user?.email}
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your account today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            icon={ChartBarIcon}
            title="Analytics"
            description="View your account statistics and performance metrics"
          />
          <DashboardCard
            icon={DocumentTextIcon}
            title="Documents"
            description="Access and manage your important files"
          />
          <DashboardCard
            icon={CogIcon}
            title="Settings"
            description="Configure your account preferences"
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
