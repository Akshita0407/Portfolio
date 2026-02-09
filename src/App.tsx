import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ReactLenis } from "lenis/react";
import Portfolio from "./page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ReactLenis root />
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
