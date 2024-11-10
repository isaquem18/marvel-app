"use client";
import { useCallback, useState } from "react";
import { useNavigationData } from "@/context/NavigationData";
import throttle from "lodash.throttle";
import * as S from "./styles";

export function Header() {
  const { setSearchHeroValue, throttledSearchValue, setThrottledSearchValue } =
    useNavigationData();

  // Função throttled para atualizar o valor com limite de 500ms
  const updateThrottledValue = useCallback(
    throttle((value: string) => {
      setSearchHeroValue(value);
    }, 1500),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setThrottledSearchValue(value);
    updateThrottledValue(value);
  };

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
          value={throttledSearchValue}
          onChange={(tag) => handleChange(tag)}
        />
      </S.SearchInputContainer>
    </S.Container>
  );
}
