import React from "react";
import styled from "styled-components";
import trash from "../../img/trash.svg";
import { totalPriceItems } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";
import { Choices } from "../Modal/Choices";

const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
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

const ItemName = styled.span`
  flex-grow: 1;
`;

const Topping = styled.span`
  width: 100%;
  font-size: 14px;
  color: #9a9a9a;
`;

const Choice = styled.span`
  width: 100%;
  font-size: 14px;
  color: #9a9a9a;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
`;

export const OrderListItem = ({ order, index, deleteItem }) => {
  const topping = order.topping
    .filter((item) => item.checked)
    .map((item) => item.name)
    .join(", ");

  return (
    <OrderItemStyled>
      <ItemName>{order.name}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
      <TrashButtom onClick={() => deleteItem(index)} />
      <Topping>{topping}</Topping>
      <Choice>{order.choice}</Choice>
    </OrderItemStyled>
  );
};
