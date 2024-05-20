import { useEffect } from "react";
import { List } from "../../components/List";
import { Card } from "../../components/Card";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  selectVisibleCountry,
  selectAllCountriesInfo,
} from "./countries-slice";
import { selectAllControls } from "../controls/controls-slice";
import { loadCountries } from "./countries-slice";

import React from "react";

export const CountryList = () => {
  const navigate = useNavigate();
  const { search, region } = useSelector(selectAllControls);

  const country = useSelector((state) =>
    selectVisibleCountry(state, { search, region })
  );

  const { error, status, qty } = useSelector(selectAllCountriesInfo);
  const dispatch = useDispatch();
  console.log(country, error, status, qty);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return (
    <>
      {" "}
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
