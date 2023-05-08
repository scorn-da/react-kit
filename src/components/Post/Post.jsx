import React from 'react';
import styles from './Post.module.css'
import Button from "src/components/UI/Button/Button";
import { NavLink, Route } from "react-router-dom";

const Post = (props) => {
  return (
      <div key={props.post.id} className={styles.post}>
        <div className={styles.content}>
          <b>{props.post.id} {props.post.title}</b>
          <p>{props.post.body}</p>
        </div>
        <div className={styles.buttons}>
          <NavLink to={`/posts/${props.post.id}`}>
            <Button>Открыть</Button>
          </NavLink>
          <Button onClick={() => props.remove(props.post)}>Удалить</Button>
        </div>
      </div>
  );
};

export default Post;