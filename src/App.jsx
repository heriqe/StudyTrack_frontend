import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NovaTarefa from "./pages/NovaTarefa";
import Lembretes from "./pages/Lembretes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nova" element={<NovaTarefa />} />
        <Route path="/lembretes" element={<Lembretes />} />
      </Routes>
    </Router>
  );
}
