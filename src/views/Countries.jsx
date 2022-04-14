import { SearchCircleIcon } from "@heroicons/react/solid";

const Countries = () => {
  return (
    <div className="w-full block sm:block md:flex lg:flex justify-between px-6 sm:px-6 md:px-6 lg:px-20 my-8">
      <div className="relative">
        <input
          type="text"
          className="w-full sm:w-64 md:w-64 lg:w-72 h-14 bg-white dark:bg-gray-900 placeholder:text-gray-600 text-gray-700 dark:text-white pr-8 pl-11 rounded-lg z-0 focus:shadow focus:outline-yellow-400 dark:focus:shadow dark:focus:outline-none font-fredoka font-normal"
          placeholder="Buscar"
        />
        <div className="absolute top-4 left-3">
          <SearchCircleIcon className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default Countries