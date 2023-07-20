import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalAPI from '../Services/GlobalAPI';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import logo from "../assets/img/logo.png";

function BlogDetails() {
  const {id} = useParams();
  const [post, setPost]=useState([])

  useEffect(()=>{
    console.log("id", id)
    getBlogById();
  },[])

  const getBlogById=()=>{
    GlobalAPI.getPostById(id).then(resp=>{
    
      const item = resp.data.data;
      const result = {
        id: item.id,
        title: item.attributes.title,
        desc: item.attributes.description,
        tag: item.attributes.tag,
        coverImage: item.attributes.coverImage.data.attributes.url,
      };
      setPost(result)
      console.log("res", result);
    }
    )
  
    }
  
  return (
    <div className='px-6 md:px-20 lg:px-56 mt-10'>
    <h3 className='text-blue-500 text-[12px]'>{post.tag}</h3>
    <h3 className='text-[23px] font-bold'>{post.title}</h3>
    <div className='flex items-center mt-5'>
        <img src={logo}
        className='w-[35px] rounded-full'/>
        <div className='ml-2'>
            <h3 className='font-bold text-[12px]'>theBlog</h3>
            <h3 className='text-gray-500 text-[10px]'>24 Sept 2024</h3>
        </div>
    </div>
    <img src={post.coverImage} className='rounded-2xl mt-5 mb-5 w-full'/>
   
    <ReactMarkdown children={post.desc} 
    escapeHtml={false} className='leading-9' />
</div>
  )
}

export default BlogDetails