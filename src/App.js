import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GlobalStyle } from "./components/Style/GlobalStyle";
import { NavBar } from "./components/NavBar/NavBar";
import { Menu } from "./components/Menu/Menu";
import { ModatItem } from "./components/Modal/ModalItem";
import { Order } from "./components/Order/Order";
import { useOpenItem } from "./components/Hooks/useOpenItem";
import { useOrders } from "./components/Hooks/useOrders";
import { useAuth } from "./components/Hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyBbyYtHRS7KwN9mqU6RmGq7CG5ipHhXdgk",
  authDomain: "happycafe-8c160.firebaseapp.com",
  databaseURL:
    "https://happycafe-8c160-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "happycafe-8c160",
  storageBucket: "happycafe-8c160.appspot.com",
  messagingSenderId: "218871162823",
  appId: "1:218871162823:web:e9af9e59c9bfb246c69be2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

function App() {
  const authentification = useAuth(auth);

  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...authentification} />
      <Order {...orders} {...openItem} {...authentification} />
      <Menu {...openItem} />
      {openItem.openItem && <ModatItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
