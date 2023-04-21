import React from 'react';
import { BackButtonStyled } from './BackButton.styled';

export function BackButton({ text }) {
  return <BackButtonStyled to="/">{text}</BackButtonStyled>;
}
