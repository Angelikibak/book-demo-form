import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import Logo from '../../images/Logo.svg';
import Dropdown, { Option } from '../Dropdown';
import UkFlag from '../../images/En-Flag.svg';
import DeFlag from '../../images/De-Flag.svg';

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

    const [selectedLanguage, setSelectedLanguage] = React.useState<Option>({
        value: 'English',
        flag: UkFlag,
        label: 'English',
        code: 'EN',
      });
    
      const languageOptions: Option[] = [
        {
          value: 'English',
          flag: UkFlag,
          label: 'EN',
        },
        {
          value: 'German',
          flag: DeFlag,
          label: 'DE',
        },
      ];

    const handleLanguageChange = (value: Option) => {
    setSelectedLanguage(value);
    };

    return (
        <StyledHeader>
            <HeaderContainer>
            <img src={Logo} alt="logo" />
            <Dropdown options={languageOptions} value={selectedLanguage} onChange={handleLanguageChange} />
            </HeaderContainer>
        </StyledHeader>
    );
    }

export default Header;