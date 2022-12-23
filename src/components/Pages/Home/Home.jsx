import "./Home.css";
import { GameCard } from "../../GameCard/GameCard";
import { Sidebar } from "../../Sidebar/Sidebar";

export const Home = () => {

  const cartCount = 7;
  return (
    <div className="Home">
      <h1>Home</h1>
      <Sidebar/>
      <main className="Catalog">
        <GameCard/>
      </main>
      <div className="Cart">
        <i className="fa-solid fa-cart-shopping">
          <span>{cartCount}</span>
        </i>
      </div>
    </div>
  );
};
