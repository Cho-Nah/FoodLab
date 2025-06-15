import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Register } from "../app/slices/RegisterSlice";
import { useNavigate } from "react-router-dom";
import { saveUserToIndexedDB } from "../../User";
import "../ModalWindow.sass";

type RegisterProps = {
  onClose?: () => void;
};

function RegisterComp({ onClose }: RegisterProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  function handleRegister() {
    if (!username.trim() || !password.trim() || !email.trim()) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    const user = { username, password, email };

    dispatch(Register(user));
    localStorage.setItem("user", JSON.stringify(user));
    saveUserToIndexedDB(user)
      .then(() => {
        onClose?.();
        navigate("/account");
      })
      .catch((error) => {
        console.error("Ошибка при сохранении в IndexedDB:", error);
      });
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-window">
        <div className="container-modal">
          <h1 style={{ textAlign: "center" }}>Регистрация</h1>

          <div className="container-input">
            <label htmlFor="">Username</label>
            <input
              style={{ height: "1.5rem" }}
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>

          <div className="container-input">
            <label htmlFor="">Password</label>
            <input
              style={{ height: "1.5rem" }}
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className="container-input">
            <label htmlFor="">Email</label>
            <input
              style={{ height: "1.5rem" }}
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="container-buttons">
            <button className="register-button" onClick={handleRegister}>
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterComp;
