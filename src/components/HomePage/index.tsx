"use client";
import * as S from "./styles";
import { Header } from "./Header";
import { ListOfHeroes } from "./ListOfHeroes";
import { useQuery } from "@tanstack/react-query";
import { useMarvelHeroes } from "@/hooks";

export function HomePage() {
  const { fetchMarvelHeroes } = useMarvelHeroes();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["MarvelHeroes"],
    queryFn: fetchMarvelHeroes,
  });

  if (isError) return <p>Error loading heroes</p>;

  return (
    <S.Container>
      <S.ContainerContent>
        <Header />
        <ListOfHeroes data={data} isLoading={isLoading} />
      </S.ContainerContent>
    </S.Container>
  );
}
