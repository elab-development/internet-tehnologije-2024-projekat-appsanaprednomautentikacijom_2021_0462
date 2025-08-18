import React, { useRef } from "react";
import "./ConfirmMfa.css"; // koristi isti ili sličan css kao AuthForm
import { FaLock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/Auth";

const ConfirmMfa = () => {
  const codeRef = useRef(null);
  const navigate = useNavigate();
  const { session, username } = useLocation().state || {};

  const { login, logout, isLoggedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      session: session,
      code: codeRef.current.value,
      username: username,
    };
    const response = await fetch("http://localhost:3000/user/confirmLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log("Response data:", data);
    if (!response.ok) {
      alert(data.error || "Login failed");
      navigate("/login");
      return;
    }
    alert(data.message);
    login(data.token);
    console.log("Updateovao sam state iz App");
    navigate("/home", {
      state: {
        token: data.token,
      },
    });
  };

  return (
    <div className="page">
      <div className="wrapper">
        <div className="center">
          <form onSubmit={handleSubmit}>
            <h1>Enter 6-digit code</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="MFA kod"
                required
                ref={codeRef}
                maxLength={6}
              />
              <FaLock className="icon" />
            </div>
            <button type="submit">Potvrdi</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmMfa;
