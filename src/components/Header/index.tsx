import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import Logo from '../../images/Logo.svg';
import Dropdown, { Option } from '../Dropdown';

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
    `

const StyledSelect = styled.select`
    border: none;
    `

const Header : React.FC = () => {

    const [selectedLanguage, setSelectedLanguage] = React.useState('en');

    const languageOptions: Option[] = [
        { value: 'English', flag: '🇬🇧' },
        { value: 'German',  flag: '🇩🇪' },
      ];

    const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    };

    return (
        <StyledHeader>
            <HeaderContainer>
            <img src={Logo} className="App-logo" alt="logo" />
            <Dropdown options={languageOptions} value={selectedLanguage} onChange={handleLanguageChange} />
            </HeaderContainer>
        </StyledHeader>
    );
    }

export default Header;