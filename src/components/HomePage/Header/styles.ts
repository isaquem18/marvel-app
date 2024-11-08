"use client";
import theme from "@/styles/theme";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.header`
  width: 100%;
  padding-top: 182px;
  padding-bottom: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  color: ${theme.colors.gray_900};
  line-height: 100%;
`;

export const SubTitle = styled.h2`
  font-family: Roboto;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  color: ${theme.colors.gray_900};
  opacity: 0.6;
  margin-top: 1.5rem;
  line-height: 100%;
`;

export const SearchInputContainer = styled.div`
  background-color: ${theme.colors.pink_300_20};
  width: 100%;
  max-width: 780px;
  height: 75px;
  padding: 22px 48px;
  gap: 48px;
  border-radius: 100px;
  margin-top: 64px;
  display: flex;
`;

export const SearchInput = styled.input.attrs({
  placeholder: "Procure por heróis",
})`
  flex: 1;
  height: 100%;
  font-size: 1.5rem;
  color: ${theme.colors.pink_300_80};
  background-color: transparent;
  border: 0;
  outline: none;

  &::placeholder {
    color: ${theme.colors.pink_300_80};
  }
`;

export const SearchIcon: React.FC = styled(Image).attrs({
  src: "/icons/search.svg",
  quality: 100,
  priority: true,
  alt: "search icon from input",
  width: 30,
  height: 30,
  style: {
    objectFit: "contain",
  },
})``;
