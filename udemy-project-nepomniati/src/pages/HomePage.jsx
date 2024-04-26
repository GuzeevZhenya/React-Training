import { useNavigate } from "react-router-dom";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearControls } from "../redux/search/search-reducer.js";

import { loadCountry } from "../redux/country/country-reducer.js";
import {
  selectAllCountries,
  selectAllCountriesInfo,
  selectVisibleCountry,
} from "../redux/country/country-selector.js";
import { selectAllControls } from "../redux/search/controls-selector.js";

export const HomePage = () => {
  const navigate = useNavigate();

  const { search, region } = useSelector(selectAllControls);

  const country = useSelector((state) =>
    selectVisibleCountry(state, { search, region })
  );

  const { error, status, qty } = useSelector(selectAllCountriesInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountry());
    }
  }, [qty, dispatch]);

  return (
    <>
      <Controls />
      {error ? <h2>{error}</h2> : null}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "received" && (
        <List>
          {country.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
