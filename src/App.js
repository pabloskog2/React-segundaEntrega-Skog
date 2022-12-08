import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListConteiner";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts/:id" element={<ItemDetailContainer />} />
          <Route exact path="/posts" element={<ItemListContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
