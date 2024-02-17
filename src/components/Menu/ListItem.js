import React from "react";
import styled from "styled-components";
import { formatCurrency } from "../Functions/secondaryFunction";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding-top: 30px;
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  padding: 15px;
  font-size: 30px;
  color: white;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 30%;
    z-index: -1;
    transition: opacity 0.1s ease-in;
  }
  &:hover {
    cursor: pointer;
    &:after {
      opacity: 60%;
    }
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map((item) => (
      <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
        <p>{item.name}</p>
        <p>
          {formatCurrency(item.price)}
        </p>
      </Item>
    ))}
  </List>
);
