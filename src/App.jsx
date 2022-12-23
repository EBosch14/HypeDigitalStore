import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Pages/Home/Home";
import { Games } from "./components/Pages/Games/Games";
import { SingUp } from "./components/Pages/SignUp/SignUp";
import { AboutUs } from "./components/Pages/AboutUs/AboutUs";
import { GlobalContext } from "./Context/GlobalContext";
import { useState, useEffect } from "react";
import { GameDetails } from "./components/GameDetails/GameDetails";
import { ErrorPage } from "./components/Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter className="App">
      <GlobalContext>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/games" element={<Games />} />
          <Route exact path="/games/:gameId" element={<GameDetails />} />
          <Route exact path="/signup" element={<SingUp />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
