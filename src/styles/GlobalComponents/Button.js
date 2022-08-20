import React from 'react';
import { ButtonBack, ButtonFront, SendButtonBack, SendButtonFront } from './index';

export const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <a href="#contact">
      <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
    </a>
  </ButtonBack>
);

export const SendButton = (props) => (
  <SendButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <SendButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</SendButtonFront>
  </SendButtonBack>
)
