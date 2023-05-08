import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "src/router";
import { AuthContext } from "src/context";

const AppRouter = () => {
  const { isAuthed, setIsAuthed } = useContext(AuthContext);

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