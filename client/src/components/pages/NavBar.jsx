import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../helpers/Button";

const NavBar = ({ isAuthenticated }) => {
  // const isAuthenticated = prop.isAuthenticated;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full h-[4rem]">
      <div className="fixed top-0 w-full h-[4rem] p-2 px-20 flex justify-between items-center bg-white border-b-2 z-10">
        <div className="flex gap-2 items-center">
          <img
            src="your-logo-image-path-here"
            alt="Logo"
            className="h-10 w-10 rounded-full border-2 border-black"
          />
          Dish Discovery
        </div>
        <div className="relative flex gap-5 items-center">
          <Link to="/">
            <span className="">Home</span>
          </Link>
          <Link to="/discoveryRecipe">Discover</Link>
          {isAuthenticated ? (
            <>
              <Link to="/myCookbook">My Cookbook</Link>
              <Link to="/createRecipe">Create Recipe</Link>
              <Link>Account</Link>
              <Link>Logout</Link>
            </>
          ) : (
            <>
              <Link to="/signin">
                <Button
                  className="border-2 border-orange-500"
                  buttonName="Login"
                />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
