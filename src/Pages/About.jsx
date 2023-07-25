import React, { useState } from 'react';
import banner from '../assets/img/banner.png';

const Testimonial = ({ author, text }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <p className="text-lg text-gray-800">{text}</p>
      <p className="text-sm mt-2 text-gray-600">- {author}</p>
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
    <div className="bg-white p-8 shadow-md rounded-lg max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
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
        <div className="flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-4"
            onClick={handleFollow}
          >
            Follow
          </button>
          <span className="text-lg font-semibold text-gray-800">Followers: {followers}</span>
        </div>
        <div className="flex items-center mt-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-4"
            onClick={handleLike}
          >
            Like
          </button>
          <span className="text-lg font-semibold text-gray-800">Likes: {likes}</span>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Testimonials</h3>
        <Testimonial
          author="John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget suscipit ipsum."
        />
        <Testimonial
          author="Jane Smith"
          text="Phasellus eu tortor et elit euismod porta. Integer luctus vitae odio et venenatis."
        />
      </div>
    </div>
  );
};

export default About;
