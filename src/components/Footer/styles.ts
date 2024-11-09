"use client";
import theme from "@/styles/theme";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.footer`
  width: 100%;
  height: 82px;
  background-color: ${theme.colors.gray_950};
`;

export const ContainerContent = styled.footer`
  max-width: 1197px;
  height: 82px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextLeft = styled.p`
  font-size: 1.5rem;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 23.44px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${theme.colors.light};
`;
export const TextRight = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 23.44px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${theme.colors.light};

  span {
    color: ${theme.colors.gray_500};
  }
`;
