import { useEffect } from "react";
import { useCategories } from "../../Hooks/useCategories";

export const Categories = () => {
  const {handleOnChange, checkedState} = useCategories();
  useEffect(() => console.log(checkedState), [checkedState]);

  return (
    <div className="Categories">
      {checkedState.map((category, i) => {
        return (
          <div className="Categories__items" key={category.catID}>
            <input
              checked={checkedState.selected}
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
