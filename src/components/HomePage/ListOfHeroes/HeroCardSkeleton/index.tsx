import * as S from "./styles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export function HeroCardSkeleton() {
  return (
    <SkeletonTheme baseColor="#cbcbcb" highlightColor="#a6a6a6">
      <S.Container>
        <S.HeroCardImageContainer>
          <Skeleton style={{ flex: 1, height: "100%", width: "100%" }} />
        </S.HeroCardImageContainer>
        <S.TitleHeroCardContainer>
          <S.TitleHeroCard>
            <Skeleton style={{ flex: 1, width: "100%" }} />
          </S.TitleHeroCard>
          <S.LikeButtonHeroCard>
            <S.LikeButtonHeroCardIcon />
          </S.LikeButtonHeroCard>
        </S.TitleHeroCardContainer>
        <S.TextDetails>
          <Skeleton style={{ flex: 1, width: "100%" }} count={3} />
        </S.TextDetails>
      </S.Container>
    </SkeletonTheme>
  );
}
