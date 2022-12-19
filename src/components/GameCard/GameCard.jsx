import { Description } from "./Description";

export const GameCard = ({ gamesList }) => {
  const crash = "Crash-Bandicoot.png";
  return (
    <>
      {gamesList.map((el) => {
        return (
          <div key={el.id} className="GameCard">
            <figure className="GameCard__img">
              <img src={"/img/" + el.img} alt={el.title} />
            </figure>
            <Description title={el.title} price={el.price} />
          </div>
        );
      })}
    </>
  );
};
