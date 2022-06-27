import { sizes } from '@styles';
import React from 'react';
import styled from 'styled-components';

export const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(var(--grid-columns),  var(--grid-size));
  grid-gap: var(--grid-gap);
`;

const Grid = styled.div<GridProps>`
  ${props => getSizes(props)}
  grid-column: span ${props => props.sm || 'var(--grid-columns)'};
  display: flex;

  justify-content: center;
  align-items: center;

  min-height: 40px;
`;

function getSizes(props: GridProps) {
  const theme = props.theme;
  return sizes.map(k => {
    const key = k as keyof GridProps;
    if (typeof props[key] === 'number') {
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

interface Props {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type GridProps = Props & { theme: any } & NativeAttrs;

type IGrid = typeof Grid & {
  Container: typeof GridContainer;
};
