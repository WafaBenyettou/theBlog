// src/App.js
import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact= () => {
  return (
    <div className=" from-blue-500 via-purple-500 to-pink-500 min-h-screen p-8">
      <div className=" bg-gradient-to-br max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-full px-4 py-2 bg-gray-200 rounded-lg resize-none focus:outline-none focus:bg-white"
              id="message"
              name="message"
              rows="6"
              required
            ></textarea>
          </div>
          <div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full focus:outline-none"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
        <div className="mt-8 flex justify-center">
          <a href="#" className="text-blue-400 hover:text-blue-600 mx-4">
            <FaFacebook className="text-4xl" />
          </a>
          <a href="#" className="text-blue-300 hover:text-blue-500 mx-4">
            <FaTwitter className="text-4xl" />
          </a>
          <a href="#" className="text-red-400 hover:text-red-600 mx-4">
            <FaYoutube className="text-4xl" />
          </a>
          {/* Add more social media links here */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
