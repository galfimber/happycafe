import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import { NavBar } from "./components/NavBar";
import { Menu } from "./components/Menu";
import { ModatItem } from "./components/ModalItem";
import { Order } from "./components/Order";

function App() {
  const [openItem, setOpenItem] = React.useState(null);

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu setOpenItem={setOpenItem} />
      <ModatItem openItem={openItem} setOpenItem={setOpenItem} />
    </>
  );
}

export default App;
