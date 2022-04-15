import axios from "axios";
import { useEffect, useState } from "react";
import { ChevronDownIcon, SearchCircleIcon } from "@heroicons/react/solid";

const Countries = () => {
  const [listCountries, setListCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://restcountries.com/v3.1/all")
      .then(({ data }) => {
        setCountries(data);
        setListCountries(data);
        setLoading(false);
      });
  },[]);

  const handleChange = (e) => {
    filterCountry(e.target.value);
  }

  const handleSelect = (e) => {
    filterRegion(e);
    setShowOptions(false);
  };

  const filterCountry = (search_value) => {
    let resultSearch = listCountries.filter((element) => {
      return element.name.common
        .toLowerCase()
        .includes(search_value.toLowerCase());
    });
    setCountries(resultSearch);
  };

  const filterRegion = (search_value) => {
    if(search_value === "all" || search_value === ""){
      setCountries(listCountries);
    }else{
      let resultSearch = listCountries.filter((element) => {
        return element.region.toLowerCase().includes(search_value.toLowerCase());
      });
      setCountries(resultSearch);
    }
  };

  return (
    <section className="flex-1 overflow-y-auto w-full">
      <div className="block sm:block md:flex lg:flex justify-between mx-6 sm:mx-6 md:mx-6 lg:mx-16 pt-6 sm:pt-6 md:pt-12 lg:pt-12 pb-8 sm:pb-8 md:pb-12 lg:pb-12">
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-0 sm:gap-x-0 md:gap-x-9 lg:gap-x-2 gap-y-6 sm:gap-y-6 md:gap-y-6 lg:gap-y-10 justify-items-center mx-6 sm:mx-6 md:mx-6 lg:mx-16">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          countries.map((item) => (
            <div
              key={item.cca2}
              className="w-full rounded-lg overflow-hidden shadow-lg bg-white dark:bg-slate-800 transform cursor-pointer"
            >
              <img
                className="w-full"
                src={item.flags.svg}
                alt={item.flags.svg}
              />
              <div className="bg-white dark:bg-slate-800 px-6 pt-6">
                <div className="font-Nunito-Sans font-extrabold text-lg mb-2 text-slate-800 dark:text-white">
                  {item.name.common}
                </div>
                <div className="flex">
                  <h1 className="font-Nunito-Sans font-semibold text-sm mb-2 text-slate-800 dark:text-white">
                    Population:
                  </h1>
                  <p className="pl-1 font-Nunito-Sans font-light text-sm text-slate-800 dark:text-white">
                    {item.population}
                  </p>
                </div>
                <div className="flex">
                  <h1 className="font-Nunito-Sans font-semibold text-sm mb-2 text-slate-800 dark:text-white">
                    Region:
                  </h1>
                  <p className="pl-1 font-Nunito-Sans font-light text-sm text-slate-800 dark:text-white">
                    {item.region}
                  </p>
                </div>
                <div className="flex">
                  <h1 className="font-Nunito-Sans font-semibold text-sm mb-2 text-slate-800 dark:text-white">
                    Capital:
                  </h1>
                  <p className="pl-1 font-Nunito-Sans font-light text-sm text-slate-800 dark:text-white">
                    {item.capital}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Countries;