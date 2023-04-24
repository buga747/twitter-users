import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ButtonUp.styled';

export const ButtonUp = ({ handleUpButtonClick }) => {
  return (
    <Button onClick={handleUpButtonClick}>
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
  );
};
