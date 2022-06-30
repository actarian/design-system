import { ComponentGridAttrs } from '@components/types';
import { getGrid, getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type GridRowProps = ComponentGridAttrs<Props, HTMLDivElement>;

export const GridRow = styled.div<GridRowProps>`
  ${props => getGrid(props)}
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}
`;
