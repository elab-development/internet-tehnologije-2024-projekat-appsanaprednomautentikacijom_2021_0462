import React, { useRef } from "react";
import "../ConfirmMfa/ConfirmMfa.css";
import { FaLock } from "react-icons/fa";
import TOTPQRCode from "../../QRForm/QrForm";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CreateMfa = () => {
  const codeRef = useRef(null);
  const navigate = useNavigate();

  const { email, session, secret } = useLocation().state || {};

  useEffect(() => {
    if (!email || !session || !secret) {
      navigate("/login");
    }
  }, [email, session, secret, navigate]);

  console.log("uneta sesija", session);
  console.log("uneti secret", secret);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      session,
      code: codeRef.current.value,
    };
    const response = await fetch("http://localhost:3000/user/confirm2fa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (!response.ok) {
      alert(data.message);
    }
    alert(data.message);
    navigate("/login");
  };

  return (
    <div className="page">
      <div className="wrapper">
        <div className="center">
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Scan QR code </h1>
            <div className="qr-center">
              <TOTPQRCode secret={`otpauth://totp/?secret=${secret}`} />
            </div>
            <div className="input-box">
              <input
                type="text"
                required
                placeholder="Enter the 6-digit code"
                ref={codeRef}
              />
            </div>
            <button type="submit">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMfa;
