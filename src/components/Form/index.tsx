import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Dropdown, { Option } from '../Dropdown';
import UkFlag from '../../images/En-Flag.svg';
import DeFlag from '../../images/De-Flag.svg';
import PhoneInput from './PhoneInput';
import { languageOptions } from '../../data/languageOptions';

const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #DCDBDA;
  background: #FFF;
  padding: 5px;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  border-radius: 8px;
  border: 1px solid #DCDBDA;
  background: #FFF;
  padding: 10px 20px;
  margin-top: 10px;
`;



const FormTopFields = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
`;

const FormComponent = () => {
    const [selectedLanguage, setSelectedLanguage] = React.useState<Option>({
        value: 'English',
        flag: UkFlag,
        label: 'English',
        code: '+44',
      });

    const modifiedOptions = languageOptions.map(option => ({
    value: option.value,
    code: option.code,
    flag: option.flag,
    }));

    const handleLanguageChange = (value: Option) => {
    setSelectedLanguage(value);
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        
        console.log('Form data submitted:', formData);
        
        setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
        });
    };

    return (
        <FormLayout onSubmit={handleSubmit}>
            <FormTopFields>
        <FormField>
            <label htmlFor="firstName">First Name:</label>
            <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            />
        </FormField>
        <FormField>
            <label htmlFor="lastName">Last Name:</label>
            <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            />
        </FormField>
        </FormTopFields>
        <PhoneInput
            formData={formData}
            handleChange={handleChange}
            languageOptions={modifiedOptions}
            selectedLanguage={selectedLanguage}
            handleLanguageChange={handleLanguageChange}
        />
        <button type="submit">Submit</button>

        </FormLayout>
    );
};

export default FormComponent;
