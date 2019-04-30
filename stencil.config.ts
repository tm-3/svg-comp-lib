import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'svg',
  outputTargets: [
    {
      type: 'docs',
    },
    {
      type: 'dist',
    },
    {
      type: 'stats',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalScript: 'src/globals/app.ts',
  globalStyle: 'src/globals/variables.css',
  devServer: {
    port: 3333,
    openBrowser: false,
  },
  tsconfig: './tsconfig.json',
  excludeSrc: ['**/.test*.*'],
  testing: {
    testMatch: ['**/*(*.)+(e2e|test).+(ts)?(x)'],
    collectCoverage: true,
  },
};
