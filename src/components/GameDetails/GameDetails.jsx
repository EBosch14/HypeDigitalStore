import { useParams } from "react-router-dom";
import { useGameList } from "../../Hooks/useGameList";
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";

export const GameDetails = () => {
  const { gameId } = useParams();
  const gamesList = useGameList();

  const gameDescription = () => {
    const game = gamesList.find((el) => el.id == gameId);
    return game ? (
      <div>
        <div>Title: {game.title}</div>
        <div>
          Category: {game.category.join(" - ")}
        </div>
        <div>Price: {game.price}</div>
      </div>
    ) : (
      <ErrorPage/>
    );
  };

  const gameWaiting = () => {
    return <div>Waiting</div>;
  };
  return <div>{gamesList.length ? gameDescription() : gameWaiting()}</div>;
};
