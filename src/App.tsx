import React, { useState } from 'react';
import  Header  from './components/Header';
import Form from './components/Form';
import styled from 'styled-components';
import Calendly from './components/Calendly';
import onBoarding from './images/onboarding-image.png';
import Footer from './components/Footer';

const Container = styled.div`
  display: flex;
  gap: 80px;
  padding: 80px 160px;

`;

const FormContainer = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
`;


const Image = styled.img`
  width: 100%; 
  height: auto;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  padding-bottom: 20px;
  margin-top: 0;
`

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleFormFilled = () => {
    setSubmitted(true);
  };

  const TitleText = 'Book your free Moss demo';

  return (
    <>
      <Header />
      <Container>
        <FormContainer>
        <Title>{TitleText}</Title>
          {submitted ? (
              <Calendly  formFilled={true} />
            ) : (
              <Form onFormFilled= {handleFormFilled} />
            )}
        </FormContainer>
        <ImageContainer>
          <Image src= {onBoarding} alt='moss-image' />
        </ImageContainer>
      </Container>
      <Footer />
    </>

  );
}

export default App;
