"use client";
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Footer } from "@/components/Footer";
import { FavoriteHeroCard } from "@/components/FavoriteHeroCard";
import { getData } from "@/utils/storage";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const likedHeroes =
        (await getData({ type: "local", name: "likedHeroes" })) || [];

      setFavorites(likedHeroes);
    })();
  }, []);

  return (
    <>
      <S.BackLink href="/">
        <S.BackButton>voltar</S.BackButton>
      </S.BackLink>
      <S.ProfileContainer>
        <S.TitleFavoritesPage>Favoritos</S.TitleFavoritesPage>
        <S.Container>
          {favorites?.map((hero: any) => (
            <FavoriteHeroCard
              key={hero.characterId}
              characterId={hero.id}
              src={`${hero.src}`}
              title={hero.name}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit."
            />
          ))}
        </S.Container>
      </S.ProfileContainer>
      <Footer />
    </>
  );
}
