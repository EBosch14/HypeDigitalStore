import "./Home.css";
import { GameCard } from "../../GameCard/GameCard";
import { useState, useEffect } from "react";

export const Home = () => {
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const resp = await fetch("/games.json");
      const data = await resp.json();
      setGamesList(data);
    };
    getGames();
  }, []);

  return (
    <div className="Home">
      <h1>Home</h1>
      <main className="Catalog">
        <GameCard gamesList={gamesList} />
      </main>
      <div className="Cart">
        <i className="fa-solid fa-cart-shopping"><span>1</span></i>
      </div>
    </div>
  );
};
