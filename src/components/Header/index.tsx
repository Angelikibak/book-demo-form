import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import Logo from '../../images/Logo.svg';
import Dropdown, { Option } from '../Dropdown';
import { getCountries } from '../../service/Country/Country';
import { getCountrySelection } from '../../transform/Country';

const StyledHeader = styled.header`
    display: fixed;
    position: relative;
    height: 56px;
    color: #fff;
    `
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 80px;
    padding: 12px 0;
      div {
        border: none;
      }
    `
const Header : React.FC = () => {

  const [selectedLanguage, setSelectedLanguage] = useState<Option>({});
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const data = await getCountries();
    const dataTrans = await getCountrySelection(data);
    setCountries(dataTrans);
    setSelectedLanguage(dataTrans[0]);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleLanguageChange = (value: Option) => {
    setSelectedLanguage(value);
  };
    return (
        <StyledHeader>
            <HeaderContainer>
              <img src={Logo} alt="logo" />
              <Dropdown 
                options={countries}
                selected={selectedLanguage}
                onChange={handleLanguageChange} 
                />
            </HeaderContainer>
        </StyledHeader>
    );
    }

export default Header;