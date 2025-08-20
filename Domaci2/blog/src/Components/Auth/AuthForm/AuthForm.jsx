import React, { useRef } from "react";
import "./AuthForm.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const AuthForm = (props) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (props.type === "Login") {
      handleLogin(username, password);
    } else {
      handleRegister(username, password);
    }
  };

  const handleLogin = async (username, password) => {
    const body = {
      email: username,
      password: password,
    };
    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) {
      alert(data.error || "Login failed");
      return;
    }
    console.log("Login successful", data);
    data.first
      ? navigate("/createMfa", {
          state: {
            session: data.secretCode.session,
            email: username,
            secret: data.secretCode.secret,
          },
        })
      : navigate("/confirmMfa", {
          state: {
            session: data.session,
            username: username,
          },
        });
  };

  const handleRegister = async (username, password) => {
    const body = {
      email: username,
      password: password,
    };

    const response = await fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) {
      alert(data.error || "Registration failed");
      return;
    }
    navigate("/confirmEmail", {
      state: { email: username },
    });
  };

  return (
    <div className="page">
      <div className="wrapper">
        <div className="center">
          <form action="" onSubmit={handleClick}>
            <h1>{props.type}</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                required
                ref={usernameRef}
              />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                ref={passwordRef}
              />
              <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
              {props.type === "Login" ? (
                <a href="#">Forgot password? </a>
              ) : (
                <Link to="/login">
                  Already have an account? <b>Login</b>
                </Link>
              )}
            </div>

            <button type="submit">{props.type}</button>

            {props.type === "Login" && (
              <div className="register-link">
                <p>
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default AuthForm;
