import { Categories } from "../Categories/Categories";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <p>Categories</p>
      <Categories/>
    </div>
  );
};
