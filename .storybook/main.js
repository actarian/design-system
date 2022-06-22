const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../@components/**/*.stories.mdx',
    '../@components/**/*.stories.@(js|jsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: { reactDocgen: false },
  /*
  webpackFinal: (config) => {
    // Fix that allows to fix storybook issues with core-js
    // https://github.com/storybookjs/storybook/issues/11255
    config.resolve.alias['core-js'] = path.dirname(require.resolve('core-js'));
    config.resolve.alias['@strapi/icons'] = path.dirname(require.resolve('../../strapi-icons/dist'));
    return config;
  },
  */
}
