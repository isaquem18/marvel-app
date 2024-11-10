import React, { createContext, useContext, useState } from "react";

interface NavigationDataProps {
  heroesListOffsetPagination: number;
  setHeroesListOffsetPagination: (value: any) => any;
  searchHeroValue: string;
  setSearchHeroValue: (value: any) => any;
  throttledSearchValue: string;
  setThrottledSearchValue: (value: any) => any;
}

const NavigationContext = createContext<NavigationDataProps>(
  {} as NavigationDataProps
);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const NavigationProvider: React.FC<AuthProviderProps> = ({
  children,
}) => {
  const [heroesListOffsetPagination, setHeroesListOffsetPagination] =
    useState<number>(0);
  const [throttledSearchValue, setThrottledSearchValue] = useState("");
  const [searchHeroValue, setSearchHeroValue] = useState<string>("");

  return (
    <NavigationContext.Provider
      value={{
        heroesListOffsetPagination,
        setHeroesListOffsetPagination,
        throttledSearchValue,
        setThrottledSearchValue,
        searchHeroValue,
        setSearchHeroValue,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigationData() {
  const context = useContext(NavigationContext);
  return context;
}
