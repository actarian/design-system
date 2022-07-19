import { ComponentCssResponsiveProps } from '@components/types';
import { getCssResponsive } from '@components/utils';
import styled, { css } from 'styled-components';

export type FontSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
  '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15';

type Props = {
  type?: FontSize;
  gradient?: boolean;
}

export type TextProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const Text = styled.div<TextProps>`
  display: inline-block;
  font-family: var(--font-primary-family);
  ${({ type }) => {
    if (!type) return '';
    const index = (typeof type === 'string' ? parseInt(type) : type) - 1;
    return css`
      font-size: var(--font-primary-size-${index}, 1rem);
      line-height: var(--font-primary-line-height-${index}, 1);
      font-weight: var(--font-primary-font-weight-${index}, normal);
    `;
  }}
  ${props => getCssResponsive(props)}
  ${props => props.gradient ? css`
    background: -webkit-linear-gradient(0deg, var(--color-primary-500), var(--color-secondary-500));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  ` : ''}
`;

const TextSecondary = styled.div<TextProps>`
  display: inline-block;
  font-family: var(--font-secondary-family);
  ${({ type }) => {
    if (!type) return '';
    const index = (typeof type === 'string' ? parseInt(type) : type) - 1;
    return css`
      font-size: var(--font-secondary-size-${index}, 1rem);
      line-height: var(--font-secondary-line-height-${index}, 1);
      font-weight: var(--font-secondary-font-weight-${index}, normal);
    `;
  }}
  ${props => getCssResponsive(props)}
  ${props => props.gradient ? css`
    background: -webkit-linear-gradient(0deg, var(--color-primary-500), var(--color-secondary-500));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  ` : ''}
`;

(Text as IText).Primary = Text;
(Text as IText).Secondary = TextSecondary;

export default Text as IText;

type IText = typeof Text & {
  Primary: typeof Text;
  Secondary: typeof TextSecondary;
};
