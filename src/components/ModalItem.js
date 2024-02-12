import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "./ButtonCheckout";

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const ModalImg = styled.div`
  height: 200px;
  width: 100%;
  flex-shrink: 0;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
`;

const ModalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModatItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <ModalImg img={openItem.img} />
        <ModalBody>
          <ModalInfo>
            <h2>{openItem.name}</h2>
            <h3>
              {openItem.price.toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
              })}
            </h3>
          </ModalInfo>
          <ButtonCheckout>Добавить</ButtonCheckout>
        </ModalBody>
      </Modal>
    </Overlay>
  );
};
