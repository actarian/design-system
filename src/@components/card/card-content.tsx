import { ComponentCssResponsiveProps } from '@components/types';
import { getCssResponsive } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type CardContentProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

export const CardContent = styled.div<CardContentProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${props => getCssResponsive(props)}
`;
