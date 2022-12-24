import { useContext } from "react";
import { GameListContext } from "../Context/Contexts";

export const useGameList = () => useContext(GameListContext);