import { useState, useEffect } from "react";
import { CategoriesContext, GameListContext } from "./Contexts";

export function GlobalContext({ children }) {
  const [gamesList, setGamesList] = useState([]);
  
  const filterCategories = (data) => {
    let auxCat = [];
    data.length > 1 &&
    data.forEach((game) => (auxCat = auxCat.concat(game.category)));
    
    auxCat = auxCat.filter((el, i) => {
      return auxCat.indexOf(el) === i;
    });
    
    let categories = [];
    
    auxCat.forEach((el) => {
      categories.push({
        catID: el,
        selected: false,
      });
    });
    categories.sort((a, b) => {
      if (a.catID > b.catID) {
        return 1;
      }
      if (a.catID < b.catID) {
        return -1;
      }
      return 0;
    });

    return categories;
  };
  const [checkedState, setCheckedState] = useState([]);
  
  useEffect(() => {
    const getGames = async () => {
      const resp = await fetch("/games.json");
      const data = await resp.json();
      setGamesList(data);
      setCheckedState(filterCategories(data))
    };
    setTimeout(() => {
      getGames();
    }, 1500);
    return setGamesList([]);
  }, []);

  return (
    <GameListContext.Provider value={gamesList}>
      <CategoriesContext.Provider value={{ checkedState, setCheckedState }}>
        {children}
      </CategoriesContext.Provider>
    </GameListContext.Provider>
  );
}
