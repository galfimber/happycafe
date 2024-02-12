import React from "react";
import styled from "styled-components";
import trash from "../../img/trash.svg";

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;

const TrashButtom = styled.button`
  width: 24px;
  heigth: 24px;
  background-color: transparent;
  background-image: url(${trash});
  border: none;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-rigth: 10px;
  min-width: 65px;
  text-align: rigth;
`;

export const OrderListItem = ({ order }) => (
  <OrderItemStyled>
    <ItemName>{order.name}</ItemName>
    <span>2</span>
    <ItemPrice>
      {order.price.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
      })}
    </ItemPrice>
    <TrashButtom />
  </OrderItemStyled>
);
