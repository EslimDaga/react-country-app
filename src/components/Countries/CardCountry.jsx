import { Link } from "react-router-dom";

const CardCountry = ({ item }) => {
  return (
    <Link
      to={`/country/${item.name.common}`}
      className="w-full rounded-lg overflow-hidden shadow-lg bg-white dark:bg-slate-800 cursor-pointer"
    >
      <img className="w-full" src={item.flags.svg} alt={item.flags.svg} />
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
    </Link>
  );
}

export default CardCountry