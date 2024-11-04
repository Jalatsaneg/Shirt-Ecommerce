import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import Footer from "./Footer";
const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 m-auto max-padd-container w-full  bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween py-3 max-xs:px-2">
        {/* logo */}
        <div>
          <Link>
            <img src={logo} alt="" height={66} width={66} />
          </Link>
        </div>
        {/* navbar Desktop */}
        <Navbar
          containerStyes={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        {/* navbar Mobile */}
        <Navbar
          containerStyes={`${
            menuOpen
              ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16  ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16  ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />
        {/* buttons */}
        <div className="flexBetween sm:gap-x-2 bold-16">
          {!menuOpen ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary  mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"cart-page"} className={"flex"}>
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 rounded-full right-1" />
              <span className="relative flexCenter h-5 w-5 rounded-full bg-secondary text-white medium-15 -top-2">
                0
              </span>
            </NavLink>
            {/* <NavLink to={'Logout'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
              <img src={logout} alt="" height={19} width={19}/>
              Logout
            </NavLink> */}
            <NavLink to={'Login'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
              <img src={user} alt="" height={19} width={19} />
              Login
            </NavLink>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
