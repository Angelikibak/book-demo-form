import React from 'react';
import  Header  from './components/Header';
import Form from './components/Form';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 80px;
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

function App() {
  return (
      <>
      <Header />
      <Container>
      <FormContainer>
        <Form />
      </FormContainer>
      <ImageContainer>
        <Image src="image.jpg" alt="Image" />
      </ImageContainer>
    </Container>
    </>

  );
}

export default App;
