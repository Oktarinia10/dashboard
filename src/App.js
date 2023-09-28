import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/dashboard/home";
import DataKatalog from "./pages/dataKatalog/index";
import TambahKatalog from "./pages/dataKatalog/tambah";
import EditKatalog from "./pages/dataKatalog/edit";
import './App.css';

import Login from "./pages/login";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Home/>}></Route>
          <Route path='/katalog' element={<DataKatalog/>}></Route>
          <Route path='/tambah' element={<TambahKatalog/>}></Route>
          <Route path='/edit/:id_product' element={<EditKatalog/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
