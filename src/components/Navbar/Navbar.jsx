import "./Navbar.css";
import { List } from "../List/List";
import { useState } from "react";

export const Navbar = () => {
  const [navItems, setNavItems] = useState([]);

  setTimeout(() => {
    setNavItems(["Home", "Games", "About Us", "Sign Up"]);
  }, 3500);

  return (
    <nav className="Navbar">
      <List navItems={navItems}></List>
    </nav>
  );
};
