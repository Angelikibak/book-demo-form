import React, { useState } from 'react';
import styled from 'styled-components';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const OptionsContainer = styled.div`
  display: flex;
  background-color: #F0F0F0;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 8px;
  
  &::after {
    content: '';
    width: 1px;
    background-color: #ccc;
    margin: 0 8px;
  }
`;

const Option = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? 'white' : 'transparent')};
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  text-align: center;
  width: 20%;
`;

const VerticalLine = styled.div`
    width: 1px;
    background-color: #DCDBDA;
    height: 30px;
    float: left;
`;

const EmployeeControl = () => {
  const [selectedEmployees, setSelectedEmployees] = useState<string>('');

  const handleSelectEmployees = (value: string) => {
    setSelectedEmployees(value);
  };

  return (
    <ControlContainer>
        <Label>Number of Employees</Label>
        <OptionsContainer>
            <Option
                selected={selectedEmployees === '1-10'}
                onClick={() => handleSelectEmployees('1-10')}
            >
                1-10
            </Option>
            <VerticalLine />
            <Option
                selected={selectedEmployees === '11-50'}
                onClick={() => handleSelectEmployees('11-50')}
            >
                11-50
            </Option>
            <VerticalLine />
            <Option
                selected={selectedEmployees === '51-100'}
                onClick={() => handleSelectEmployees('51-100')}
            >
                51-100
            </Option>
            <VerticalLine />
            <Option
                selected={selectedEmployees === '100+'}
                onClick={() => handleSelectEmployees('100+')}
            >
                100+
            </Option>
        </OptionsContainer>
    </ControlContainer>
  );
};

export default EmployeeControl;
