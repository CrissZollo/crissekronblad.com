import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return (
    <>
      <h2>Linus må vara gay</h2>
      <img
        src="https://www.dexerto.com/wp-content/uploads/2021/04/28/el-risitas-spanish-laughing-guy-meme.jpg"
        alt="laughing_img"
        style={{ height: 500, width: 700 }}
      />
    </>
  );
}

function Users() {
  return <h2>Users</h2>;
}
