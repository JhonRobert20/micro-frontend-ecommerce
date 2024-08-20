import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

import { useLoggedIn } from "../cart";
import IconNavBtn from "./UI/buttonNav";

export default function Login() {
  const loggedIn = useLoggedIn();
  const navigate = useNavigate();

  if (loggedIn) {
    return null;
  }

  return (
    <IconNavBtn onClick={() => navigate("/login")} ariaLabel="User Login">
      <User className="text-[#1C1C1C]" />
    </IconNavBtn>
  );
}
