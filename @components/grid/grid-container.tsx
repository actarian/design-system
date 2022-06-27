import { ComponentBoxAttrs, getMargin, getPadding, setClass } from '@components/types';
import styled from 'styled-components';

type ContainerProps = {
}

export type GridContainerProps = ComponentBoxAttrs<ContainerProps, HTMLDivElement>;

/* export const GridContainer = styled.div<GridContainerProps>` */
export const GridContainer = styled.div.attrs(setClass<GridContainerProps>('grid-container'))`
  ${props => getMargin(props)}
  ${props => getPadding(props)}
  display: grid;
  grid-template-columns: repeat(var(--grid-columns),  var(--grid-size));
  grid-gap: var(--grid-gap);
  margin: 0 auto;
`;
