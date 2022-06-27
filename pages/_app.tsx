import { GlobalStyle, theme } from '@styles';
// import '@styles/globals.scss';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

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
