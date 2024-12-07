import React from "react";
import { AiOutlineSearch, AiOutlineFilter } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 w-full">
      <div className="flex-1 max-w-2xl relative">
        <div className="relative">
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <AiOutlineFilter />
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
