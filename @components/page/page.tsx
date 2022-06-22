import React from 'react';
import styled from 'styled-components';

interface Props {
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type PageProps = Props & NativeAttrs;

const Page = styled.div<PageProps>`
  max-width: calc(100vw - 80px);
  margin: 0 auto;
`;

export default Page;
