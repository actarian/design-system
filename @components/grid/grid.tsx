import { ComponentBoxAttrs } from '@components/types';
import { getMargin, getPadding, getSize } from '@components/utils';
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

export const Grid = styled.div<GridProps>`
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}

  // default grid column
  grid-column: span var(--grid-columns);

  // get media query column
  ${props => getMediaQueryColumn(props)}

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

function getMediaQueryColumn(props: GridProps) {
  const theme = props.theme;
  return sizes.map(k => {
    const key = k as keyof GridProps;
    const columns = props[key];
    if (typeof columns === 'number' && theme.mediaQuery) {
      const width = theme.mediaQuery[key];
      return `
        @media(min-width: ${width}px) {
          grid-column: span ${columns};
        }
      `;
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
