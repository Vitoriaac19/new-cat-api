import { useState } from "react";
import "./App.css";
import { CatsStyle } from "./assets/components/Cats/CatsStyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout/Layout";
import { HomeStyle } from "./assets/components/Home/HomeStyle";
import { AboutStyle } from "./assets/components/About/AboutStyle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomeStyle />} />
        <Route path="/cats" element={<CatsStyle />} />
        <Route path="/about" element={<AboutStyle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
