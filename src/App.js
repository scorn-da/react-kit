import React from "react";
import "src/styles/App.css";
import { BrowserRouter} from "react-router-dom";
import Navbar from "src/components/UI/Navbar/Navbar";
import AppRouter from "src/components/AppRouter/AppRouter";

function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
  );
}

export default App;
