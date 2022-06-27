import { ComponentBoxAttrs, setClass } from '@components/types';
import styled from 'styled-components';

type Props = {
}

export type LayoutProps = ComponentBoxAttrs<Props, HTMLDivElement>;

/* const Layout = styled.div<LayoutProps>` */
const Layout = styled.div.attrs(setClass<LayoutProps>('layout'))`
  background: white;
  width: 100%;
  // min-height: 100vh;
  margin: 0;
  padding: 0;
`;

export default Layout;

/*
import { Footer, Header, Main, Meta } from '@components';
import { Page } from '@geist-ui/core';
import React, { ReactNode } from 'react';

export default function Layout({ children }: LayoutProps) {

  // console.log('pageContext', pageContext);

  return (
    <>
      <Meta />
      <Page width="1024px" style={{ maxWidth: 'calc(100vw - 40px)', margin: '0 auto' }} padding={0}>
        <Page.Header>
          <Header></Header>
        </Page.Header>
        <Page.Content>
          <Main>{children}</Main>
        </Page.Content>
        {<Page.Footer>
          <Footer page={page} />
        </Page.Footer>}
        <Footer />
      </Page>
    </>
  )
}

export interface LayoutProps {
  children: ReactNode;
}
*/
