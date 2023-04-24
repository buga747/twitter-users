import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  DropdownOption,
} from './DropDownMenu.styled';

export const Dropdown = ({ options, value, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => setIsOpen(!isOpen);

  const handleOptionClick = option => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={handleClick}>
        Select users to show:{' '}
        {options.find(option => option.value === value)?.label}
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          {options.map(option => (
            <DropdownOption
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </DropdownOption>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
