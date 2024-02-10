import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import { ListItem } from "./ListItem";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  padding: 30px 0;
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

export const Menu = () => (
  <MenuStyled>
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
