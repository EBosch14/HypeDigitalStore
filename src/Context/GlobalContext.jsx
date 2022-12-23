import { useState, useEffect } from "react";
import { GameListContext } from "./GameListContext";

export const GlobalContext = ({children}) => {

  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const resp = await fetch("/games.json");
      const data = await resp.json();
      setGamesList(data);
    };
    setTimeout(() => {
      getGames();
    }, 1500);
    return setGamesList([]);
  }, []);

  return(
    <GameListContext.Provider value={gamesList}>
      {children}
    </GameListContext.Provider>
  )
}