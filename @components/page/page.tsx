import { ComponentBoxAttrs } from '@components/types';
import { getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type PageProps = ComponentBoxAttrs<Props, HTMLDivElement>;

const Page = styled.div<PageProps>`
  ${props => getSize(props)}
  ${props => getMargin(props, { margin: '0 auto' })}
  ${props => getPadding(props)}
`;

export default Page;
