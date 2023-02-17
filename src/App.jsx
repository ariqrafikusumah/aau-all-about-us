import React from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import FooterEnd from "./components/footer-end";
import Navbar from "./components/navbar";
import _Footer from "./components/navbar";
import Home from "./layouts/home";
import NotFound from "./layouts/notfound";
import _Story from "./layouts/_Story";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/_Story" element={<_Story />} />
        <Route path="*" element={<NotFound />} />
      </Routes >
      <FooterEnd />
    </Router>
  )
}