import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  position: absolute;
  z-index: 1;
`;

const DropdownOption = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

function Dropdown({ options, onSelect }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const handleOptionClick = option => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleClick}>
        Select an option &#9662;
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          {options.map(option => (
            <DropdownOption
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropdownOption>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
