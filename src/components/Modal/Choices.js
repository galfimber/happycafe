import React from "react";
import styled from "styled-components";

const ChoiceWrap = styled.div`
  column-count: 2;
  column-gap: 10px;
`;

const ChoiceRadio = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;

const ChoiceLabel = styled.label`
  display: block;
  cursor: pointer;
`;

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <h3>Выбирайте:</h3>
      <ChoiceWrap>
        {openItem.choices.map((item, i) => (
          <ChoiceLabel key={i}>
            <ChoiceRadio
              type="radio"
              name="choices"
              checked={choice === item}
              value={item}
              onChange={changeChoices}
            />
            {item}
          </ChoiceLabel>
        ))}
      </ChoiceWrap>
    </>
  );
}
