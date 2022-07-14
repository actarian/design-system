import { ComponentCssResponsiveAttrs } from '@components/types';
import { getCssResponsive, hypenize } from '@components/utils';
import styled, { css } from 'styled-components';

export type TextTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'default' | 'small' | 'smaller' | 'smallest';

type Props = {
  type: TextTypes;
}

export type TextProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

const Text = styled.div<TextProps>`
  ${props => {
    const type = hypenize(props.type);
    return css`
      font-size: var(--font-variant-${type}-size, 1rem);
      line-height: var(--font-variant-${type}-line-height);
      font-weight: var(--font-variant-${type}-font-weight, normal);
    `;
  }}
  ${props => getCssResponsive(props)}
`;

export default Text;

Text.defaultProps = {
  type: 'default',
};
