import { ComponentBoxAttrs, getMargin, getPadding, setClass } from '@components/types';
import styled from 'styled-components';

type Props = {
}

export type PageProps = ComponentBoxAttrs<Props, HTMLDivElement>;

/* const Page = styled.div<PageProps>` */
const Page = styled.div.attrs(setClass<PageProps>('page'))`
  ${props => getMargin(props, { margin: '0 auto' })}
  ${props => getPadding(props)}
  max-width: calc(100vw - 80px);
`;

export default Page;
