import React from "react";
import { NAV_BAR } from "../../lib/constants";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";
import MaxWidthWrapper from "../UI/MaxWidthWrapper";

export default function NavBar() {
  //obtener la sesión del usuario y entonces sabremos si está logeado o no para mostrar otros botones
  //tambien poner al admin
  //.env ADMIN_EMAIL=hello@admin.com
  // const isAdmin = user?.email = process.env.ADMIN_EMAIL
  return (
    <nav className="sticky z-20 h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-gray/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className=" h-14 flex items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <img
              className="flex flex-shrink-0 h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />

            {NAV_BAR.map((url) => {
              return (
                <a
                  key={url.link}
                  href={url.link}
                  className="rounded-md hover:bg-gray-900 px-3 py-2 text-sm font-medium text-black hover:text-white"
                  aria-curren={url.name}
                >
                  {url.name}
                </a>
              );
            })}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <MiniCart />
            <div className="relative ml-3">
              <Login />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
