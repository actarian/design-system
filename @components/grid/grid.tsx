import React from 'react';
import styled from 'styled-components';

export const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
`;

const Grid = styled.div<GridProps>`
  grid-column: span ${props => props.sm || 12};
  display: flex;

  justify-content: center;
  align-items: center;

  min-height: 40px;
  outline: 1px solid red;
`;

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

export type GridProps = Props & NativeAttrs;

type IGrid = typeof Grid & {
  Container: typeof GridContainer;
};
