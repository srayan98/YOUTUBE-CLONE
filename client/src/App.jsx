import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Channel from "./pages/Channel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/channel/:id" element={<Channel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
