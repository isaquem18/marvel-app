"use client";
import React, { use } from "react";
import axios from "axios";
import * as S from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useMarvelHeroes } from "@/hooks";
import { Footer } from "@/components/Footer";

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
              <S.ComicImage
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <S.ComicDetails>
                <S.ComicName>{comic.title}</S.ComicName>
                <S.ComicReleaseDate>
                  Release Date:{" "}
                  {new Date(
                    comic.dates.find((date: any) => date.type === "onsaleDate")
                      ?.date || ""
                  ).toLocaleDateString()}
                </S.ComicReleaseDate>
                <S.ComicPageCount>
                  Page Count: {comic.pageCount}
                </S.ComicPageCount>
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
