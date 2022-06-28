import { CssDebug } from '@styles/_debug';
import { CssReset } from '@styles/_reset';
import { CssTypography } from '@styles/_typography';
import { CssVars } from '@styles/_vars';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  ${CssReset}
  ${CssVars}
  ${CssTypography}
  ${CssDebug}

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle
