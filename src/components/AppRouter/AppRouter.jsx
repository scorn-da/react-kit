import React from 'react';
import { Route, Routes } from "react-router-dom";
import { routes } from "src/router";

const AppRouter = () => {
  function getRenderElement (component) {
    const Element = component;
    return <Element />
  }

  return (
      <Routes>
        {routes.map((route) =>
            route.index
                ? <Route index element={getRenderElement(route.element)} key={route.path} />
                : <Route path={route.path} element={getRenderElement(route.element)} key={route.path} />
        )}
      </Routes>
  );
};

export default AppRouter;