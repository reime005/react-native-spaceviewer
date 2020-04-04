import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Header } from './Header';
import { Footer } from './Footer';

const Outer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: 100%;
  max-width: 1200px;
  flex: 1;
  height: 100vh;
  min-height: 100vh;
`;

export const BaseScreen = ({ children }: any) => {
  return (
    <Outer>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </Outer>
  );
};
