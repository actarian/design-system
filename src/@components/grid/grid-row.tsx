import { ComponentCssResponsiveProps, GridProps } from '@components/types';
import { getCssResponsive, getGrid } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type GridRowProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

export const GridRow = styled.div<GridRowProps>`
  ${props => getCssResponsive(props)}
  ${props => getGrid(props as GridProps)}
`;
