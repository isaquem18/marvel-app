"use client";
import theme from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  flex: 1;
  height: 338px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.gray_600};
  padding: 1rem;
`;

export const HeroCardImageContainer = styled.div`
  width: 100%;
  height: 169px;
  border-radius: 8px;
  background-color: red;
  position: relative;
  overflow: hidden;
`;

export const HeroCardImage: React.FC = styled(Image).attrs({
  quality: 10,
  priority: true,
  alt: "search icon from input",
  style: {
    objectFit: "cover",
  },
})``;

export const TitleHeroCardContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0px 22px 0px;
`;

export const TitleHeroCard = styled.div`
  flex: 1;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 28.13px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LikeButtonHeroCard = styled.button`
  border: 0;
  padding: 2px 10px;
  background-color: transparent;

  &:active {
    opacity: 0.5;
  }
`;

export const LikeButtonHeroCardIcon: React.FC = styled(Image).attrs({
  src: "/icons/like.svg",
  quality: 100,
  priority: true,
  alt: "search icon from input",
  width: 22,
  height: 20,
  style: {
    objectFit: "contain",
  },
})``;

export const TextDetails = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 18.75px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${theme.colors.gray_900};
`;
