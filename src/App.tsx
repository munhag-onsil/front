import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./pages/Home/containers/HomeContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
