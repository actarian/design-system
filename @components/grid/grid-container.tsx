import { ComponentGridAttrs, Variant } from '@components/types';
import { getContainer, getGrid, getMargin, getPadding, getSize } from '@components/utils';
import styled, { css, FlattenInterpolation } from 'styled-components';

const Variants: { [key in Variant]?: FlattenInterpolation<any> } = {
  alfa: css`
  margin: 0 var(--grid-column-gap);
`,
  beta: css`
  margin: 0 auto;
  ${props => getContainer(props)}
`,
};

const getVariant = (type: Variant = 'alfa') => {
  return Variants[type] ? Variants[type] : '';
}

type Props = {
  type?: Variant;
}

export type GridContainerProps = ComponentGridAttrs<Props, HTMLDivElement>;

export const GridContainer = styled.div<GridContainerProps>`
  ${props => getGrid(props)}
  ${props => getVariant(props.type)}
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}
`;
