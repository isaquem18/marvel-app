import * as S from "./styles";

export function Footer() {
  return (
    <S.Container>
      <S.ContainerContent>
        <S.TextLeft>Data provided by Marvel. © 2023 MARVEL</S.TextLeft>
        <S.TextRight>
          Desenvolvido por <span>Anna Luiza</span>
        </S.TextRight>
      </S.ContainerContent>
    </S.Container>
  );
}
