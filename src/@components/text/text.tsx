import { ComponentCssResponsiveProps, TextVariant } from '@components/types';
import { getCssResponsive, hypenize } from '@components/utils';
import styled, { css } from 'styled-components';

type Props = {
  type?: TextVariant;
}

export type TextProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

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
