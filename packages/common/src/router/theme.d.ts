// eslint-disable
// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string
    },
    sizes: {
      headerHeight: string;
      footerHeight: string;
    }
  }
}
