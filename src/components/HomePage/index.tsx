"use client";
import * as S from "./styles";
import { Header } from "./Header";
import { ListOfHeroes } from "./ListOfHeroes";
import { Footer } from "@/components/Footer";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigationData } from "@/context/NavigationData";

export function HomePage() {
  const { scrollYPosition } = useNavigationData();

  useLayoutEffect(() => {
    window.scrollTo(0, scrollYPosition.current);
  }, []);

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
