import React from 'react';
import styles from './style.module.css'

const Post = (props) => {

  return (
      <div key={props.post.id} className={styles.post}>
        <div>
          <b>{props.post.id} {props.post.title}</b>
          <p>{props.post.text}</p>
        </div>
        <div>
          <button>Удалить</button>
        </div>
      </div>
  );
};

export default Post;