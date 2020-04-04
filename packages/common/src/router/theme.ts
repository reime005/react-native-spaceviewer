import * as styledComponents from 'styled-components/native';

interface DefaultTheme {
  color: {
    primary: string;
  };
  sizes: {
    headerHeight: string;
    footerHeight: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
    };
    sizes: {
      headerHeight: string;
      footerHeight: string;
    };
  }
}

export const theme: styledComponents.DefaultTheme = {
  color: {
    primary: '#1e5284',
  },
  sizes: {
    headerHeight: '55px',
    footerHeight: '50px',
  },
};

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  DefaultTheme
>;

export { css, ThemeProvider };
export default styled;
