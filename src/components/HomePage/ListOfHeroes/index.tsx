"use client";
import { HeroCard } from "./HeroCard";
import { HeroCardSkeleton } from "./HeroCardSkeleton";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMarvelHeroes } from "@/hooks";
import { useEffect, useMemo, useState } from "react";
import { executeOnScrollBottom } from "@/utils/onScrollNearBottom";
import { useNavigationData } from "@/context/NavigationData";

import * as S from "./styles";
import Link from "next/link";

export function ListOfHeroes() {
  const { fetchMarvelHeroes } = useMarvelHeroes();
  const { searchHeroValue } = useNavigationData();
  const [isClient, setIsClient] = useState(false);

  // Define que o componente está rodando no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["MarvelHeroes", searchHeroValue],
      queryFn: ({ pageParam = 0 }) =>
        fetchMarvelHeroes({ pageParam, searchHeroValue }),
      getNextPageParam: (lastPage, allPages) => {
        const nextOffset = allPages.length * 12; // Incrementa o offset por página
        return nextOffset < lastPage.total ? nextOffset : undefined;
      },
      enabled: isClient,
    });

  useEffect(() => {
    if (!isClient) return;

    const handleBottomReached = () => {
      if (!isFetchingNextPage) {
        fetchNextPage();
      }
    };

    const cleanup = executeOnScrollBottom(handleBottomReached, 200, 4000);
    return cleanup;
  }, [fetchNextPage, isFetchingNextPage, isClient]);

  if (isError) return <p>Error loading heroes</p>;

  const totalResults = useMemo(() => {
    const result = data?.pages?.[data?.pages?.length - 1]?.total || 0;
    return result;
  }, [data]);

  return (
    <>
      <S.HeroListTopContainer>
        <S.FoundHeroes>Encontrados {totalResults} heróis</S.FoundHeroes>
        <Link href="/favorites">
          <S.FavoritesOnlyButton>
            <S.LikeImageIcon /> Somente favoritos
          </S.FavoritesOnlyButton>
        </Link>
      </S.HeroListTopContainer>
      <S.Container>
        {isLoading
          ? Array(8)
              .fill(0)
              .map((_, index) => <HeroCardSkeleton key={index} />)
          : data?.pages.flatMap((page) =>
              page.results.map((hero: MarvelCharacter) => (
                <HeroCard
                  key={hero.id}
                  characterId={hero.id}
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  title={hero.name}
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit."
                />
              ))
            )}
        {isFetchingNextPage && (
          <>
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <HeroCardSkeleton key={`skeleton-${index}`} />
              ))}
          </>
        )}
      </S.Container>
    </>
  );
}
