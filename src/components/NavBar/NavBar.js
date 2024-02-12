import React from "react";
import styled from "styled-components";
import logoImg from "../../img/logo.svg";
import logoSignIn from "../../img/sign.svg";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const SignInButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  border: none;
`;

const SignInImg = styled.img`
  width: 32px;
`;

const SignInText = styled.div`
  font-size: 14px;
  color: #fff;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo"></ImgLogo>
      <H1>HappyCafe</H1>
    </Logo>
    <SignInButton>
      <SignInImg src={logoSignIn} alt="SignIn"></SignInImg>
      <SignInText>Войти</SignInText>
    </SignInButton>
  </NavBarStyled>
);
