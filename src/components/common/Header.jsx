import { Popover } from "@headlessui/react";
import Toggle from "./ToggleMode";

const Header = () => {
  return (
    <Popover className="relative bg-white dark:bg-slate-800 shadow-md">
      <div className="mx-auto px-6 sm:px-6 md:px-6 lg:px-20">
        <div className="flex justify-between items-center py-6 md:justify-between md:space-x-10">
          <div className="flex justify-between lg:w-0 lg:flex-1">
            <a href="/">
              <h1 className="font-Nunito-Sans font-bold text-base sm:text-base md:text-2xl lg:text-2xl text-gray-800 dark:text-white">
                Where in the world?
              </h1>
            </a>
          </div>
          <Toggle />
        </div>
      </div>
    </Popover>
  );
};

export default Header;
