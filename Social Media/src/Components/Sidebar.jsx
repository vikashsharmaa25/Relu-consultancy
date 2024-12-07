import React from "react";
import {
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineShoppingCart,
  AiOutlineMessage,
  AiOutlineWallet,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineSubscriptions } from "react-icons/md";

const menuItems = [
  { icon: AiOutlineHome, text: "Home", active: true },
  { icon: AiOutlineBell, text: "Notifications" },
  { icon: AiOutlineShoppingCart, text: "Shop" },
  { icon: AiOutlineMessage, text: "Conversation" },
  { icon: AiOutlineWallet, text: "Wallet" },
  { icon: MdOutlineSubscriptions, text: "Subscription" },
  { icon: AiOutlineUser, text: "My Profile" },
  { icon: AiOutlineSetting, text: "Settings" },
];

const Sidebar = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <nav className="flex-1 p-5">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center space-x-3 p-2 rounded-lg ${
                  item.active
                    ? "text-teal-500"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="text-xl" />
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="flex items-center space-x-3 text-gray-600 p-2 hover:bg-gray-100 rounded-lg">
        <BiLogOut className="text-xl" />
        <span>Log out</span>
      </button>
    </div>
  );
};

export default Sidebar;
