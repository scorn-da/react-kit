import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from "src/pages/About";
import PostsPage from "src/pages/Posts";
import Error from "src/pages/Error";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
};

export default AppRouter;