module.exports = {
  verbose: true,

  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['./tests/setup.ts'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  testPathIgnorePatterns: ['/pages/', '/dist/', '/lib/', '/esm/'],

  transform: {
    '^.+\\.tsx?$': ['babel-jest', { configFile: './tests/.babelrc.js' }],
  },

  testRegex: '.*\\.test\\.(j|t)sx?$',
  // testRegex: 'use-classes\\/.*\\.test\\.(j|t)sx?$',

  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/**/styles.{ts,tsx}',
    '!components/**/*types.{ts,tsx}',
  ],

  moduleNameMapper: {
    'tests/(.*)$': '<rootDir>/tests/$1',
    components: '<rootDir>/components/index.ts',
  },
}
