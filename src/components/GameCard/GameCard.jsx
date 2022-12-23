import "./GameCard.css";
import { Loader } from "../Loader/Loader";
import { Description } from "./Description";
import { useGameList } from "../../Hooks/useGameList";
import { Link } from "react-router-dom";

export const GameCard = () => {
  const gamesList = useGameList();
  return (
    <>
      {gamesList.length > 0 ? (
        gamesList.map((el) => {
          return (
            <div key={el.id} className="GameCard">
              <Link to={`/games/${el.id}`}>
                <figure className="GameCard__img">
                  <img src={"/img/" + el.img} alt={el.title} />
                </figure>
              </Link>
              <Description title={el.title} price={el.price} />
            </div>
          );
        })
      ) : (
        <>
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </>
      )}
    </>
  );
};
