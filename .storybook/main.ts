import type { StorybookConfig } from '@storybook/react-vite'
import { withoutVitePlugins } from '@storybook/builder-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: [
    '../lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../lib/**/*.story.@(js|jsx|ts|tsx)',
    '../lib/**/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../docs/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: await withoutVitePlugins(config.plugins, [
        'vite:lib-inject-css',
      ]),
      resolve: {
        alias: {
          '@': '/lib'
        }
      }
    })
  },
}
export default config
