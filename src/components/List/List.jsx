import { ItemList } from "../ItemList/ItemList";

export const List = ({ navItems }) => {
  if (navItems.length > 0) {
    return (
      <ul className="List">
        <ItemList navItems={navItems} />
      </ul>
    );
  } else {
    return <div>Cargando datos...</div>;
  }
};
