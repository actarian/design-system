import { ComponentCssResponsiveAttrs } from '@components/types';
import { getCssResponsive } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type PageProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

const Page = styled.div<PageProps>`
  margin: 0 auto;
  ${props => getCssResponsive(props)}
`;

export default Page;
