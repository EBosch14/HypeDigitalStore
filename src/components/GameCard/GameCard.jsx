import "./GameCard.css";
import { Loader } from "../Loader/Loader";
import { Description } from "./Description";
import { useGameList } from "../../Hooks/useGameList";
import { Link } from "react-router-dom";
import { useSelectCategories } from "../../Hooks/useSelectCategories";

export const GameCard = () => {
  const gamesList = useGameList();
  const { selectedCategories } = useSelectCategories();

  function categoryFilter(gameList) {
    let newGameList = [];
    selectedCategories.forEach((cat, i) => {
      gameList.forEach((game) => {
        if (game.category.includes(cat)) {
          newGameList.push(game);
        }
      });
    });
    if (newGameList.length === 0) {
      return gameList;
    } else {
      newGameList = newGameList.filter((el, i) => {
        return newGameList.indexOf(el) === i;
      })
      return newGameList;
    }
  }

  console.log(categoryFilter(gamesList))
  return (
    <>
      {gamesList.length > 0 ? (
        categoryFilter(gamesList).map((el) => {
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
    // <>
    //   {gamesList.length > 0 ? (
    //     gamesList.map((el) => {
    //       return (
    //         <div key={el.id} className="GameCard">
    //           <Link to={`/games/${el.id}`}>
    //             <figure className="GameCard__img">
    //               <img src={"/img/" + el.img} alt={el.title} />
    //             </figure>
    //           </Link>
    //           <Description title={el.title} price={el.price} />
    //         </div>
    //       );
    //     })
    //   ) : (
    //     <>
    //       <Loader />
    //       <Loader />
    //       <Loader />
    //       <Loader />
    //     </>
    //   )}
    // </>
  );
};
