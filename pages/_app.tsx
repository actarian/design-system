import GlobalStyle from '@components/global-style';
import '@styles/globals.scss';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

const Application: NextPage<AppProps<{ [key: string]: any }>> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default Application;
