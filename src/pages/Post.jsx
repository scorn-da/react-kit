import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useFetching } from "src/hooks/useFetching";
import PostService from "src/api/PostService";
import Loader from "src/components/UI/Loader/Loader";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const res = await PostService.getById(id);
    setPost(res.data);
  });
  const [fetchComments, areComsLoading, comError] = useFetching(async (id) => {
    const res = await PostService.getPostsComments(id);
    setComments(res.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, []);

  useEffect(() => {
    fetchComments(params.id);
  }, []);

  return (
      <div style={{width: '80%', margin: '0 auto', padding: '12px'}}>
        {
          isLoading
              ? <Loader />
              : <>
                <h1>{post.id} {post.title}</h1>
                <p>{post.body}</p>
              </>
        }
        {
          areComsLoading
              ? <Loader />
              : comments && <ul>
            {comments.map((com) => {
              return (
                  <li key={com.id}>
                    <b>{com.name}</b>
                    <span>{com.body}</span>
                  </li>
              )
            })}
          </ul>
        }
      </div>
  );
};

export default PostPage;