import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface CheckboxProps {
  input: ReactNode // input of type radio or checkbox
}

export const CheckboxO: FC<CheckboxProps> = (props) => {
  return (
    <LabelO>
      {props.input}
      {props.children}
      <span><div/></span>
    </LabelO>
  )
}

export const CheckboxV: FC<CheckboxProps> = (props) => {
  return (
    <LabelV>
      {props.input}
      {props.children}
      <span><div/></span>
    </LabelV>
  )
}

const Label = styled.label`
  position: relative;
  padding-left: 1.5em;
  cursor: pointer;

  & > input {
    width: 0;
    height: 0;
    opacity: 0;

    &:focus ~ span {
      outline: 2px solid #002B56;
    }
  }

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    height: 1em;
    width: 1em;
    background-color: #ffffff;
    border-radius: 50%;
    border: 1px solid #C8C8C8;
  }
`

const LabelO = styled(Label)`
  & > input:checked ~ span > div {
    position: absolute;
    top: 0.25em;
    left: 0.25em;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background: #002B56;
  }
`

const LabelV = styled(Label)`
  & > input:checked ~ span {
    background: #002B56;
  }

  & > input:checked ~ span > div {
    position: absolute;
    top: 0.2em;
    left: 0.3em;
    width: 0.2em;
    height: 0.4em;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
  }
`
