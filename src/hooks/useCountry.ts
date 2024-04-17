import { useContext } from "react";
import { CountryContext } from "../context/countryContext";

export const useCountry = () => {
  const country = useContext(CountryContext);
  if (!country) throw Error("Failed to use CountryContext");
  return country;
};
