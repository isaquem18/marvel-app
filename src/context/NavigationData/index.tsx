import React, { createContext, useContext, useState } from "react";

interface NavigationDataProps {
  heroesListOffsetPagination: number;
  setHeroesListOffsetPagination: (value: any) => any;
  searchHeroValue: string;
  setSearchHeroValue: (value: any) => any;
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
  const [searchHeroValue, setSearchHeroValue] = useState<string>("");

  return (
    <NavigationContext.Provider
      value={{
        heroesListOffsetPagination,
        setHeroesListOffsetPagination,
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