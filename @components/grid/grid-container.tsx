import { ComponentGridAttrs, ThemeAttrs, Variant } from '@components/types';
import { getGrid, getMargin, getPadding, getSize } from '@components/utils';
import styled, { css, FlattenInterpolation } from 'styled-components';

const Variants: { [key in Variant]?: FlattenInterpolation<any> } = {
  alfa: css`
  margin: 0 var(--grid-column-gap);
`,
  beta: css`
  margin: 0 auto;
  ${props => getMaxWidths(props)}
`,
};

const getMaxWidths = (props: ThemeAttrs) => {
  const theme = props.theme;
  if (theme.maxWidth && theme.mediaQuery) {
    return Object.keys(theme.mediaQuery).map(key => {
      const value = theme.mediaQuery[key];
      return `
@media(min-width: ${value}px) {
  max-width: ${theme.maxWidth[key]};
}
    `
    }).join('\n');
  } else {
    return '';
  }
}

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
