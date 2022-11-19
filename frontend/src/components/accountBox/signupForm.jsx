import React, { useContext, useState } from "react";
import axios from "axios";
import validator from 'validator'
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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [input, setInput] = useState({
    fullName: "",
    regNo: "",
    mobileNum: "",
    email: ""
  })

  function handleChange(event){
    const {name,value} = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event){
    console.log(input);

    const newStudent = {
      fullName: input.fullName ,
      regNo: input.regNo ,
      mobileNum: input.mobileNum ,
      email: input.email
    }

    axios.post("http://localhost:3001/", newStudent);
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input onChange={handleChange} type="text" name="fullName" value={input.fullName} id="name" placeholder="Full Name" />
        <Input onChange={handleChange} type="text" name="regNo" value={input.regNo} id="reg" maxLength={9} placeholder="Registration Number" />
        <Input onChange={handleChange} type="mobile-number" name="mobileNum" value={input.mobileNum} id="mobile" maxLength={10} placeholder="Mobile Number" />
        <Input onChange={handleChange} type="e-mail" name="email" value={input.email} id="email" placeholder="E-Mail ID" />
      </FormContainer>
      <Marginer direction="vertical" margin={20} />
      <SubmitButton type="submit" href="#" onClick={function(event){ switchToSignin(); handleClick()}}>Register</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}