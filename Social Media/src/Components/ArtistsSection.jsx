import React from "react";
import ArtistCard from "./ArtistCards";
const artists = [
  {
    name: "Thomas Edward",
    username: "@thewillwithyou",
    imageUrl: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    name: "Chris Doe",
    username: "@thewillwithyou",
    imageUrl: "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97",
  },
  {
    name: "Emilie Jones",
    username: "@thewillwithyou",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    name: "Jessica Williams",
    username: "@thewillwithyou",
    imageUrl: "https://images.unsplash.com/photo-1523365154888-8a758819b722",
  },
];

const ArtistsSection = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Artists</h2>
        <button className="text-gray-500 hover:text-gray-700">
          Photographers
        </button>
      </div>
      <div className="space-y-4">
        {artists.map((artist, index) => (
          <ArtistCard key={index} {...artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistsSection;
