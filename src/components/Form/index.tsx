import React, { useState, useEffect, ChangeEvent, FormEvent  } from 'react';
import styled from 'styled-components';
import Dropdown, { Option } from '../Dropdown';
import UkFlag from '../../images/En-Flag.svg';
import PhoneInput from './PhoneInput';
import EmployeeControl from './EmployeeControl';
import InvitationCodeControl from './InvitationCodeControl';
import { languageOptions } from '../../data/languageOptions';
import { getCountries } from '../../service/Country/Country'
import { phoneCountryTrans, getCountryNames } from '../../transform/Country';

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
  width: 100%;
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #DCDBDA;
  background: #FFF;
  padding: 15px;
  margin-top: 5px;

  &:hover {
    bog-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }
`;

const FormTopFields = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
`;

export const ErrorMessage = styled.span`
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
const Button = styled.button`
  border-radius: 8px;
  border: none;
  color: #fff;
  background: #3A5F51;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  height: 40px;
  align-self: flex-end;
    &:hover {
    background: #456E5E;
    box-shadow: 0px 2px 4px rgba(0,0,0,.02)
  }
`;

const Form = ({ onFormFilled }: { onFormFilled: () => void }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<Option>({
    });
    const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false);
    const [modifiedOptions, setModifiedOptions] = useState<Option[]>([{
    }]);
    const [incorporationCountry, setIncorporationCountry] = useState<Option>({
    });
    const [countries, setCountries] = useState([]);
    const [submitted, setSubmitted] = useState(false);


    const handleLanguageChange = (value: Option) => {
    setSelectedLanguage(value);
    };

    const handleCountryChange = (value: Option) => {
      setIncorporationCountry(value)
    }

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        company: '',
        privacyPolicy: ''
    });

    const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      privacyPolicy: '',
      country: ''
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
    
      let formValid = true;
      const newErrors = { ...errors };
    
      if (formData.firstName.trim() === '') {
        newErrors.firstName = 'Please fill in this field';
        formValid = false;
      } else {
        newErrors.firstName = '';
      }
    
      if (formData.lastName.trim() === '') {
        newErrors.lastName = 'Please fill in this field';
        formValid = false;
      } else {
        newErrors.lastName = '';
      }

      if (!acceptPrivacyPolicy) {
        newErrors.privacyPolicy = 'You have to accept the privacy policy';
        formValid = false;
      } else {
        newErrors.privacyPolicy = '';
      }

      if (formData.company.trim() === '') {
        newErrors.company = 'Please fill in this field';
        formValid = false;
      } else {
        newErrors.company = '';
      }
    
      if (formData.email.trim() === '') {
        newErrors.email = 'Please fill in this field';
        formValid = false;
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
        formValid = false;
      } else {
        newErrors.email = '';
      }

      if (formData.phoneNumber.trim() === '') {
        newErrors.phoneNumber = 'Please fill in this field';
        formValid = false;
      } else {
        newErrors.phoneNumber = '';
      }
    
      setErrors(newErrors);
    
      if (formValid) {
        onFormFilled();
        setSubmitted(true);
        console.log('Form data submitted:', formData, submitted);
    
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          company: '',
          privacyPolicy: ''
        });
      }
    };
    

    const validateEmail = (email: string) => {
        return email.includes('@');
    };

    const handlePrivacyPolicyChange = () => {
      setAcceptPrivacyPolicy(!acceptPrivacyPolicy);
    };

    const phoneNumberError = errors.phoneNumber;


    const fetchCountries = async () => {
      const data =  await getCountries();

      // Phone Number Field
      const phoneDataTrans = phoneCountryTrans(data)
      setModifiedOptions(phoneDataTrans)
      setSelectedLanguage(phoneDataTrans[0])

      // Country Field
      const countryNames = getCountryNames(data)
      setIncorporationCountry(countryNames[0])
      setCountries(countryNames)
    }

    useEffect(() => {
      fetchCountries()
    }, [])


    return (
        <FormLayout onSubmit={handleSubmit} noValidate>
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
                  {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
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
                  {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
              </FormField>
            </FormTopFields>
            <PhoneInput
                formData={formData}
                handleChange={handleChange}
                languageOptions={modifiedOptions}
                selectedLanguage={selectedLanguage}
                handleLanguageChange={handleLanguageChange}
                phoneNumberError={phoneNumberError}
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
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            {!errors.email && !validateEmail(formData.email) && (
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
            {errors.company && <ErrorMessage>{errors.company}</ErrorMessage>}
          </FormField>


          <FormField>
            <label htmlFor="company">Select a country:</label>
            <Dropdown options={countries} selected={incorporationCountry} onChange={handleCountryChange} />
            {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
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
          {errors.privacyPolicy && <ErrorMessage>{errors.privacyPolicy}</ErrorMessage>}
          <InvitationCodeControl/>
          <Button type="submit">Choose a time</Button>
      </FormLayout>
    );
};

export default Form;

