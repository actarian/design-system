import { GlobalStyle, theme } from '@styles';
// import '@styles/globals.scss';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

const Application: NextPage<AppProps<{ [key: string]: any }>> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;300;400;700&family=Noto+Serif+Display:wght@300&display=swap');
        </style>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default Application;
