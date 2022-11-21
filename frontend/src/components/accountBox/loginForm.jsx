import React, { useContext } from "react";
import {Ticket} from './ticket';
import styled from "styled-components";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";


const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  z-index: 10;
  margin: 0;
  margin-top: 4px;
`;

const MedText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 10px;
  z-index: 10;
  margin: 0;
  margin-top: 4px;
`;

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <HeaderContainer>
        <HeaderText>See you there</HeaderText>
        <Ticket />
      </HeaderContainer>
    </BoxContainer>
  );
}
