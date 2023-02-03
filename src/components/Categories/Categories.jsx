import { useEffect } from "react";
import { useCategories } from "../../Hooks/useCategories";

export const Categories = () => {
  const {handleOnChange, categories} = useCategories();
  useEffect(() => console.log(categories), [categories]);

  return (
    <div className="Categories">
      {categories.map((category, i) => {
        return (
          <div className="Categories__items" key={category.catID}>
            <input
              checked={categories.selected}
              onChange={() => handleOnChange(category)}
              type="checkbox"
              name={category.catID}
              id={`cbox${i}`}
            />
            <label id={`lbl${i}`} htmlFor={`cbox${i}`}>
              {category.catID}
            </label>
          </div>
        );
      })}
    </div>
  );
};
