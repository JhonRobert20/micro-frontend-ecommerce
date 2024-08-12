import React, { useState, useEffect } from "react";
import { login, jwt } from "./cart";
import Login from "./Login";

export default function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    // login("sally", "123"); // Simulamos un inicio de sesión al montar el componente
    return jwt.subscribe((val) => setToken(val ?? "")); // Nos suscribimos a cambios en el JWT
  }, []);

  return (
    <div>
      JWT: {token}
      <Login />
    </div>
  );
}
