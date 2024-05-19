import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const showMenu = () => {
    setMenu(!menu);
  };

  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg">
      <h1 className="text-lg md:text-2xl font-extrabold text-white">
        <Link to="/">Blog Space</Link>
      </h1>
      {path === "/" && (
        <div className="flex items-center space-x-2 md:space-x-4">
          <p
            onClick={() => navigate(prompt ? "?search=" + prompt : "/")}
            className="cursor-pointer text-white"
          >
            <BsSearch size={20} />
          </p>
          <input
            onChange={(e) => setPrompt(e.target.value)}
            className="outline-none px-3 py-1 rounded-full bg-white text-black"
            placeholder="Search a post"
            type="text"
          />
        </div>
      )}
      <div className="hidden md:flex items-center space-x-4 text-white">
        {user ? (
          <h3 className="hover:text-gray-300 transition">
            <Link to="/write">Write</Link>
          </h3>
        ) : (
          <h3 className="hover:text-gray-300 transition">
            <Link to="/login">Login</Link>
          </h3>
        )}
        {user ? (
          <div onClick={showMenu} className="relative">
            <p className="cursor-pointer">
              <FaBars size={24} />
            </p>
            {menu && <Menu />}
          </div>
        ) : (
          <h3 className="hover:text-gray-300 transition">
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
      <div onClick={showMenu} className="md:hidden text-white text-lg relative">
        <p className="cursor-pointer">
          <FaBars size={24} />
        </p>
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
