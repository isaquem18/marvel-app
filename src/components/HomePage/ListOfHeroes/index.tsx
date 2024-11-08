import { HeroCard } from "./HeroCard";
import * as S from "./styles";
interface Props {
  data: MarvelData;
  isLoading: boolean;
}

export function ListOfHeroes({ data, isLoading }: Props) {
  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <S.Container>
      {data?.results &&
        data?.results?.map((item) => (
          <HeroCard
            key={item?.id}
            characterId={item?.id}
            src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
            title={item?.name}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit."
          />
        ))}
    </S.Container>
  );
}
