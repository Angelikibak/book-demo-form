import React, { ChangeEvent } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledSelect = styled.select``

export interface Option {
    value?: string;
    label?: string;
    code?: string;
    flag?: string;
  }

interface DropdownProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({options, value, onChange}) => {
    const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
      };

    return (
        <StyledSelect value={value} onChange={handleValueChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.flag}
                    {option.label}
                    {option.code}
                </option>
            ))}
        </StyledSelect>
    )
}

export default Dropdown;