import React, { useRef } from "react";
import "./EmailConfirmation.css"; // koristi isti ili sličan css kao AuthForm
import { FaLock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const EmailConfirmation = () => {
  const codeRef = useRef(null);
  const email = useLocation().state?.email;
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      // Ako nema emaila u state-u, preusmeri na register
      navigate("/register");
    }
  }, [email, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      code: codeRef.current.value,
      username: email,
    };
    const response = await fetch("http://localhost:3000/user/confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    alert(data.message);
    navigate("/login");
  };
  return (
    <div className="page">
      <div className="wrapper">
        <div className="center">
          <form onSubmit={handleSubmit}>
            <h1>Unesi Email kod</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Email kod"
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

export default EmailConfirmation;
