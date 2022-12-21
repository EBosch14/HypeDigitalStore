import "./Games.css";
import { GameCard } from "../../GameCard/GameCard";
import { useState, useEffect } from "react";

export const Games = () => {
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const resp = await fetch("/games.json");
      const data = await resp.json();
      setGamesList(data);
    };
    setTimeout(() => {
      getGames();
    }, 3000);
    return setGamesList(null);
  }, []);

  return (
    <div className="Game">
      <h1>Games Catalog</h1>
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
