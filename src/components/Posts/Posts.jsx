import React from 'react';
import Post from "src/components/Post/Post";

const Posts = ({ title, posts }) => {
  return (
      <>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        {
          posts.map((post, index) =>
              <Post key={post.id} number={index + 1} post={post} />
          )
        }
      </>
  );
};

export default Posts;