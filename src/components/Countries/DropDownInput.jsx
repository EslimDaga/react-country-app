import { ChevronDownIcon } from "@heroicons/react/solid";

const DropDownInput = ({ setShowOptions, showOptions, handleSelect }) => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setShowOptions(!showOptions)}
          type="button"
          className="inline-flex justify-between items-center w-52 h-14 rounded-md shadow-sm pl-6 pr-5 py-2 bg-white dark:bg-slate-800 text-sm font-Nunito-Sans font-medium text-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-100 dark:focus:ring-offset-gray-900 dark:focus:ring-gray-900"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Filter by Region
          <ChevronDownIcon className="w-6" />
        </button>
      </div>
      {showOptions ? (
        <div
          className="origin-top-right absolute right-0 mt-2 w-52 pl-2 pr-2 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <div
              onClick={() => handleSelect("all")}
              className="text-gray-700 dark:text-white hover:bg-gray-300 hover:dark:bg-slate-600 rounded-md block px-4 py-2 font-Nunito-Sans font-medium text-sm cursor-pointer"
              role="menuitem"
              id="menu-item-2"
            >
              All
            </div>
            <div
              onClick={() => handleSelect("africa")}
              className="text-gray-700 dark:text-white hover:bg-gray-300 hover:dark:bg-slate-600 rounded-md block px-4 py-2 font-Nunito-Sans font-medium text-sm cursor-pointer"
              role="menuitem"
              id="menu-item-2"
            >
              Africa
            </div>
            <div
              onClick={() => handleSelect("america")}
              className="text-gray-700 dark:text-white hover:bg-gray-300 hover:dark:bg-slate-600 rounded-md block px-4 py-2 font-Nunito-Sans font-medium text-sm cursor-pointer"
              role="menuitem"
              id="menu-item-2"
            >
              America
            </div>
            <div
              onClick={() => handleSelect("asia")}
              className="text-gray-700 dark:text-white hover:bg-gray-300 hover:dark:bg-slate-600 rounded-md block px-4 py-2 font-Nunito-Sans font-medium text-sm cursor-pointer"
              role="menuitem"
              id="menu-item-2"
            >
              Asia
            </div>
            <div
              onClick={() => handleSelect("europe")}
              className="text-gray-700 dark:text-white hover:bg-gray-300 hover:dark:bg-slate-600 rounded-md block px-4 py-2 font-Nunito-Sans font-medium text-sm cursor-pointer"
              role="menuitem"
              id="menu-item-2"
            >
              Europe
            </div>
            <div
              onClick={() => handleSelect("oceania")}
              className="text-gray-700 dark:text-white hover:bg-gray-300 hover:dark:bg-slate-600 rounded-md w-full block px-4 py-2 font-Nunito-Sans font-medium text-sm cursor-pointer"
              role="menuitem"
              id="menu-item-2"
            >
              Oceania
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DropDownInput