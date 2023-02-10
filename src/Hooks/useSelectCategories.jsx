import { useContext } from "react";
import { CategoriesContext } from "../Context/Contexts";

export const useSelectCategories = () => {
  const {selectedCategories, setSelectedCategories} = useContext(CategoriesContext);

  const handleOnChange = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(
        selectedCategories.filter((e) => {
          return e !== cat;
        })
      );
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return {handleOnChange, selectedCategories}
};
