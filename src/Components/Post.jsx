import React from 'react';
import logo from "../assets/img/logo.png";
import { useNavigate } from 'react-router-dom';
function Post({ posts }) {
 
  const firstPost = posts.length > 0 ? posts[0] : null;
  const navigate=useNavigate();
  return (
   
    <div>

      {firstPost && (
        <div className='grid grid-cols-1 cursor-pointer
        md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8' key={firstPost.id} onClick={()=>navigate('blog/'+firstPost.id)}>

          <img src={firstPost.coverImage} className='rounded-2xl object-cover w-full h-full' />
          <div>
            <h4 className='text-blue-500'>{firstPost.tag}</h4>
            <h2 className='text-[23px] font-bold mt-5'>{firstPost.title}</h2>
            <h4 className='line-clamp-6 text-gray-400 mt-5'>{firstPost.desc}</h4>
            <div className='flex items-center mt-5'>
              <img src={logo} className='w-[50px] rounded-full' />
              <div className='ml-2'>
                <h3 className='font-bold '>TheBlog</h3>
                <h3 className='text-gray-500'>24 Sept 2024</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
