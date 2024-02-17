import React from "react";
import styled from "styled-components";
import trash from "../../img/trash.svg";
import { totalPriceItems } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";

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
    <span>{order.count}</span>
    <ItemPrice>
      {formatCurrency(totalPriceItems(order))}
    </ItemPrice>
    <TrashButtom />
  </OrderItemStyled>
);
