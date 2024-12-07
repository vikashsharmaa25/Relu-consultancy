import React from "react";

const ArtistCard = ({ name, username, imageUrl }) => {
  return (
    <div className="relative group cursor-pointer">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
        <div className="flex items-center space-x-3">
          <img
            src={imageUrl}
            alt={name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-white">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm opacity-80">{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
