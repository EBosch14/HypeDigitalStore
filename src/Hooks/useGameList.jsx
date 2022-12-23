import { useContext } from "react";
import { GameListContext } from "../Context/GameListContext";

export const useGameList = () => useContext(GameListContext);