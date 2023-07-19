import React from 'react';
import logo from "../assets/img/logo.png";

function Blogs({ posts }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32 gap-6'>
      {posts.map(post => (
        <div className='cursor-pointer' key={post.id}>
          <div>
            {/* Add a CSS class to the image for consistent dimensions */}
            <img src={post.coverImage} className='rounded-2xl object-cover w-full h-40 md:h-60 lg:h-80' />
          </div>
          <div>
            <h3 className='text-blue-500 mt-3'>{post.tag}</h3>
            <h3 className='font-bold mt-3'>{post.title}</h3>
            <h3 className='line-clamp-3 text-gray-400 mt-3'>{post.desc}</h3>
            <div className='flex items-center mt-5'>
              <img src={logo} className='w-[35px] rounded-full' />
              <div className='ml-2'>
                <h3 className='font-bold text-[12px]'>theBlog</h3>
                <h3 className='text-gray-500 text-[10px]'>24 Sept 2024</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
