import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 gün
    httpOnly: true, // XSS saldırılarına karşı koruma
    sameSite: "strict", // CSRF saldırılarına karşı koruma
    secure: process.env.NODE_ENV === "production", // Sadece HTTPS üzerinden gönder
  });
};
