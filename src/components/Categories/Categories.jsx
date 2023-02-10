import { useCategories } from "../../Hooks/useCategories";
import { useSelectCategories } from "../../Hooks/useSelectCategories";

export const Categories = () => {
  const { categories } = useCategories();
  const { selectedCategories, handleOnChange } = useSelectCategories();

  return (
    <div className="Categories">
      {categories.map((category, i) => {
        return (
          <div className="Categories__items" key={category + i}>
            <input
              checked={selectedCategories?.includes(category)}
              onChange={() => handleOnChange(category)}
              type="checkbox"
              name={category}
              id={`cbox${i}`}
            />
            <label id={`lbl${i}`} htmlFor={`cbox${i}`}>
              {category}
            </label>
          </div>
        );
      })}
    </div>
  );
};
