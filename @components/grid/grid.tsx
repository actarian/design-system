import { ComponentBoxAttrs } from '@components/types';
import { getMargin, getPadding, getSize, setClass } from '@components/utils';
import { sizes } from '@styles';
import styled from 'styled-components';
import { GridContainer } from './grid-container';

type Props = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export type GridProps = ComponentBoxAttrs<Props, HTMLDivElement>;

/* export const Grid = styled.div<GridProps>` */
export const Grid = styled.div.attrs(setClass<GridProps>('grid'))`
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}

  grid-column: span var(--grid-columns);

  ${props => getSizes(props)}

  /*
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  */

  /*
  justify-content: center;
  align-items: center;
  min-height: 40px;
  */
`;

function getSizes(props: GridProps) {
  const theme = props.theme;
  return sizes.map(k => {
    const key = k as keyof GridProps;
    if (typeof props[key] === 'number' && theme.mediaQuery) {
      const value = theme.mediaQuery[key];
      return `
@media(min-width: ${value}px) {
  grid-column: span ${props[key]};
}
    `
    } else {
      return '';
    }
  }).join('\n');
}

(Grid as IGrid).Container = GridContainer;

export default Grid as IGrid;

type IGrid = typeof Grid & {
  Container: typeof GridContainer;
};
