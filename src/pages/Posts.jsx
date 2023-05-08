import React, { useEffect, useRef, useState } from "react";
import "src/styles/App.css";
import Posts from "src/components/Posts/Posts";
import PostForm from "src/components/PostForm/PostForm";
import PostsFilter from "src/components/PostsFilter/PostsFilter";
import ModalWithOverlay from "src/components/UI/Modal/ModalWithOverlay/ModalWithOverlay";
import Button from "src/components/UI/Button/Button";
import { usePosts } from "src/hooks/usePosts";
import Loader from "src/components/UI/Loader/Loader";
import { useFetching } from "src/hooks/useFetching";
import { getPageCount } from "src/utils/pages";
import Pagination from "src/components/UI/Pagination/Pagination";
import PostService from "src/api/PostService";
import { useObserver } from "src/hooks/useObserver";
import Select from "src/components/UI/Select/Select";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });
  const [isModalActive, setIsModalActive] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isLoading, postsFetchingErr] = useFetching(async (limit, page) => {
    const res = await PostService.getAll(limit, page);
    setPosts([...posts, ...res.data]);
    const totalCount = res.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  useObserver(lastElement, isLoading, page < totalPages, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setIsModalActive(false);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function changePage(page) {
    setPage(page);
  }

  return (
      <div className="App">
        <hr style={{margin: '12px 0'}} />
        <PostsFilter filter={filter} setFilter={setFilter} />
        <Select
            value={limit}
            onChange={(value) => setLimit(value)}
            defaultValue="Кол-во элементов на странице"
            options={[
              {value: 5, name: '5'},
              {value: 10, name: '10'},
              {value: 25, name: '25'},
              {value: -1, name: 'Показать все'},
            ]}
        />
        {
          isLoading && <Loader />
        }
        <Posts remove={removePost} title="Список постов" posts={sortedAndSearchedPosts} />
        <div ref={lastElement} />
        {
          postsFetchingErr &&
          <h2 style={{textAlign: 'center'}}>Произошла ошибка: {postsFetchingErr}</h2>
        }
        <Button style={{margin: '12px 0'}} onClick={() => setIsModalActive(true)}>
          Создать пост
        </Button>
        <ModalWithOverlay isActive={isModalActive} setIsActive={setIsModalActive}>
          <PostForm create={createPost} />
        </ModalWithOverlay>
        <Pagination
            totalPages={totalPages}
            page={page}
            changePage={changePage}
        />
      </div>
  );
}

export default PostsPage;
