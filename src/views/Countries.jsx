import axios from "axios";
import { useEffect, useState } from "react";
import { SearchCircleIcon } from "@heroicons/react/solid";

const Countries = () => {
  const [listCountries, setListCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const filterCountry = (search_value) => {
    let resultSearch = listCountries.filter((element) => {
      return element.name.common
        .toLowerCase()
        .includes(search_value.toLowerCase());
    });
    console.log(resultSearch);
    setCountries(resultSearch);
  };

  return (
    <section className="flex-1 overflow-y-auto w-full">
      <div className="block sm:block md:flex lg:flex justify-between mx-6 sm:mx-6 md:mx-6 lg:mx-16 pt-6 sm:pt-6 md:pt-12 lg:pt-12 pb-8 sm:pb-8 md:pb-12 lg:pb-12">
        <div className="relative pb-10 sm:pb-10 md:pb-0 lg:pb-0">
          <input
            type="text"
            className="w-full sm:w-64 md:w-64 lg:w-80 h-14 bg-white dark:bg-slate-800 placeholder:text-slate-400 dark:placeholder:text-slate-400 text-slate-700 dark:text-slate-400 pr-8 pl-11 rounded-lg z-0 focus:shadow focus:outline-none dark:focus:shadow dark:focus:outline-none font-Nunito-Sans font-semibold"
            placeholder="Search for a country…"
            onChange={handleChange}
          />
          <div className="absolute top-4 left-3">
            <SearchCircleIcon className="w-6 h-6 text-gray-600 dark:text-slate-400" />
          </div>
        </div>
        <select name="" id="">
          dasdasd
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-0 sm:gap-x-0 md:gap-x-9 lg:gap-x-2 gap-y-6 sm:gap-y-6 md:gap-y-6 lg:gap-y-10 justify-items-center mx-6 sm:mx-6 md:mx-6 lg:mx-16">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          countries.map((item) => (
            <div
              key={item.cca2}
              className="w-full rounded-lg overflow-hidden shadow-lg bg-white dark:bg-slate-800"
            >
              <img className="w-full" src={item.flags.svg} alt="Mountain" />
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