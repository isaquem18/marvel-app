"use client";
import React, { createContext, useContext, useMemo } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

interface IRequestConfig extends AxiosRequestConfig {
  method: Method;
  url: string;
}

interface IApiContextValues {
  request: <Type>(config: IRequestConfig) => Promise<AxiosResponse<Type>>;
}

const ApiContext = createContext<IApiContextValues>({} as IApiContextValues);

interface IApiProviderProps {
  children: React.ReactNode;
}

export const ApiProvider: React.FC<IApiProviderProps> = ({ children }) => {
  const apiInstance = useMemo(
    () =>
      axios.create({
        baseURL: "https://gateway.marvel.com/v1/public",
      }),
    []
  );

  return (
    <ApiContext.Provider
      value={{
        request: apiInstance,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export function useApi() {
  const context = useContext(ApiContext);
  return context;
}
