import { GamesListContext } from "../Context/GamesListContext";
import { useContext } from "react";

export const useGameList = () => useContext(GamesListContext);