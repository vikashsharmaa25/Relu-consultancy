import React from "react";
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiOutlineMore,
} from "react-icons/ai";

const Post = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-sm p-4 mb-4 w-full"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{post.author.name}</h3>
                <p className="text-sm text-gray-500">{post.author.username}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <AiOutlineMore className="text-xl" />
            </button>
          </div>

          {/* Content */}
          <p className="mb-4">{post.content}</p>
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              className="w-full rounded-lg mb-4 h-[300px] object-cover"
            />
          )}

          {/* Stats */}
          <div className="flex items-center space-x-6 text-gray-500">
            <button className="flex items-center space-x-2">
              <AiOutlineHeart className="text-xl" />
              <span>{post.stats.likes}</span>
            </button>
            <button className="flex items-center space-x-2">
              <AiOutlineComment className="text-xl" />
              <span>{post.stats.comments}</span>
            </button>
            <button className="flex items-center space-x-2">
              <AiOutlineShareAlt className="text-xl" />
              <span>{post.stats.shares}</span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
