import { ArrowLeftIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const FlagImage = styled.img`
  width: 560px;
  height: 401px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    border-radius: 10px;
  }
`;

FlagImage.defaultProps = {
  src : ""
};

const CountryById = () => {

  let { name } = useParams();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then(({ data }) => {
        const countryById = data.map((r) => {
          return {
            cca2: r.cca2,
            flag_image: r.flags.svg,
            name_country: r.name.common,
            flag_emoji: r.flag,
            native_name: [r.name.nativeName],
            population: r.population,
            region: r.region,
            sub_region: r.subregion,
            capital: r.capital,
            top_level_domain: r.tld,
            currencies: [r.currencies],
            languages: [r.languages],
            borders: r.borders
          }
        })
        //console.log(countryById)
        setCountry(countryById);
      })
  },[name])

  //console.log(country);

  return (
    <section className="flex-1 overflow-y-auto w-full">
      <div className="py-10 sm:py-10 md:py-20 lg:py-20 px-6 sm:px-6 md:px-6 lg:px-20">
        <Link
          to="/"
          className="w-36 h-10 flex justify-center items-center bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-6 py-2 rounded-md shadow-lg"
        >
          <ArrowLeftIcon className="w-5 mr-3" />
          Back
        </Link>
      </div>
      {country.map((item) => (
        <div
          key={item.cca2}
          className="block sm:block md:flex lg:flex justify-around px-6 sm:px-6 md:px-6 lg:px-20"
        >
          <FlagImage src={item.flag_image} />
          <div className="self-center">
            <h1 className="font-Nunito-Sans font-extrabold text-3xl text-gray-900 dark:text-white mt-11 sm:mt-11 md:mt-0 lg-0">
              {item.name_country} {item.flag_emoji}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-2 sm:gap-x-2 md:gap-x-20 lg:gap-x-0 gap-y-8 sm:gap-y-8 md:ga-py-0 lg:gap-y-0 mt-6">
              <div>
                <div className="pb-2">
                  <h1 className="font-Nunito-Sans font-semibold text-gray-900 dark:text-white">
                    Native Name:
                  </h1>
                  <h2 className="pl-2 font-Nunito-Sans font-light text-gray-900 dark:text-white">
                    {item.native_name.map((nn) => {
                      return Object.values(nn).map((r) => (
                        <li key={r.common}>{r.common}</li>
                      ));
                    })}
                  </h2>
                </div>
                <div className="flex pb-2">
                  <h1 className="font-Nunito-Sans font-semibold text-gray-900 dark:text-white">
                    Population:
                  </h1>
                  <h2 className="pl-2 font-Nunito-Sans font-light text-gray-900 dark:text-white">
                    {item.population}
                  </h2>
                </div>
                <div className="flex pb-2">
                  <h1 className="font-Nunito-Sans font-semibold text-gray-900 dark:text-white">
                    Region:
                  </h1>
                  <h2 className="pl-2 font-Nunito-Sans font-light text-gray-900 dark:text-white">
                    {item.region}
                  </h2>
                </div>
                <div className="flex pb-2">
                  <h1 className="font-Nunito-Sans font-semibold text-gray-900 dark:text-white">
                    Sub Region:
                  </h1>
                  <h2 className="pl-2 font-Nunito-Sans font-light text-gray-900 dark:text-white">
                    {item.sub_region}
                  </h2>
                </div>
                <div className="flex pb-2">
                  <h1 className="font-Nunito-Sans font-semibold text-gray-900 dark:text-white">
                    Capital:
                  </h1>
                  <h2 className="pl-2 font-Nunito-Sans font-light text-gray-900 dark:text-white">
                    {item.capital}
                  </h2>
                </div>
              </div>
              <div>
                <div className="flex pb-2">
                  <h1 className="font-Nunito-Sans font-semibold text-gray-900 dark:text-white">
                    Top Level Domain:
                  </h1>
                  <h2 className="pl-2 font-Nunito-Sans font-light text-gray-900 dark:text-white">
                    {item.top_level_domain}
                  </h2>
                </div>
                <div className="flex pb-2">
                  <h1 className="font-Nunito-Sans font-semibold text-gray-900 dark:text-white">
                    Currencies:
                  </h1>
                  <h2 className="pl-2 font-Nunito-Sans font-light text-gray-900 dark:text-white">
                    {item.currencies.map((c) => {
                      return Object.values(c).map((r) => r.name);
                    })}
                  </h2>
                </div>
                <div className="pb-2">
                  <h1 className="font-Nunito-Sans font-semibold text-gray-900 dark:text-white">
                    Languages:
                  </h1>
                  <h2 className="pl-2 font-Nunito-Sans font-light text-gray-900 dark:text-white">
                    {item.languages.map((c) => {
                      return Object.values(c).map((r) => <li key={r}>{r}</li>);
                    })}
                  </h2>
                </div>
              </div>
            </div>
            <div className="block sm:block md:flex lg:flex mt-16 mb-10 items-center">
              <h1 className="font-Nunito-Sans font-semibold text-gray-900 dark:text-white mr-2">
                Border Countries:
              </h1>
              <div className="flex overflow-auto sm:flex md:flex lg:flex mt-4 sm:mt-4 md:mt-0 lg:mt-0">
                {item.borders.map((b) => (
                  <div key={b} className="bg-white dark:bg-slate-800 py-1 px-7 rounded-md mr-2 shadow-lg">
                    <h1 className="font-Nunito-Sans font-light text-gray-900 dark:text-white">
                      {b}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CountryById;