import { useContext } from "react";
import { CategoriesContext } from "../Context/Contexts";

export const useCategories = () => useContext(CategoriesContext);