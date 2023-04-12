import React from 'react';
import Post from "src/components/Post/Post";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Posts = ({ title, posts, remove }) => {

  if (posts.length <= 0) {
    return (
        <h1 style={{textAlign: 'center'}}>{title}</h1>
    );
  }

  return (
      <>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        <TransitionGroup>
          {
            posts.map((post, index) =>
              <CSSTransition
                  key={post.id}
                  timeout={500}
                  classNames="post"
              >
                <Post remove={remove} number={index + 1} post={post}/>
              </CSSTransition>
            )
          }
        </TransitionGroup>
      </>
  );
};

export default Posts;