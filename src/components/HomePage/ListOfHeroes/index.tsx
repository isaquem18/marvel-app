"use client";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { HeroCard } from "./HeroCard";
import { HeroCardSkeleton } from "./HeroCardSkeleton";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMarvelHeroes } from "@/hooks";
import { executeOnScrollBottom } from "@/utils/onScrollNearBottom";
import { useNavigationData } from "@/context/NavigationData";

import * as S from "./styles";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export function ListOfHeroes() {
  const { fetchMarvelHeroes } = useMarvelHeroes();
  const { searchHeroValue, scrollYPosition } = useNavigationData();
  const [isClient, setIsClient] = useState(false);

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
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleBottomReached = () => {
      if (!isFetchingNextPage) {
        fetchNextPage();
      }
    };

    const cleanup = executeOnScrollBottom(
      handleBottomReached,
      scrollYPosition,
      400,
      3000
    );

    return () => {
      cleanup();
    };
  }, [fetchNextPage, isFetchingNextPage, isClient]);

  if (isError) return <p>Error loading heroes</p>;

  const totalResults = useMemo(() => {
    const result = data?.pages?.[data?.pages?.length - 1]?.total || 0;
    return result;
  }, [data]);

  return (
    <>
      <SkeletonTheme baseColor="#e1e1e1" highlightColor="#a6a6a6">
        <S.HeroListTopContainer>
          <S.FoundHeroes>
            Encontrados
            {isLoading ? (
              <Skeleton style={{ height: 30, width: 60, margin: "0px 10px" }} />
            ) : (
              <span style={{ margin: "0px 10px" }}>{totalResults}</span>
            )}
            heróis
          </S.FoundHeroes>
          <Link href="/favorites" scroll={true}>
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
      </SkeletonTheme>
    </>
  );
}
