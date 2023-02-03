import { useContext } from "react";
import { CategoriesContext } from "../Context/Contexts";


export const useCategories = () => {
  const { categories, setCategories } = useContext(CategoriesContext);

  const handleOnChange = (category) => {
    const update = categories.map((el) => {
      if (el.catID == category.catID) {
        el.selected = !el.selected;
      }
      return el;
    });
    setCategories(update);
  };

  return {handleOnChange, categories};
};
