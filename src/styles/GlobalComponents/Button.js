import React from 'react';
import {ButtonBack, ButtonFront, SendButtonBack, SendButtonFront, SmallerButtonBack} from './index';

export const Button = (props) => (
  <ButtonBack link={props.link} alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <a href={props.link}>
      <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
    </a>
  </ButtonBack>
);

export const SmallerButton = (props) => (
  <SmallerButtonBack link={props.link} alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <a href={props.link}>
      <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
    </a>
  </SmallerButtonBack>
);

export const SendButton = (props) => (
  <SendButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <SendButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</SendButtonFront>
  </SendButtonBack>
)
