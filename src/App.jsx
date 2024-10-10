import { useState } from "react";
import Login from "./Components/Login/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

    // <div>
    //   <Login />
    // </div>
  );
}

export default App;
