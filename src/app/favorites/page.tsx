"use client";
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Footer } from "@/components/Footer";
import { FavoriteHeroCard } from "@/components/FavoriteHeroCard";
import { getData, storeData } from "@/utils/storage";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const likedHeroes =
        (await getData({ type: "local", name: "likedHeroes" })) || [];

      setFavorites(likedHeroes);
    })();
  }, []);

  const handleDeleteFavorite = async (id: number) => {
    const likedHeroes =
      (await getData({ type: "local", name: "likedHeroes" })) || [];

    const newLikedHeroesValue = likedHeroes.filter(
      (item: any) => id !== item?.characterId
    );

    storeData({
      name: "likedHeroes",
      value: newLikedHeroesValue,
      type: "local",
    });
    setFavorites(newLikedHeroesValue);
  };

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
              handleDeleteFavorite={handleDeleteFavorite}
              key={hero.characterId}
              characterId={hero.characterId}
              src={`${hero.src}`}
              title={hero.title}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit."
            />
          ))}
        </S.Container>
      </S.ProfileContainer>
      <Footer />
    </>
  );
}
