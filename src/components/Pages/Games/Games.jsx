import "./Games.css";
import { GameCard } from "../../GameCard/GameCard";
import { useGameList } from "../../../Hooks/useGameList";
export const Games = () => {

  const gamesList = useGameList();

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
