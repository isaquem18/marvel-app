"use client";
import React, { use } from "react";
import axios from "axios";
import * as S from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useMarvelHeroes } from "@/hooks";
import { Footer } from "@/components/Footer";
import CharacterDetailsSkeleton from "@/components/CharacterDetailsSkeleton";

export default function CharacterDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { fetchMarvelHeroDetail } = useMarvelHeroes();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["MarvelHeroDetails", id],
    queryFn: () => fetchMarvelHeroDetail(id),
  });

  if (isLoading) {
    return <CharacterDetailsSkeleton />;
  }

  return (
    <>
      <S.BackLink href="/">
        <S.BackButton>voltar</S.BackButton>
      </S.BackLink>
      <S.BannerContainer
        url={`${data?.thumbnail.path}.${data?.thumbnail.extension}`}
      />
      <S.ProfileContainer>
        <S.TitleHeroDetail>
          DESCUBRA TODOS OS <br /> QUADRINHOS <br /> DESTE PERSONAGEM
        </S.TitleHeroDetail>
        <S.HeroDetailsCard>
          <S.HeroImage
            src={`${data?.thumbnail.path}.${data?.thumbnail.extension}`}
            alt={data?.name}
          />

          <S.HeroDetails>
            <S.HeroName>{data?.name}</S.HeroName>
            <S.HeroDescription>{data?.description}</S.HeroDescription>
          </S.HeroDetails>
        </S.HeroDetailsCard>
        <S.ComicList>
          {data?.comics.map((comic: any) => (
            <S.ComicCard key={comic.id}>
              <S.ComicImageContainer>
                <S.ComicImage
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />
              </S.ComicImageContainer>
              <S.ComicDetails>
                <S.ComicName>{comic.title}</S.ComicName>
                <S.ReleaseInfo>
                  <S.ComicReleaseDate>
                    {new Date(
                      comic.dates.find(
                        (date: any) => date.type === "onsaleDate"
                      )?.date || ""
                    ).toLocaleDateString()}
                  </S.ComicReleaseDate>
                  <S.DotCircleIcon />
                  <S.ComicPageCount>{comic.pageCount}</S.ComicPageCount>
                  &nbsp;Pages
                </S.ReleaseInfo>
                <S.ComicDescription>
                  {comic.description.substring(0, 200)}...
                </S.ComicDescription>
              </S.ComicDetails>
            </S.ComicCard>
          ))}
        </S.ComicList>
      </S.ProfileContainer>
      <Footer />
    </>
  );
}
