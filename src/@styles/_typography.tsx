import { eachMedia } from '@components/utils';
import { css } from 'styled-components';

export const CssTypography = css`
html,
body {
  background: var(--color-neutral-100);
  color: var(--color-neutral-900);
  font-family: var(--font-primary);
  ${props => eachMedia(props, (key: string) => {
  return `font-size: var(--font-size-${key});`;
})}
}

/*
* {
  outline-offset: 0.2rem;
  &:focus-visible {
    outline: 2px solid var(--color-neutral-400);
  }
}
*/

`;
