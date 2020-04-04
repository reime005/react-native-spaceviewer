import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Header } from './Header';
import { Footer } from './Footer';

const Container = styled.View`
  position: absolute;
  top: ${props => props.theme.sizes.headerHeight};
  bottom: ${props => props.theme.sizes.footerHeight};
  width: 100%;
  flex-grow: 1;
  /* overflow: auto; */
  min-height: 200px;
`;

const Inner = styled.View`
  flex: 1;
  /* word-break: break-all; */
  display: flex;
  justify-content: center;
`;

export const BaseScreen = ({ children }: any) => {
  return (
    <Inner>
      <Header />
      {children}
      <Footer />
    </Inner>
  );
};
