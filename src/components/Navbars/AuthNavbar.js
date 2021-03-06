/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              <img src={require("assets/img/logo-e-fidelity.jpg").default}>
              </img>
            </Link>
          </div>
          <div className="flex justify-between">
            <Link
              to="/auth/login"
            >
              <div className="m-4 button-login">Login</div>
            </Link>
            <Link
              to="/auth/register"
            >
              <div className="m-4 button-cadastro">Cadastro</div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
