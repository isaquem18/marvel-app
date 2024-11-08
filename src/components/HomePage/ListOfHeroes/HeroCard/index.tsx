import * as S from "./styles";

export function HeroCard({
  src = "https://cdn.awsli.com.br/800x800/1610/1610163/produto/177684974/poster-o-espetacular-homem-aranha-2-g-ebc6cbb4.jpg",
  title = "Captain Americaaaaa ijdiejd",
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.",
}) {
  return (
    <S.Container>
      <S.HeroCardImageContainer>
        <S.HeroCardImage src={src} fill />
      </S.HeroCardImageContainer>
      <S.TitleHeroCardContainer>
        <S.TitleHeroCard>{title}</S.TitleHeroCard>
        <S.LikeButtonHeroCard>
          <S.LikeButtonHeroCardIcon />
        </S.LikeButtonHeroCard>
      </S.TitleHeroCardContainer>
      <S.TextDetails>{text}</S.TextDetails>
    </S.Container>
  );
}
