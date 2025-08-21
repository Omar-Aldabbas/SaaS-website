import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import './index.css';
import { BackgroundEffect } from "./components/BackgroundEffect";
import { Footer } from "./components/Footer";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import { FAQ } from "./pages/FAQ";
import { Signup } from "./pages/Signup";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <BackgroundEffect />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
