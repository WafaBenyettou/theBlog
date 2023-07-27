import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';


function Contact() {
  return (
    <div className=" min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-gray-200 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
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
              className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500"
              id="message"
              name="message"
              rows="6"
              required
            ></textarea>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
        <div className="mt-8">
          <span className="text-gray-500 mr-4">Follow us:</span>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaFacebookSquare className="text-2xl mx-2" />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <FaTwitterSquare className="text-2xl mx-2" />
          </a>
          <a href="#" className="text-red-600 hover:text-red-800">
            <FaYoutubeSquare className="text-2xl mx-2" />
          </a>
          {/* Add more social media links here */}
        </div>
      </div>
    </div>
  );
};


export default Contact