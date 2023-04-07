import React from 'react';
import styles from './Post.module.css'
import Button from "src/components/UI/Button/Button";

const Post = (props) => {

  return (
      <div key={props.post.id} className={styles.post}>
        <div>
          <b>{props.post.id} {props.post.title}</b>
          <p>{props.post.text}</p>
        </div>
        <div>
          <Button>Удалить</Button>
        </div>
      </div>
  );
};

export default Post;