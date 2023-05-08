import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "src/router";
import { AuthContext } from "src/context";
import Loader from "src/components/UI/Loader/Loader";

const AppRouter = () => {
  const { isAuthed, setIsAuthed, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  }

  function getRenderElement(component) {
    const Element = component;
    return <Element />
  }

  return (
      <>
        {
          isAuthed
              ? <Routes>
                  {privateRoutes.map((route) =>
                      route.index
                          ? <Route index element={getRenderElement(route.element)} key={route.path} />
                          : <Route path={route.path} element={getRenderElement(route.element)} key={route.path} />
                  )}
                </Routes>
              : <Routes>
                {publicRoutes.map((route) =>
                    route.index
                        ? <Route index element={getRenderElement(route.element)} key={route.path} />
                        : <Route path={route.path} element={getRenderElement(route.element)} key={route.path} />
                )}
              </Routes>
        }
      </>
  );
};

export default AppRouter;