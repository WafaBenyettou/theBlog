import React, { useEffect } from 'react';
import GlobalAPI from '../Services/GlobalAPI';

function Post() {
  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    GlobalAPI.getPost()
      .then(resp => {
        console.log(resp.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>Post</div>
  );
}

export default Post;
