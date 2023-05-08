import PostsPage from "src/pages/Posts";
import About from "src/pages/About";
import PostPage from "src/pages/Post";
import Error from "src/pages/Error";
import Login from "src/pages/Login";

export const privateRoutes = [
  {path: '/posts/:id', element: PostPage},
  {path: '', element: PostsPage, index: true},
  {path: '/about', element: About},
  {path: '/posts', element: PostsPage},
  {path: '*', element: Error},
];

export const publicRoutes = [
  {path: '*', element: Login},
];
