// import { themes } from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/@styles/style';
import { theme } from '../src/@styles/theme';
import themeJson from '../src/@styles/theme.json';
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
  options: {
    storySort: {
      method: 'alphabetical',
      // order: ['Introduction', 'Styleguide', 'Atoms', 'Molecules', 'Organisms'],
      order: ['Introduction', 'Styleguide', 'Typography', 'Colors', 'Icons', 'Components', 'Forms', 'Sections', 'Pages'],
      locales: 'en-US',
    },
    showPanel: false,
  },
  backgrounds: {
    disable: true,
    grid: {
      disable: true,
    }
  },
  /*
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
  */
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: false,
    /*
    presetColors: [{ color: '#ff4785', title: 'Coral' }, 'rgba(0, 159, 183, 1)', '#fe4a49'],
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    */
  },
  nextRouter: {
    query: {
      foo: 'this-is-a-global-override',
    },
  },
}
