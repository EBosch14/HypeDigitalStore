import "./Home.css";
import { GameCard } from "../../GameCard/GameCard";
import { Sidebar } from "../../Sidebar/Sidebar";
import { Cart } from "../../Cart/Cart";

export const Home = () => {
  const cartCount = 7;
  return (
    <div className="Home">
      <h1>Home</h1>
      <Sidebar />
      <main className="Catalog">
        <GameCard />
      </main>
      <Cart/>
    </div>
  );
};
