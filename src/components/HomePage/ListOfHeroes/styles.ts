"use client";
import theme from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px; /* Espaçamento entre os itens */
`;

export const HeroListTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 45px;
`;

export const FoundHeroes = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 28.13px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${theme.colors.gray_500_60};
  display: flex;
  align-items: center;
`;

export const FavoritesOnlyButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${theme.colors.gray_500_60};
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 28.13px;
  display: flex;
  align-items: center;
  color: ${theme.colors.red_900_70};
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.03);
  }
  &:active {
    opacity: 0.6;
  }
`;

export const LikeImageIcon: React.FC = styled(Image).attrs({
  src: "/icons/liked.svg",
  quality: 10,
  priority: true,
  alt: "favorite heroes only",
  width: 30,
  height: 26.26,
  style: {
    objectFit: "contain",
  },
})`
  margin: 0px 20px 0px 16px;
`;
