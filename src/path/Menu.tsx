import list from "../img/list.svg";
import bookmark from "../img/bookmark.svg";
import accountBox from "../img/account-box.svg";

import "../Profile.sass";
function Menu() {
  return (
    <div className="group-buttons">
      <div className="container-buttons">
        <button className="button">
          <img src={list} alt="" />
        </button>

        <button className="button">
          <img src={bookmark} alt="" />
        </button>

        <button className="button">
          <img src={accountBox} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Menu;
