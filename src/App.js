import React, { useEffect, useState } from "react";
import "src/styles/App.css";
import { AuthContext } from "src/context";
import { BrowserRouter } from "react-router-dom";
import Navbar from "src/components/UI/Navbar/Navbar";
import AppRouter from "src/components/AppRouter/AppRouter";

function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuthed(true);
      localStorage.setItem('auth', 'true');
    }
    setIsLoading(false);
  }, []);

  return (
      <AuthContext.Provider value={{
        isAuthed,
        setIsAuthed,
        isLoading,
      }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
