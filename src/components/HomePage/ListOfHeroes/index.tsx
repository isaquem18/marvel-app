import { HeroCard } from "./HeroCard";
import * as S from "./styles";

export function ListOfHeroes() {
  return (
    <S.Container>
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
    </S.Container>
  );
}
