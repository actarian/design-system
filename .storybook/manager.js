import { addons } from '@storybook/addons';

/*
import { themes } from '@storybook/theming';

console.log(themes.dark);

addons.setConfig({
  theme: themes.dark,
});
*/

import { createCustomTheme } from './utils/create-custom-theme';
import { theme } from './utils/theme';

addons.setConfig({
  theme: createCustomTheme({ theme, options: { base: 'light' } }),

  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
    renderLabel: ({ name, type }) => (type === 'story' ? name : name),
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },

});
