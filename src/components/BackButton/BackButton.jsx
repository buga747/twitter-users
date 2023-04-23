import React from 'react';
import PropTypes from 'prop-types';
import { BackButtonStyled } from './BackButton.styled';

export function BackButton({ text }) {
  return <BackButtonStyled to="/">{text}</BackButtonStyled>;
}

BackButton.propTypes = {
  text: PropTypes.string.isRequired,
};
