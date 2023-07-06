import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../images/Arrow.svg';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dcdbda;
  border-radius: 8px;
  padding: 4px;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  justify-content: space-between;
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
  max-height: 230px;
  overflow: auto;
  min-width: 100%;
`;

const DropdownMenuItem = styled.li`
  padding: 6px;
  cursor: pointer;
  display: flex;
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

const DropdownImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const DropdownSelectedContainer = styled.div`
  display: flex;
  align-items: center;
`;

export interface Option {
  name?: string;
  value?: string;
  imgSrc?: string;
  code?: string;
}

interface DropdownProps {
  options: Option[];
  selected: Option;
  onChange: (value: Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = (option: Option) => {
    onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        <DropdownSelectedContainer>
          {selected?.imgSrc && (
            <DropdownImage src={selected.imgSrc} alt="Flag" />
          )}
          {selected?.name ? <span>{selected.name}</span> : null}
          {selected?.code ? <span>{selected.code}</span> : null}
        </DropdownSelectedContainer>

        <DownArrowIcon>
          <ArrowIcon />
        </DownArrowIcon>
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleValueChange(option)}
            >
              {option.imgSrc && (
                <DropdownImage src={option.imgSrc} alt="Flag" />
              )}
              {option.name && <span>{option.name}</span>}
              {option.code && <span>{option.code}</span>}
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
