import React, { useState } from 'react';
import { FaHeart, FaUsers, FaQuoteRight } from 'react-icons/fa';
import banner from '../assets/img/banner.png';

const Testimonial = ({ author, text, image, date }) => {
  return (
    <div className="bg-gray-100 p-4 mb-5 rounded-md shadow-md">
      <div className="flex items-center mb-3">
        <img
          src={image || 'https://via.placeholder.com/50'}
          alt="avatar"
          className="rounded-full w-12 h-12 mr-4"
        />
        <div>
          <p className="text-lg text-gray-800">{text}</p>
          <p className="text-sm text-gray-600">- {author}</p>
          {date && <p className="text-sm text-gray-600">{date}</p>}
        </div>
      </div>
      <div className="flex items-end justify-end">
        <FaQuoteRight className="text-2xl text-gray-400" />
      </div>
    </div>
  );
};

const About = () => {
  const [followers, setFollowers] = useState(5000);
  const [likes, setLikes] = useState(10000);

  return (
    <div className="mt-5 max-w-3xl mx-auto">
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

      <section className="mt-8">
        <h3 className="text-xl font-bold mb-4">Testimonials</h3>
        <Testimonial
          image="https://via.placeholder.com/50" // Replace with actual image URL
          author="John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget suscipit ipsum."
          date="July 28, 2023" // Replace with actual date
        />
        <Testimonial
          image="https://via.placeholder.com/50" // Replace with actual image URL
          author="Jane Smith"
          text="Phasellus eu tortor et elit euismod porta. Integer luctus vitae odio et venenatis."
          date="July 29, 2023" // Replace with actual date
        />
      </section>

      <section className="mt-8 p-6 bg-gray-200 rounded-md shadow-md">
        <h3 className="text-xl font-bold mb-4">Statistics</h3>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <FaUsers className="text-3xl text-gray-700" />
            <span className="text-lg font-semibold text-gray-800 ml-2">{followers}</span>
          </div>
          <div className="flex items-center">
            <FaHeart className="text-3xl text-red-600" />
            <span className="text-lg font-semibold text-gray-800 ml-2">{likes}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
