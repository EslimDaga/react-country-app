import React from "react";
import { MoonIcon } from "@heroicons/react/solid";
import { MoonIcon as MoonIconOutline } from "@heroicons/react/outline";
import { ThemeContext } from "../../context/ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center cursor-pointer"
        >
          <MoonIcon className="h-5 text-gray-500 dark:text-gray-400 cursor-pointer" />
          <h3 className="pl-1 font-Nunito-Sans font-semibold text-gray-800 dark:text-white">
            Dark Mode
          </h3>
        </div>
      ) : (
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center cursor-pointer"
        >
          <MoonIconOutline className="h-5 text-gray-500 dark:text-gray-400 cursor-pointer" />
          <h3 className="pl-1 font-Nunito-Sans font-semibold">Dark Mode</h3>
        </div>
      )}
    </div>
  );
};

export default Toggle;
