import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <p>Categories</p>
      <div className="Categories">
        <div className="Categories__items">
          <input type="checkbox" name="singleplayer" id="cbox0" />
          <label id="lbl0" htmlFor="cbox0">
            singleplayer
          </label>
        </div>
        <div className="Categories__items">
          <input type="checkbox" name="multiplayer" id="cbox1" />
          <label id="lbl1" htmlFor="cbox1">
            multiplayer
          </label>
        </div>
        <div className="Categories__items">
          <input type="checkbox" name="action" id="cbox2" />
          <label id="lbl2" htmlFor="cbox2">
            action
          </label>
        </div>
        <div className="Categories__items">
          <input type="checkbox" name="rpg" id="cbox3" />
          <label id="lbl3" htmlFor="cbox3">
            rpg
          </label>
        </div>
        <div className="Categories__items">
          <input type="checkbox" name="sandbox" id="cbox4" />
          <label id="lbl4" htmlFor="cbox4">
            sandbox
          </label>
        </div>
        <div className="Categories__items">
          <input type="checkbox" name="shooter" id="cbox5" />
          <label id="lbl5" htmlFor="cbox5">
            shooter
          </label>
        </div>
      </div>
    </div>
  );
};
