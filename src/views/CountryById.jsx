import { ArrowLeftIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CountryById = () => {

  let { name } = useParams();

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then(({ data }) => {
        console.log(data);
      })
  },[name])

  return (
    <section className="flex-1 overflow-y-auto w-full">
      <div className="py-20 pl-6 sm:px-6 md:px-6 lg:px-20">
        <Link to="/" className="w-36 h-10 flex justify-center items-center bg-white px-6 py-2 rounded-md shadow-lg">
          <ArrowLeftIcon className="w-5 mr-3" /> Back
        </Link>
      </div>
    </section>
  );
}

export default CountryById;