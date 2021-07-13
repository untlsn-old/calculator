const path = require('path');

const createAlias = (from, useArr) => useArr.reduce((acc, cur) => ({
  ...acc,
  [`@${cur}`]: path.resolve(__dirname, '..', from, cur)
}), {});

module.exports = {
  '~': path.resolve(__dirname, '../src'),
  ...createAlias('src', [
    'pages',
    'components',
    'hooks',
    'helpers',
    'assets',
    'providers',
    'types',
    'store',
  ]),
  ...createAlias('src/assets', ['style']),
  ...createAlias('src/components', [
    'atoms',
    'molecules',
    'organisms',
    'view',
  ])
};