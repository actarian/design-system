import { ComponentFlexAttrs } from '@components/types';
import { getFlex, getMargin, getPadding, getSize } from '@components/utils';
import { sizes } from '@styles';
import styled, { css } from 'styled-components';
import { GridRow } from './grid-row';

type Props = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export type GridProps = ComponentFlexAttrs<Props, HTMLDivElement>;

export const Grid = styled.div<GridProps>`
  // default grid column
  grid-column: span var(--grid-columns);

  // get media query column
  ${props => getMediaQueryColumn(props)}

  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}

  ${props => (props.justifyContent || props.alignItems) ? css`
    display: flex;
    ${getFlex(props)}
  ` : ''}
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
  return sizes.map(size => {
    const key = size as keyof GridProps;
    const columns = props[key];
    if (typeof columns === 'number' && theme.mediaQuery) {
      const width = theme.mediaQuery[key];
      return key === 'xs' ?
        `grid-column: span ${columns};
        ` : `
        @media(min-width: ${width}px) {
          grid-column: span ${columns};
        }
      `;
    } else {
      return '';
    }
  }).join('\n');
}

(Grid as IGrid).Row = GridRow;

export default Grid as IGrid;

type IGrid = typeof Grid & {
  Row: typeof GridRow;
};
