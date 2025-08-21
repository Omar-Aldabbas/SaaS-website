import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import './index.css';
import { BackgroundEffect } from "./components/BackgroundEffect";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <BackgroundEffect />
      <Navbar /> {/* Global Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
