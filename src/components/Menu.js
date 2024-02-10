import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import { ListItem } from "./ListItem";
import Banner from "../img/banner.png";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

const SectionMenu = styled.section`
  padding-bottom: 30px;
  &:last-child {
    padding-bottom: 0;
  }
`;

const BannerImg = styled.div`
  width: 100%;
  height: 210px;
  background-image: url(${Banner});
  background-size: cover;
  background-position: center;
`;

export const Menu = () => (
  <MenuStyled>
    <BannerImg></BannerImg>
    <Container>
      <SectionMenu>
        <h2>Бургеры</h2>
        <ListItem itemList={dbMenu.burger} />
      </SectionMenu>
      <SectionMenu>
        <h2>Закуски / Напитки</h2>
        <ListItem itemList={dbMenu.other} />
      </SectionMenu>
    </Container>
  </MenuStyled>
);
