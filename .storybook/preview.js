// import { themes } from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { theme } from '@styles/theme';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../@styles/style';
import themeJson from '../@styles/theme.json';
import { createCustomTheme } from './utils/create-custom-theme';

addDecorator((story) => (
  <>
    <GlobalStyle />
    { story() }
  </>
));

const themes = [theme];
addDecorator(withThemesProvider(themes, ThemeProvider));

// import '@styles/globals.scss';

export const parameters = {
  docs: {
    theme: createCustomTheme({ theme: themeJson, options: { base: 'light' } }),
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
  },
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    presetColors: [{ color: '#ff4785', title: 'Coral' }, 'rgba(0, 159, 183, 1)', '#fe4a49'],
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    query: {
      foo: 'this-is-a-global-override',
    },
  },
}
