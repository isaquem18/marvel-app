import { useCallback } from "react";
import CryptoJS from "crypto-js";
import { useApi } from "@/context/Api";

const useMarvelHeroes = () => {
  const { request } = useApi();
  const publicKey = "5dd0b5470e18758f1e91e5d5179d2e8b";
  const privateKey = "e844afc475f16dea1984837e763bdb1f7b64aced";
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

  const fetchMarvelHeroes = useCallback(
    async ({ pageParam }: any) => {
      const response = await request<any>({
        method: "get",
        url: "/characters",
        params: {
          ts,
          apikey: publicKey,
          hash,
          limit: 12,
          offset: pageParam,
        },
      });

      return response?.data?.data || [];
    },
    [request]
  );

  const fetchMarvelHeroDetail = useCallback(async (characterId: string) => {
    const requestConfig = {
      method: "get" as const,
      params: {
        ts,
        apikey: publicKey,
        hash,
      },
    };

    const [comicResponse, heroResponse] = await Promise.all([
      request<any>({
        ...requestConfig,
        url: `/characters/${characterId}/comics`,
        params: { ...requestConfig.params, limit: 5 },
      }),
      request<any>({
        ...requestConfig,
        url: `/characters/${characterId}`,
      }),
    ]);

    const comicsData = comicResponse.data.data.results.map((comic: any) => ({
      id: comic.id,
      title: comic.title,
      thumbnail: comic.thumbnail,
      dates: comic.dates,
      pageCount: comic.pageCount,
      description: comic.description || "No description available.",
    }));

    const heroData = heroResponse.data.data.results[0];

    console.log(heroData);

    return {
      name: heroData.name,
      description: heroData.description || "No description available.",
      thumbnail: heroData.thumbnail,
      comics: comicsData,
    };
  }, []);

  return {
    fetchMarvelHeroes,
    fetchMarvelHeroDetail,
  };
};
export default useMarvelHeroes;
