import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const TOTPQRCode = ({ secret }) => {
  return <QRCodeCanvas value={secret} size={200} />;
};

export default TOTPQRCode;
