import { ComponentCssResponsiveAttrs, GridAttrs } from '@components/types';
import { getCssResponsive, getGrid } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type GridRowProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

export const GridRow = styled.div<GridRowProps>`
  ${props => getCssResponsive(props)}
  ${props => getGrid(props as GridAttrs)}
`;
