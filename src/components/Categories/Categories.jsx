import { useEffect } from "react";
import { useState } from "react";

export const Categories = () => {
  const categories = [
    {
      name: "action",
      select: false,
    },
    {
      name: "adventure",
      select: false,
    },
    {
      name: "arcade",
      select: false,
    },
    {
      name: "figthing",
      select: false,
    },
    {
      name: "fps",
      select: false,
    },
    {
      name: "horror",
      select: false,
    },
    {
      name: "multiplayer",
      select: false,
    },
    {
      name: "rpg",
      select: false,
    },
    {
      name: "sandbox",
      select: false,
    },
    {
      name: "shooter",
      select: false,
    },
    {
      name: "singleplayer",
      select: false,
    },
    {
      name: "sport",
      select: false,
    },
    {
      name: "survival",
      select: false,
    },
  ];

  const [checkedState, setCheckedState] = useState(categories);

  const handleOnChange = (category) => {
    const update = checkedState.map((el) => {
      if (el.name == category.name) {
        el.select = !el.select;
      }
      return el;
    });
    setCheckedState(update);
  };

  useEffect(() => console.log(checkedState), [checkedState]);

  return (
    <div className="Categories">
      {categories.map((category, i) => {
        return (
          <div className="Categories__items" key={category.name}>
            <input
              checked={checkedState.select}
              onChange={() => handleOnChange(category)}
              type="checkbox"
              name={category.name}
              id={`cbox${i}`}
            />
            <label id={`lbl${i}`} htmlFor={`cbox${i}`}>
              {category.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};
