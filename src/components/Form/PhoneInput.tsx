import React from 'react';
import styled from 'styled-components';
import Dropdown, { Option } from '../Dropdown';
import InputMask from 'react-input-mask';
import { ErrorMessage } from './index';

const FormField = styled.div`
  margin-bottom: 10px;
`;

const MaskedInput = styled(InputMask)`
  border-radius: 8px;
  border: 1px solid #DCDBDA;
  background: #FFF;
  padding: 5px;
`;

const PhoneInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
      button {
        border-radius: 8px;
        border: 1px solid #DCDBDA;
      }
`;

interface PhoneInputProps {
  formData: {
    phoneNumber: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  languageOptions: Option[];
  selectedLanguage: Option;
  handleLanguageChange: (option: Option) => void;
  phoneNumberError: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  formData,
  handleChange,
  languageOptions,
  selectedLanguage,
  handleLanguageChange,
  phoneNumberError
}) => {
  
  return (
    <FormField>
      <label htmlFor="phoneNumber">Mobile Phone:</label>
      <PhoneInputContainer>
      <Dropdown options={languageOptions} value={selectedLanguage} onChange={handleLanguageChange} />
      <MaskedInput
        mask="(999) 999-9999"
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="(000) 000-0000"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      </PhoneInputContainer>
      {phoneNumberError && <ErrorMessage>{phoneNumberError}</ErrorMessage>}
    </FormField>
  );
};

export default PhoneInput;
