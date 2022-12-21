import "./Home.css";
import { GameCard } from "../../GameCard/GameCard";
import { useState, useEffect } from "react";
import { Sidebar } from "../../Sidebar/Sidebar";

export const Home = () => {
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const resp = await fetch("/games.json");
      const data = await resp.json();
      setGamesList(data);
    };
    setTimeout(() => {
      getGames();
    }, 1500);
    return setGamesList(null);
  }, []);

  return (
    <div className="Home">
      <h1>Home</h1>
      <Sidebar/>
      <main className="Catalog">
        <GameCard gamesList={gamesList} />
      </main>
      <div className="Cart">
        <i className="fa-solid fa-cart-shopping">
          <span>1</span>
        </i>
      </div>
    </div>
  );
};
