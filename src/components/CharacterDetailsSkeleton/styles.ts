import Link from "next/link";

import styled from "styled-components";
import theme from "@/styles/theme";

interface BannerContainerProps {
  url: string;
}

export const BackButton = styled.button`
  background-color: ${theme.colors.red_900_70};
  color: ${theme.colors.light};
  font-size: 1.2rem;
  padding: 4px 10px;
  border: 0;
  position: fixed;
  left: 1rem;
  top: 1rem;
  z-index: 10;
`;
export const BannerContainer = styled.div`
  width: 100%;
  height: 578px;
  position: absolute;
  display: flex;
  align-items: center;
  color: ${theme.colors.light};
  font-size: 36px;
  font-weight: bold;
  background-color: ${theme.colors.gray_500};
`;

export const ProfileContainer = styled.div`
  max-width: calc(1197px + 3rem);
  margin: 0 auto 219px auto;
  padding: 0 1.5rem;
  position: relative;
`;

export const HeroDetailsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  height: 339px;
  border-radius: 30px;
  padding: 20px 100px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

export const HeroImage = styled.img`
  width: 200px;
  height: 212px;
  border-radius: 50%;
  margin-right: 39px;
  margin-left: 100px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    width: 200px;
    height: 212px;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;

export const HeroDetails = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: justify;
  }
`;

export const TitleHeroDetail = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  line-height: 56.25px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-top: 120px;
  color: ${theme.colors.light};
  margin-bottom: 80px;
`;
export const HeroName = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;
  margin-bottom: 22px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 20px;
  color: ${theme.colors.black_1000};
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ComicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 51px;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: ${theme.colors.black_1000};

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const ComicCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 263.06px;

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 30px;
    height: auto;
    padding: 20px;
  }
`;

export const ComicImage = styled.img`
  width: 248px;
  height: 263.06px;
  border-radius: 30px 0px 0px 30px;
  margin-right: 54px;

  @media (max-width: 768px) {
    width: 200px;
    height: 212px;
    border-radius: 50%;
    margin-right: auto;
    margin-left: auto;
    transition: transform 0.3s ease;
    display: block;
  }
`;

export const ComicDetails = styled.div`
  text-align: left;
  flex-grow: 1;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ComicName = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 35px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

export const ComicReleaseDate = styled.p`
  font-size: 18px;
  color: ${theme.colors.black_1000};
  line-height: 21px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ComicPageCount = styled.p`
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
  color: ${theme.colors.black_1000};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ComicDescription = styled.p`
  font-size: 18px;
  color: ${theme.colors.black_1000};
  margin-top: 10px;
  font-weight: 400;
  margin-bottom: 24px;
  line-height: 24px;
  margin-right: 100px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 0;
  }
`;
