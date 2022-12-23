import { Link } from "react-router-dom";

export const ItemList = ({ navItems }) => {
  return (
    <>
      {navItems.map((el, i) => (
        <li className="ItemList" key={i}>
          <Link className="Navbar__link" to={`/${el.toLowerCase().replace(/\s/g, '')}`}>{el.toUpperCase()}</Link>
        </li>
      ))}
    </>
  );
};
