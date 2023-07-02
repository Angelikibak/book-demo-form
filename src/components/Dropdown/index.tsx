import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../images/Arrow.svg"; 

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #ccc;
  border-radius: 4px;
  `

const DropdownMenuItem = styled.li`
  padding: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  &:hover {
    background-color: #f0f0f0;
  }
  span {
    margin: 0 1px 1px 0;
    }
`;

const DownArrowIcon = styled.span`
  margin-left: 8px;
`;

export interface Option {
  value?: string;
  label?: string;
  code?: string;
  flag?: string;
}

interface DropdownProps {
  options: Option[];
  value: Option;
  onChange: (value: Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = (option: Option) => {
    onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const filteredOptions = options.filter((option) => option.value !== value.value);

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {value.flag && <img src={value.flag} alt="Flag" />}
        { value.code ? <span>{value.code}</span> : null }
        <DownArrowIcon>
          <ArrowIcon />
        </DownArrowIcon>
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {filteredOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleValueChange(option)}
            >
              {option.flag && <img src={option.flag} alt="Flag" />}
              <span>{option.label}</span>
              <span>{ option.code ? <span>{option.code}</span> : null }</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
