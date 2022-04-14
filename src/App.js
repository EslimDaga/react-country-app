import { Route, Routes } from "react-router-dom";
import Countries from "./views/Countries";
import CountryById from "./views/CountryById";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/country" element={<CountryById />} />
    </Routes>
  );
}

export default App;