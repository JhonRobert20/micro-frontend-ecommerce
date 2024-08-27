import React from "react";
import { NAV_BAR } from "../../lib/constants";
import CartModal from "cart/CartModal";
import Login from "cart/Login";
import MaxWidthWrapper from "../UI/MaxWidthWrapper";

export default function NavBar() {
  //obtener la sesión del usuario y entonces sabremos si está logeado o no para mostrar otros botones
  //tambien poner al admin
  //.env ADMIN_EMAIL=hello@admin.com
  // const isAdmin = user?.email = process.env.ADMIN_EMAIL
  return (
    <nav className="sticky z-20 top-0 w-full border-b border-gray-200 bg-gray/55 backdrop-blur-lg transition-all h-16 shadow-sm">
      <MaxWidthWrapper>
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start gap-9">
            {NAV_BAR.map((url) => {
              return (
                <a
                  key={url.link}
                  href={url.link}
                  className="text-sm font-medium text-[#1C1C1C] relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#1C1C1C] after:w-full after:scale-x-0 after:mt-5 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center"
                  aria-curren={url.name}
                >
                  {url.name}
                </a>
              );
            })}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <CartModal />
            <div className="relative ml-3">
              <Login />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
