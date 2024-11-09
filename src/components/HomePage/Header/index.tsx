import { useNavigationData } from "@/context/NavigationData";
import * as S from "./styles";

export function Header() {
  const { searchHeroValue, setSearchHeroValue } = useNavigationData();
  return (
    <S.Container>
      <S.Title>EXPLORE O UNIVERSO E CRIE SUA EQUIPE</S.Title>
      <S.SubTitle>
        Os melhores personagens já feitos em quadrinhos. Fique viciado em uma
        generosa porção de heróis e vilões!
      </S.SubTitle>
      <S.SearchInputContainer>
        <S.SearchIcon />
        <S.SearchInput
          value={searchHeroValue}
          onChange={(tag) => setSearchHeroValue(tag.target.value)}
        />
      </S.SearchInputContainer>
    </S.Container>
  );
}
