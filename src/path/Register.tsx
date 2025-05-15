import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Register, RegisterForSaga } from "../app/slices/RegisterSlice";

import "../ModalWindow.sass";

function Login() {
  const userInRoot = useSelector((state: any) => state.username);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleButton() {
    dispatch(RegisterForSaga({ username, password, email }));

    console.log({ username }, { password }, { email });
  }

  return (
    <>
      <div className="modal-overlay">
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

            <button style={{ padding: "10px" }} onClick={handleButton}>
              Send data to back
            </button>

            {/* <h3>Result</h3>
            <p>USer: {username}</p>
            <p>PAssword: {password}</p>
            <p>Email: {email}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
