import { ThemeAttrs } from '@components/types';
import { css } from 'styled-components';

export const CssTypography = css`
html,
body {
  background: var(--color-neutral-100);
  color: var(--color-neutral-900);
  font-family: var(--font-primary);
  ${props => getSizes(props)}
}
`;

function getSizes(props: ThemeAttrs) {
  const theme = props.theme;
  if (theme.font.size && theme.mediaQuery) {
    return Object.keys(theme.font.size).map(key => {
      const value = theme.mediaQuery[key];
      return `
@media(min-width: ${value}px) {
  font-size: var(--font-size-${key});
}
    `
    }).join('\n');
  } else {
    return '';
  }
}
