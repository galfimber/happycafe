import React from "react";
import styled from "styled-components";
import trash from "../../img/trash.svg";
import { totalPriceItems } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";
import { totalToppings } from "../Functions/secondaryFunction";

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;

const TrashButtom = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url(${trash});
  border: none;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ItemName = styled.span``;

const ItemTopping = styled.span`
  font-size: 14px;
  color: #9a9a9a;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-rigth: 10px;
  min-width: 65px;
  text-align: rigth;
`;

export const OrderListItem = ({ order }) => (
  <OrderItemStyled>
    <ItemInfo>
      <ItemName>{order.name}</ItemName>
      <ItemTopping>{totalToppings(order).join(", ")}</ItemTopping>
    </ItemInfo>
    <span>{order.count}</span>
    <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
    <TrashButtom />
  </OrderItemStyled>
);
