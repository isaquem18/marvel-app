"use client";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px; /* Espaçamento entre os itens */
  padding: 16px;
`;
