import React, { useState } from 'react';
import Input from "src/components/UI/Input/Input";
import Button from "src/components/UI/Button/Button";

const PostForm = ({ create, ...props }) => {
  const [post, setPost] = useState({
    title: '',
    text: '',
  });

  function addPost(evt) {
    evt.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: '', text: '' });
  }

  return (
      <form>
        <Input type="text" placeholder="Название поста" value={post.title}
               onChange={(evt) => setPost({ ...post, title: evt.target.value })}/>
        <Input type="text" placeholder="Описание" value={post.text}
               onChange={(evt) => setPost({ ...post, text: evt.target.value })}/>
        <Button onClick={addPost}>Создать пост</Button>
      </form>
  );
};

export default PostForm;