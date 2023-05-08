import React, { useState } from "react";
import "src/styles/App.css";
import { AuthContext } from "src/context";
import { BrowserRouter } from "react-router-dom";
import Navbar from "src/components/UI/Navbar/Navbar";
import AppRouter from "src/components/AppRouter/AppRouter";

function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  return (
      <AuthContext.Provider value={{
        isAuthed,
        setIsAuthed,
      }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
