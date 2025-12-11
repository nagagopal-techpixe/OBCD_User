import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AllPosts from "./layouts/AllPosts";
import PopupModal from './layouts/mailpop.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>} />
        <Route path="/all-posts" element={<AllPosts/>} />
        <Route path="/media/:mediaId" element={<PopupModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
