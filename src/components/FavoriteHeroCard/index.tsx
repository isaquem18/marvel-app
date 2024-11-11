"use client";
import Link from "next/link";

import * as S from "./styles";

interface Props {
  src: string;
  title: string;
  text: string;
  characterId: number;
  handleDeleteFavorite: (n: number) => void;
}

export function FavoriteHeroCard({
  src = "",
  title = "",
  text = "",
  characterId = 0,
  handleDeleteFavorite,
}: Props) {
  return (
    <S.Container>
      <S.HeroCardImageContainer>
        <Link href={`/character/${characterId}`}>
          {src && typeof src === "string" && <S.HeroCardImage src={src} fill />}
        </Link>
      </S.HeroCardImageContainer>
      <S.TitleHeroCardContainer>
        <S.TitleHeroCard>
          <Link href={`/character/${characterId}`}>{title}</Link>
        </S.TitleHeroCard>
        <S.LikeButtonHeroCard onClick={() => handleDeleteFavorite(characterId)}>
          <S.TrashButtonHeroCardIcon />
        </S.LikeButtonHeroCard>
      </S.TitleHeroCardContainer>
      <S.TextDetails>
        <Link href={`/character/${characterId}`}>{text}</Link>
      </S.TextDetails>
    </S.Container>
  );
}
