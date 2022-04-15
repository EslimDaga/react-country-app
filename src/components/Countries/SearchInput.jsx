import { SearchCircleIcon } from "@heroicons/react/solid";

const SearchInput = ({ handleChange }) => {
  return (
    <div className="relative pb-10 sm:pb-10 md:pb-0 lg:pb-0">
      <input
        type="text"
        className="w-full sm:w-64 md:w-64 lg:w-80 h-14 bg-white dark:bg-slate-800 placeholder:text-slate-800 dark:placeholder:text-white text-slate-700 dark:text-slate-400 pr-8 pl-11 rounded-lg z-0 focus:shadow focus:outline-none dark:focus:shadow dark:focus:outline-none font-Nunito-Sans font-semibold"
        placeholder="Search for a country…"
        onChange={handleChange}
      />
      <div className="absolute top-4 left-3">
        <SearchCircleIcon className="w-6 h-6 text-gray-600 dark:text-slate-400" />
      </div>
    </div>
  );
}

export default SearchInput;