import Link from "next/link";

import styled from "styled-components";
import theme from "@/styles/theme";
import Image from "next/image";

interface BannerContainerProps {
  url: string;
}

export const BackLink = styled(Link)`
  text-align: left;
  color: ${theme.colors.light};
  font-size: 1.5rem;
  position: fixed;
  left: 1rem;
  top: 1rem;
  z-index: 10;
`;

export const BackButton = styled.button`
  background-color: ${theme.colors.red_900_70};
  color: ${theme.colors.light};
  font-size: 1rem;
  padding: 4px 10px;
  border: 0;
`;

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px; /* Espaçamento entre os itens */
`;

export const TitleFavoritesPage = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  line-height: 56.25px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-top: 120px;
  color: ${theme.colors.black_1000};
  margin-bottom: 80px;
`;

export const ProfileContainer = styled.div`
  flex: 1;
  max-width: calc(1197px + 3rem);
  height: calc(100vh - 82px);
  margin: 0 auto 0 auto;
  padding: 0 1.5rem;
  position: relative;
`;
