"use client";
import Link from "next/link";

import * as S from "./styles";
import { getData, storeData } from "@/utils/storage";
import { memo, useEffect, useMemo, useState } from "react";

interface Props {
  src: string;
  title: string;
  text: string;
  characterId: number;
}

export function HeroCard({
  src = "",
  title = "",
  text = "",
  characterId = 0,
}: Props) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    (async () => {
      const likedHeroes =
        (await getData({ type: "local", name: "likedHeroes" })) || [];

      const likedHerosId = likedHeroes.map((value: Props) => value.characterId);
      const heroIsFav = likedHerosId?.includes(characterId);

      setIsLiked(heroIsFav);
    })();
  }, []);

  const handleSaveLikedHero = async () => {
    let newLikedHeroesValue = [];
    const likedHeroes =
      (await getData({ type: "local", name: "likedHeroes" })) || [];

    const likedHerosId = likedHeroes.map((value: Props) => value.characterId);
    const heroIsFav = likedHerosId?.includes(characterId);

    if (heroIsFav) {
      setIsLiked(false);
      newLikedHeroesValue = likedHeroes.filter(
        (value: Props) => value.characterId !== characterId
      );
    } else {
      setIsLiked(true);
      newLikedHeroesValue = [...likedHeroes, { src, title, text, characterId }];
    }

    storeData({
      name: "likedHeroes",
      value: newLikedHeroesValue,
      type: "local",
    });
  };

  return (
    <S.Container>
      <S.HeroCardImageContainer>
        <Link href={`/character/${characterId}`} scroll={true}>
          {src && typeof src === "string" && <S.HeroCardImage src={src} fill />}
        </Link>
      </S.HeroCardImageContainer>
      <S.TitleHeroCardContainer>
        <S.TitleHeroCard>
          <Link href={`/character/${characterId}`} scroll={true}>
            {title}
          </Link>
        </S.TitleHeroCard>
        <S.LikeButtonHeroCard onClick={handleSaveLikedHero}>
          {isLiked ? (
            <S.LikedButtonHeroCardIcon />
          ) : (
            <S.LikeButtonHeroCardIcon />
          )}
        </S.LikeButtonHeroCard>
      </S.TitleHeroCardContainer>
      <S.TextDetails>
        <Link href={`/character/${characterId}`} scroll={true}>
          {text}
        </Link>
      </S.TextDetails>
    </S.Container>
  );
}
