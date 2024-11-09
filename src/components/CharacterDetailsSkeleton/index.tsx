"use client";
import React, { use } from "react";
import axios from "axios";
import * as S from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useMarvelHeroes } from "@/hooks";
import { Footer } from "@/components/Footer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function CharacterDetailsSkeleton() {
  return (
    <SkeletonTheme baseColor="#cbcbcb" highlightColor="#a6a6a6">
      <>
        <S.BackLink href="/">
          <S.BackButton>voltar</S.BackButton>
        </S.BackLink>
        <S.BannerContainer />
        <S.ProfileContainer>
          <S.TitleHeroDetail>
            DESCUBRA TODOS OS <br /> QUADRINHOS <br /> DESTE PERSONAGEM
          </S.TitleHeroDetail>
          <S.HeroDetailsCard>
            <Skeleton
              style={{
                flex: 1,
                height: "212px",
                width: "200px",
                borderRadius: 200,
                marginRight: 14,
              }}
            />
            <S.HeroDetails>
              <Skeleton
                style={{
                  height: "40px",
                  width: "16vw",
                  marginBottom: 50,
                  borderRadius: 30,
                }}
              />
              <Skeleton
                style={{
                  flex: 1,
                  height: "23px",
                  width: "40vw",
                  maxWidth: 700,
                  borderRadius: 30,
                }}
                count={3}
              />
            </S.HeroDetails>
          </S.HeroDetailsCard>
          <S.ComicList>
            <Skeleton
              style={{
                flex: 1,
                width: "100%",
                height: "263.06px",
                marginBottom: "20px",
                borderRadius: 30,
              }}
              count={3}
            />
          </S.ComicList>
        </S.ProfileContainer>
        <Footer />
      </>
    </SkeletonTheme>
  );
}
