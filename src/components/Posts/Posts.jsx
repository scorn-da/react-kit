import React from 'react';
import Post from "src/components/Post/Post";

const Posts = ({ title, posts, remove }) => {

  if (posts.length <= 0) {
    return (
        <h1 style={{textAlign: 'center'}}>{title}</h1>
    );
  }

  return (
      <>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        {
          posts.map((post, index) =>
            <Post remove={remove} key={post.id} number={index + 1} post={post}/>
          )
        }
      </>
  );
};

export default Posts;