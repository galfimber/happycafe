import React from "react";

export const totalPriceItems = (order) => {
  const countTopping =
    order.topping && order.topping.filter((item) => item.checked).length;

  const priceTopping = 20 * countTopping;

  return (order.price + priceTopping) * order.count;
};

export const formatCurrency = (price) =>
  price.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
