import { useCallback } from "react";
import CryptoJS from "crypto-js";
import { useApi } from "@/context/Api";

const useMarvelHeroes = () => {
  const { request } = useApi();

  const fetchMarvelHeroes = useCallback(
    async (params: any) => {
      const publicKey = "5dd0b5470e18758f1e91e5d5179d2e8b";
      const privateKey = "e844afc475f16dea1984837e763bdb1f7b64aced";
      const ts = Date.now().toString();
      const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

      const response = await request<any>({
        method: "get",
        url: "/characters",
        params: {
          ts,
          apikey: publicKey,
          hash,
          limit: 12,
        },
      });

      return response?.data?.data || [];
    },
    [request]
  );

  return {
    fetchMarvelHeroes,
  };
};
export default useMarvelHeroes;
