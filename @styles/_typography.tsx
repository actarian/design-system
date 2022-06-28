import { ThemeAttrs } from '@components';
import { css } from 'styled-components';

export const CssTypography = css`
html,
body {
  color: var(--color-neutral100);
  background: var(--color-neutral900);
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
