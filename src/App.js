import React, { useState } from "react";
import "src/styles/App.css";
import Posts from "src/components/Posts/Posts";
import PostForm from "src/components/PostForm/PostForm";
import Select from "src/components/UI/Select/Select";
import Input from "src/components/UI/Input/Input";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', text: 'JavaScript — ЯП',},
    {id: 2, title: 'Java', text: 'Java — ЯП',},
    {id: 3, title: 'Python', text: 'Python — ЯП',},
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function sortPosts(sort) {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '12px 0'}} />
      <div>
        <Input placeholder="Поиск..." />
        <Select
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Сортировка"
            options={[
                {
                  value: 'title',
                  name: 'По названию',
                },
                {
                  value: 'text',
                  name: 'По описанию',
                },
            ]}
        />
      </div>
      {
        posts.length > 0
            ? <Posts remove={removePost} title="Список постов" posts={posts} />
            : <h1 style={{textAlign: 'center'}}>Постов пока нет</h1>
      }
    </div>
  );
}

export default App;
