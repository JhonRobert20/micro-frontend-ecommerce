import React from "react";
import MaxWidthWrapper from "../UI/MaxWidthWrapper";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import IconButtons from "./IconButtons";

export default function NavBar() {
  //obtener la sesión del usuario y entonces sabremos si está logeado o no para mostrar otros botones
  //tambien poner al admin
  //.env ADMIN_EMAIL=hello@admin.com
  // const isAdmin = user?.email = process.env.ADMIN_EMAIL
  return (
    <nav className="sticky z-50 top-0 w-full border-b border-skin-details bg-skin-fill">
      <MaxWidthWrapper>
        <div className="h-16 w-full flex items-center justify-between">
          <div className="flex gap-10">
            <Logo />
            <NavigationLinks />
          </div>

          <IconButtons />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
