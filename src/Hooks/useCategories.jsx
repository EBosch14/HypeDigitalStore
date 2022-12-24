import { useContext } from "react";
import { CategoriesContext } from "../Context/Contexts";


export const useCategories = () => {
  const { checkedState, setCheckedState } = useContext(CategoriesContext);

  const handleOnChange = (category) => {
    const update = checkedState.map((el) => {
      if (el.catID == category.catID) {
        el.selected = !el.selected;
      }
      return el;
    });
    setCheckedState(update);
  };

  return {handleOnChange, checkedState};
};
