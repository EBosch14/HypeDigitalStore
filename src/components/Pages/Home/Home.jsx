import "./Home.css";
import { GameCard } from "../../GameCard/GameCard";
import { Sidebar } from "../../Sidebar/Sidebar";

export const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <Sidebar/>
      <main className="Catalog">
        <GameCard/>
      </main>
      <div className="Cart">
        <i className="fa-solid fa-cart-shopping">
          <span>1</span>
        </i>
      </div>
    </div>
  );
};
