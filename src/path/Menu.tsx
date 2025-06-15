import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RegisterComp from "./Register";
import { useSelector } from "react-redux";
import list from "../img/list.svg";
import bookmark from "../img/bookmark.svg";
import accountBox from "../img/account-box.svg";
import "../Profile.sass";

function Menu() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state: any) => state.register?.username);

  function handleAccountButton() {
    if (user) {
      navigate("/account");
    } else {
      setShowModal(true);
    }
  }

  return (
    <div className="group-buttons">
      <div className="container-buttons">
        <button className="button">
          <img src={list} alt="" onClick={handleAccountButton} />
        </button>

        <button className="button">
          <img src={bookmark} alt="" onClick={handleAccountButton} />
        </button>

        <button className="button" onClick={handleAccountButton}>
          <img src={accountBox} alt="" />
        </button>
      </div>
      {showModal && <RegisterComp onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Menu;
