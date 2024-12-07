import React, { useState } from "react";
import Logo from "./Components/Logo";
import Header from "./Components/Header";
import SellerBottom from "./Components/SellerBottom";
import Sidebar from "./Components/Sidebar";
import Post from "./Components/Post";
import ArtistsSection from "./Components/ArtistsSection";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const posts = [
    {
      id: 1,
      author: {
        name: "Lara Leones",
        username: "@thewallart",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      },
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
      stats: {
        likes: "9.8k",
        comments: "8.6k",
        shares: "7.2k",
      },
    },
    {
      id: 2,
      author: {
        name: "Thomas J.",
        username: "@thecustomcreater",
        avatar:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
      },
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
      stats: {
        likes: "8.2k",
        comments: "6.4k",
        shares: "5.9k",
      },
    },
    {
      id: 3,
      author: {
        name: "Sophia W.",
        username: "@modernliving",
        avatar:
          "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=150",
      },
      content: "Discovering the beauty of everyday life through my lens.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
      stats: {
        likes: "7.5k",
        comments: "6.3k",
        shares: "5.1k",
      },
    },
    {
      id: 4,
      author: {
        name: "Michael A.",
        username: "@cityexplorer",
        avatar:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150",
      },
      content: "Wandering through the streets, capturing every moment.",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=500",
      stats: {
        likes: "6.9k",
        comments: "5.7k",
        shares: "4.3k",
      },
    },
    {
      id: 5,
      author: {
        name: "Emma D.",
        username: "@creativecook",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      },
      content: "Sharing my favorite recipes and culinary experiments!",
      image:
        "https://plus.unsplash.com/premium_photo-1682092055821-6f31d8edb895?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NTAwfGVufDB8fDB8fHww",
      stats: {
        likes: "9.1k",
        comments: "7.2k",
        shares: "6.4k",
      },
    },
    {
      id: 6,
      author: {
        name: "Aiden B.",
        username: "@wildadventurer",
        avatar:
          "https://images.unsplash.com/photo-1542219553-816d47c4da43?w=150",
      },
      content: "Embracing the wild and capturing the untamed beauty of nature.",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500",
      stats: {
        likes: "10.4k",
        comments: "9.0k",
        shares: "7.8k",
      },
    },
    {
      id: 7,
      author: {
        name: "Isabella M.",
        username: "@artfulmind",
        avatar:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150",
      },
      content: "Exploring creativity through brushstrokes and colors.",
      image:
        "https://images.unsplash.com/photo-1520022974279-a96d1e249eab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8NTAwfGVufDB8fDB8fHww",
      stats: {
        likes: "8.7k",
        comments: "7.3k",
        shares: "6.5k",
      },
    },
    {
      id: 8,
      author: {
        name: "Oliver S.",
        username: "@fitnessjourney",
        avatar:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150",
      },
      content: "Pushing limits, one rep at a time. Join my fitness journey!",
      image:
        "https://images.unsplash.com/photo-1520474151999-5cb75d6a9a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDUwMHxlbnwwfHwwfHx8MA%3D%3D",
      stats: {
        likes: "7.9k",
        comments: "6.2k",
        shares: "5.4k",
      },
    },
    {
      id: 9,
      author: {
        name: "Mia C.",
        username: "@wanderlust",
        avatar:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150",
      },
      content: "Dreaming of faraway places and magical sunsets.",
      image:
        "https://media.istockphoto.com/id/1403395681/photo/dollars-in-a-mans-hand-on-background-federal-reserve-building-in-washington-dc-united-states.webp?a=1&b=1&s=612x612&w=0&k=20&c=upwUNccWlK33C2oRmpWsvsQ8FJTn3YpXUvaowYPLmIY=",
      stats: {
        likes: "8.3k",
        comments: "7.1k",
        shares: "6.0k",
      },
    },
    {
      id: 10,
      author: {
        name: "Ethan K.",
        username: "@techenthusiast",
        avatar:
          "https://images.unsplash.com/photo-1546525848-6fc4f2ee8d78?w=150",
      },
      content: "Unboxing the latest gadgets and sharing tech reviews.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
      stats: {
        likes: "9.0k",
        comments: "8.4k",
        shares: "7.3k",
      },
    },
  ];

  return (
    <div className="flex flex-col w-full mx-auto p-2 md:p-4 max-w-[1200px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5 mb-4 w-full mx-auto">
        <div className="bg-white rounded-lg flex items-center justify-between md:justify-center p-3">
          <Logo />

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex bg-white rounded-lg items-center justify-center md:col-span-2">
          <Header />
        </div>

        <div className="hidden md:flex bg-teal-500 rounded-lg items-center justify-center">
          <SellerBottom />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white w-4/5 h-full p-4 overflow-y-auto">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
            <div className="mt-12">
              <Header />
              <div className="mt-4">
                <SellerBottom />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5 mb-4 max-w-[1160px] mx-auto">
        <div className="hidden md:flex bg-white rounded-lg items-center justify-center h-screen">
          <Sidebar />
        </div>

        <div className="bg-white rounded-lg flex flex-col items-center justify-start overflow-y-auto scrollable-container md:col-span-2 h-screen">
          <Post posts={posts} />
        </div>

        <div className="hidden md:flex rounded-lg items-start justify-start">
          <ArtistsSection />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
        <div className="grid grid-cols-3 py-2">
          <button className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-xs">Search</span>
          </button>
          <button className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-xs">Create</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
