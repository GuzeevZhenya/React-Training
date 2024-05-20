import { Controls } from "../components/Controls";
import { CountryList } from "../features/country/CountryList.jsx";

export const HomePage = () => {
  return (
    <>
      <Controls />
      <CountryList />
    </>
  );
};
