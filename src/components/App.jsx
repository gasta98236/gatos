import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import NewCuriosity from "./NewCuriosity";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="Inicio" element={<Inicio />}/>
        </Routes>
        <Routes>
          <Route path="NewCuriosity" element={<NewCuriosity />}/>
        </Routes>
        <Routes>
        <Route path="CreateArea" element={<CreateArea /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>  
    </div>
  );
}

export default App;
