import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 24px;
`;

export const DropdownButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 5px;

  z-index: 1;
`;

export const DropdownOption = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  width: 100%;
  background-color: #f1f1f1;

  &:hover {
    background-color: grey;
  }
`;
