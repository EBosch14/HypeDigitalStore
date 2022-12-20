import "./Navbar.css";
import { useState } from "react";
import { List } from "../List/List";

export const Navbar = () => {
  const [navItems, setNavItems] = useState([]);

  setTimeout(() => {
    setNavItems(["home", "games", "about Us", "sign Up"]);
  }, 1000);

  return (
    <nav className="Navbar">
      <List navItems={navItems}></List>
    </nav>
  );
};
