"use client";
import * as S from "./styles";
import { Header } from "./Header";
import { ListOfHeroes } from "./ListOfHeroes";
import { Footer } from "@/components/Footer";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigationData } from "@/context/NavigationData";

export function HomePage() {
  const { scrollYPosition } = useNavigationData();
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, scrollYPosition.current);

    setIsReady(true);
  }, []);

  return (
    <>
      <S.Container
        style={{
          visibility: isReady ? "visible" : "hidden", // Controla a visibilidade inicial
        }}
      >
        <S.ContainerContent>
          <Header />
          <ListOfHeroes />
        </S.ContainerContent>
      </S.Container>
      <Footer />
    </>
  );
}
