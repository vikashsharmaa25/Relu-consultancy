import { motion } from "framer-motion";

const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
      )}
      <motion.input
        whileFocus={{ scale: 1.01 }}
        className={`block w-full ${
          Icon ? "pl-10" : "pl-3"
        } pr-3 py-2.5 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
        {...props}
      />
    </div>
  );
};

export default Input;
