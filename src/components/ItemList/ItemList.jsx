export const ItemList = ({ navItems }) => {
  return (
    <>
      {navItems.map((el, i) => (
        <li className="ItemList" key={i}>
          <a href="#">{el}</a>
        </li>
      ))}
    </>
  );
};
