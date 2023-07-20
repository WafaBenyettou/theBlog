import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Post from '../Components/Post';
import Blogs from '../Components/Blogs';
import Footer from '../Components/Footer';
import GlobalAPI from '../Services/GlobalAPI';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    GlobalAPI.getPost()
      .then(resp => {
        const result = resp.data.data.map(item => ({
          id: item.id,
          title: item.attributes.title,
          desc: item.attributes.description,
          tag: item.attributes.tag,
          coverImage: item.attributes.coverImage.data.attributes.url,
        }));
        setPosts(result);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const filterPost=(tag)=>{
    if(tag=='All')
    {
      setPost(orgPost);
      return ;
    }
    const result=orgPost.filter(item=>item.tag==tag);
    setPost(result);
  }

  return (
    <div>
   
      <Search selectedTag={(tag)=>filterPost(tag)}/>
    
      <Post posts={posts} />
      <Blogs posts={posts}/>
      <Footer />
    </div>
  );
}

export default Home;
