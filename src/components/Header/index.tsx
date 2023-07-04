import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/Logo.svg';
import Dropdown, { Option } from '../Dropdown';
import UkFlag from '../../images/En-Flag.svg';
import { languageOptions } from '../../data/languageOptions';

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
const Header : React.FC = () => {

    const [selectedLanguage, setSelectedLanguage] = React.useState<Option>({
        value: 'English',
        flag: UkFlag,
        label: 'option',
      });

    const modifiedOptions = languageOptions.map(option => ({
      value: option.value,
      label: option.label,
      flag: option.flag,
    }));

    const handleLanguageChange = (value: Option) => {
    setSelectedLanguage(value);
    };

    return (
        <StyledHeader>
            <HeaderContainer>
            <img src={Logo} alt="logo" />
            <Dropdown options={modifiedOptions} value={selectedLanguage} onChange={handleLanguageChange} />
            </HeaderContainer>
        </StyledHeader>
    );
    }

export default Header;