import React, { useEffect, useState } from "react";
import "src/styles/App.css";
import Posts from "src/components/Posts/Posts";
import PostForm from "src/components/PostForm/PostForm";
import PostsFilter from "src/components/PostsFilter/PostsFilter";
import ModalWithOverlay from "src/components/UI/Modal/ModalWithOverlay/ModalWithOverlay";
import Button from "src/components/UI/Button/Button";
import { usePosts } from "src/hooks/usePosts";
import PostService from "src/api/PostService";
import Loader from "src/components/UI/Loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });
  const [isModalActive, setIsModalActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsLoading(false);
  }

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setIsModalActive(false);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <hr style={{margin: '12px 0'}} />
      <PostsFilter filter={filter} setFilter={setFilter} />
      {
        isLoading
            ? <Loader />
            : <Posts remove={removePost} title="Список постов" posts={sortedAndSearchedPosts} />
      }
      <Button style={{margin: '12px 0'}} onClick={() => setIsModalActive(true)}>Создать пост</Button>
      <ModalWithOverlay isActive={isModalActive} setIsActive={setIsModalActive}>
        <PostForm create={createPost} />
      </ModalWithOverlay>
    </div>
  );
}

export default App;
