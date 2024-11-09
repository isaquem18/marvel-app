import Link from "next/link";

import * as S from "./styles";

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
  characterId,
}: Props) {
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
        <S.LikeButtonHeroCard>
          <S.LikeButtonHeroCardIcon />
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
