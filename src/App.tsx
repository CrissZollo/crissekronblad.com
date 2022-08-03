import React from "react";
import "./App.css";

import Home from "./components/home";
import Navbar from "./components/navbar";
import ProjectsCard from "./components/projectsCard";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ProjectsCard />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
