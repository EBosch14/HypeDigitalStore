import "./Games.css";
import { GameCard } from "../../GameCard/GameCard";
import { useGameList } from "../../../Hooks/useGameList";
import {Cart} from "../../Cart/Cart"

export const Games = () => {

  const gamesList = useGameList();

  return (
    <div className="Game">
      <h1>Games Catalog</h1>
      <main className="Catalog">
        <GameCard gamesList={gamesList} />
      </main>
      <Cart/>
    </div>
  );
};
