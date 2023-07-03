import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { Option } from '../Dropdown';
import UkFlag from '../../images/En-Flag.svg';
import PhoneInput from './PhoneInput';
import EmployeeControl from './EmployeeControl';
import InvitationCodeControl from './InvitationCodeControl';
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

export const Input = styled.input`
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

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Checkbox = styled.input`
  margin-right: 8px;
`

const FormComponent = () => {
    const [selectedLanguage, setSelectedLanguage] = React.useState<Option>({
        value: 'English',
        flag: UkFlag,
        label: 'English',
        code: '+44',
      });
    const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false);

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
        email: '',
        company: '',
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
            email: '',
            company: '',
        });
    };

    const validateEmail = (email: string) => {
        return email.includes('@');
    };

    const handlePrivacyPolicyChange = () => {
      setAcceptPrivacyPolicy(!acceptPrivacyPolicy);
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
        <FormField>
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {!validateEmail(formData.email) && (
          <ErrorMessage>Please enter a valid email address.</ErrorMessage>
        )}
      </FormField>
      <FormField>
        <label htmlFor="company">Company Name:</label>
        <Input
        type="text"
        id="company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        />
      </FormField>
      <EmployeeControl />
      <CheckboxContainer>
      <Checkbox
          type="checkbox"
          checked={acceptPrivacyPolicy}
          onChange={handlePrivacyPolicyChange}
        />
        <label htmlFor="privacyPolicy">Accept the Moss <a href="https://getmoss.com/public/terms-and-conditions/20220815_Privacy_Policy_of_Nufin_GmbH.pdf?utm_campaign=brand-de&utm_source=google&utm_medium=paidsearch&utm_content=search-ad&utm_term=get%20moss">Privacy Policy</a></label>
      </CheckboxContainer>
      <InvitationCodeControl/>
        <button type="submit">Submit</button>

        </FormLayout>
    );
};

export default FormComponent;
