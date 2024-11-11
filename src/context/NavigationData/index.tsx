import React, { createContext, useContext, useRef, useState } from "react";

interface NavigationDataProps {
  heroesListOffsetPagination: number;
  setHeroesListOffsetPagination: (value: any) => any;
  searchHeroValue: string;
  setSearchHeroValue: (value: any) => any;
  throttledSearchValue: string;
  setThrottledSearchValue: (value: any) => any;
  scrollYPosition: {
    current: number;
  };
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
  const scrollYPosition = useRef(0);

  return (
    <NavigationContext.Provider
      value={{
        heroesListOffsetPagination,
        setHeroesListOffsetPagination,
        throttledSearchValue,
        setThrottledSearchValue,
        searchHeroValue,
        setSearchHeroValue,
        scrollYPosition,
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
