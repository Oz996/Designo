import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type CountryNames = "" | "canada" | "australia" | "united kingdom";
interface CountryContext {
  country: CountryNames;
  setCountry: Dispatch<SetStateAction<CountryNames>>;
}

export const CountryContext = createContext<CountryContext | null>(null);

export const CountryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [country, setCountry] = useState<CountryNames>("");
  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
