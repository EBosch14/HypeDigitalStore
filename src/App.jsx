import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Pages/Home/Home";
import { Games } from "./components/Pages/Games/Games";
import { SingUp } from "./components/Pages/SignUp/SignUp";
import { AboutUs } from "./components/Pages/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/games" element={<Games />} />
        <Route exact path="/signup" element={<SingUp />} />
        <Route exact path="/aboutus" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
