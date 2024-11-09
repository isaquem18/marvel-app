"use client";
import React from "react";
import * as S from "./styles";
import { Footer } from "@/components/Footer";

export default function FavoritesPage() {
  return (
    <>
      <S.BackLink href="/">
        <S.BackButton>voltar</S.BackButton>
      </S.BackLink>

      <S.ProfileContainer>
        <S.TitleFavoritesPage>Favoritos</S.TitleFavoritesPage>
      </S.ProfileContainer>
      <Footer />
    </>
  );
}
