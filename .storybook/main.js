const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    '../stories/pages/*.stories.@(js|jsx|ts|tsx)',
    // '../stories/**/*.stories.mdx',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../@components/**/*.stories.mdx',
    '../@components/**/*.stories.@(js|jsx|ts|tsx)',
    '../@icons/**/*.stories.mdx',
    '../@icons/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next',
    'storybook-addon-styled-component-theme/dist/preset',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: { reactDocgen: false },
  /*
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  */
  /*
  webpackFinal: (config) => {
    // Fix that allows to fix storybook issues with core-js
    // https://github.com/storybookjs/storybook/issues/11255
    config.resolve.alias['core-js'] = path.dirname(require.resolve('core-js'));
    config.resolve.alias['@strapi/icons'] = path.dirname(require.resolve('../../strapi-icons/dist'));
    return config;
  },
  */
  webpackFinal: async (config) => {
    // configure for absolute imports
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    // disable whatever is already set to load SVGs
    config.module.rules
      .filter(rule => rule.test.test('.svg'))
      .forEach(rule => rule.exclude = /\.svg$/i);
    // add SVGR instead
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [{
                name: 'preset-default',
                params: {
                  overrides: { removeViewBox: false },
                },
              }],
            },
            titleProp: true,
          },
        }
      ],
      type: 'javascript/auto',
      issuer: { and: [/\.(js|ts|md)x?$/] },
    });
    return config;
  }
}
