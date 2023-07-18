import React from 'react';

function Post({ posts }) {
  
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <img src={post.coverImage} alt={post.title} />
         <div>
          <h4>{post.tag}</h4>
          <h2>{post.title}</h2>
          <p>{post.desc}</p>
          </div>
      
        </div>
      ))}
    </div>
  );
}

export default Post;
