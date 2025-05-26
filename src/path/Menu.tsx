import list from "../img/list.svg";
import bookmark from "../img/bookmark.svg";
import accountBox from "../img/account-box.svg";
import { useNavigate } from "react-router-dom";

import "../Profile.sass";
function Menu() {
  const navigate = useNavigate();

  function handleAccountButton() {
    navigate("/account");
  }

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
          <img src={accountBox} alt="" onClick={handleAccountButton} />
        </button>
      </div>
    </div>
  );
}

export default Menu;
