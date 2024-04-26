export const selectAllCountriesInfo = (state) => ({
  status: state.country.status,
  error: state.country.error,
  qty: state.country.country.lenght,
});

export const selectAllCountries = (state) => state.country.country;

export const selectVisibleCountry = (state, { search = "", region = "" }) => {
  const filteredCountry = state.country.country.filter((country) => {
    return (
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
    );
  });

  return filteredCountry;
};
