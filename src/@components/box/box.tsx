import { ComponentCssResponsiveAttrs } from '@components/types';
import { getCssResponsive } from '@components/utils';
import styled from 'styled-components';

type Props = {
};

export type BoxProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

const Box = styled.div<BoxProps>`
  ${props => getCssResponsive(props)}
`;

export default Box;
