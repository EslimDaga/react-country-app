import axios from "axios";
import { useEffect, useState } from "react";
import SearchInput from "../components/Countries/SearchInput";
import DropDownInput from "../components/Countries/DropDownInput";
import CardCountry from "../components/Countries/CardCountry";

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
        <SearchInput handleChange={handleChange} />
        <DropDownInput
          setShowOptions={setShowOptions}
          showOptions={showOptions}
          handleSelect={handleSelect}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-0 sm:gap-x-0 md:gap-x-9 lg:gap-x-2 gap-y-6 sm:gap-y-6 md:gap-y-6 lg:gap-y-10 justify-items-center mx-6 sm:mx-6 md:mx-6 lg:mx-16">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          countries.map((item) => <CardCountry item={item} key={item.cca2} />)
        )}
      </div>
    </section>
  );
}

export default Countries;