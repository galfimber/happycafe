import React from "react";
import { GlobalStyle } from "./components/Style/GlobalStyle";
import { NavBar } from "./components/NavBar/NavBar";
import { Menu } from "./components/Menu/Menu";
import { ModatItem } from "./components/Modal/ModalItem";
import { Order } from "./components/Order/Order";
import { useOpenItem } from "./components/Hooks/useOpenItem";
import { useOrders } from "./components/Hooks/useOrders";

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order {...orders} />
      <Menu {...openItem} />
      {openItem.openItem && <ModatItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
