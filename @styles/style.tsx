import { CssDebug } from '@styles/_debug';
import { CssReset } from '@styles/_reset';
import { CssVars } from '@styles/_vars';
import { createGlobalStyle, ThemeProps } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${CssReset}
  ${CssVars}
  ${CssDebug}

  html,
  body {
    color: ${({ theme }: ThemeProps<any>) => theme.color.neutral1000};
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
