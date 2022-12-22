import { Loader } from "../Loader/Loader";
import { Description } from "./Description";
import { useGameList } from "../../Hooks/useGameList";

export const GameCard = () => {
  
  const gamesList = useGameList();

  return (
    <>
      {gamesList ? (
        gamesList.map((el) => {
          return (
            <div key={el.id} className="GameCard">
              <figure className="GameCard__img">
                <img src={"/img/" + el.img} alt={el.title} />
              </figure>
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
