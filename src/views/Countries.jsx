import axios from "axios";
import { useEffect, useState } from "react";

const Countries = () => {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://restcountries.com/v3.1/all")
      .then(({ data }) => {
        setCountries(data);
        setLoading(false);
      });
  },[]);

  return (
    <section className="flex-1 overflow-y-auto">

    </section>
  );
}

export default Countries;