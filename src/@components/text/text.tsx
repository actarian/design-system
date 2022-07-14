import { ComponentCssResponsiveAttrs } from '@components/types';
import { getCssResponsive, hypenize } from '@components/utils';
import styled, { css } from 'styled-components';

export type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'default' | 'small' | 'smaller' | 'smallest';

type Props = {
  type?: TextType;
}

export type TextProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

const Text = styled.div<TextProps>`
  ${({ type = 'default' }) => {
    const hypenType = hypenize(type);
    return css`
      font-size: var(--font-variant-${hypenType}-size, 1rem);
      line-height: var(--font-variant-${hypenType}-line-height);
      font-weight: var(--font-variant-${hypenType}-font-weight, normal);
    `;
  }}
  ${props => getCssResponsive(props)}
`;

export default Text;
