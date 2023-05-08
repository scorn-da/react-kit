import PostsPage from "src/pages/Posts";
import About from "src/pages/About";
import PostPage from "src/pages/Post";
import Error from "src/pages/Error";

export const routes = [
  {path: '/posts/:id', element: PostPage, index: false},
  {path: '', element: PostsPage, index: true},
  {path: '/about', element: About, index: false},
  {path: '/posts', element: PostsPage, index: false},
  {path: '*', element: Error, index: false},
]