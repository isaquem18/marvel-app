"use client";
import Link from "next/link";

import * as S from "./styles";

interface Props {
  src: string;
  title: string;
  text: string;
  characterId: number;
}

export function FavoriteHeroCard({
  src = "",
  title = "",
  text = "",
  characterId = 0,
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
        <S.LikeButtonHeroCard>
          <S.LikedButtonHeroCardIcon />
        </S.LikeButtonHeroCard>
      </S.TitleHeroCardContainer>
      <S.TextDetails>
        <Link href={`/character/${characterId}`}>{text}</Link>
      </S.TextDetails>
    </S.Container>
  );
}
