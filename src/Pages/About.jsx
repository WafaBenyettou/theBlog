import React, { useState } from 'react';
import { FaHeart, FaUsers } from 'react-icons/fa';
import banner from '../assets/img/banner.png';

const Testimonial = ({ author, text, image }) => {
  return (
    <div className="bg-gray-500 p-4 mb-5 rounded-md shadow-md">
      <img
        src={image || 'https://via.placeholder.com/50'}
        alt="avatar"
        className="rounded-full w-12 h-12 mr-4"
      />
      <p className="text-lg text-gray-100">{text}</p>
      <p className="text-sm mt-2 text-gray-100">- {author}</p>
    </div>
  );
};

const About = () => {
  const [followers, setFollowers] = useState(5000);
  const [likes, setLikes] = useState(10000);

  const handleFollow = () => {
    setFollowers((prevFollowers) => prevFollowers + 1);
  };

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className="mt-5 max-w-xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">About Us</h2>
      <img
        src={banner}
        alt="Company Logo"
        className="rounded-2xl object-cover w-full h-40 md:h-60 lg:h-80 mb-10"
      />
      <p className="text-lg text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget suscipit ipsum. Vivamus
        ut justo justo. Sed sed velit nec purus feugiat ullamcorper vitae id mauris. Duis ultrices
        odio ac erat blandit, vel varius orci facilisis.
      </p>
      <p className="text-lg mt-4 text-gray-800">
        Phasellus eu tortor et elit euismod porta. Integer luctus vitae odio et venenatis. Nam
        aliquet ipsum vel ipsum eleifend, quis interdum arcu dictum. Sed et luctus odio, ac
        lobortis turpis. Sed nec odio arcu.
      </p>
      <p className="text-lg mt-4 text-gray-800">
        Proin dapibus neque et fermentum porttitor. Sed quis dui a mauris aliquet fringilla sit
        amet ut odio. Nam rhoncus tellus vel metus euismod, ac vestibulum elit dapibus.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Statistics</h3>
        <div className="flex items-center">
          <span className="text-lg font-semibold text-gray-800 flex items-center mr-4">
            <FaUsers className="inline-block mr-2" />
            {followers} Followers
          </span>
          <span className="text-lg font-semibold text-gray-800 flex items-center">
            <FaHeart className="inline-block mr-2" />
            {likes} Likes
          </span>
        </div>
        <div className="mt-4">
          <button
            onClick={handleFollow}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Follow
          </button>
          <button
            onClick={handleLike}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ml-4"
          >
            Like
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Testimonials</h3>
        <Testimonial
          image="https://via.placeholder.com/50" // Replace with actual image URL
          author="John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget suscipit ipsum."
        />
        <Testimonial
          image="https://via.placeholder.com/50" // Replace with actual image URL
          author="Jane Smith"
          text="Phasellus eu tortor et elit euismod porta. Integer luctus vitae odio et venenatis."
        />
      </div>
    </div>
  );
};

export default About;
