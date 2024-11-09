"use client";
import * as S from "./styles";
import { Header } from "./Header";
import { ListOfHeroes } from "./ListOfHeroes";
import { Footer } from "@/components/Footer";

export function HomePage() {
  return (
    <>
      <S.Container>
        <S.ContainerContent>
          <Header />
          <ListOfHeroes />
        </S.ContainerContent>
      </S.Container>
      <Footer />
    </>
  );
}
