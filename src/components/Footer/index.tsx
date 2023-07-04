import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: block;
    margin: 0 80px;
    padding: 12px 0;
    height: 56px;
    `
const Text = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    `

const Footer : React.FC = () => {
    const Imprint = 'Imprint'
    const Copyright = '© 2023 Nufin GmbH'

    return (
        <FooterContainer>
            <Text>{Imprint}<br></br>{Copyright}</Text>
        </FooterContainer>
    );
}

export default Footer;