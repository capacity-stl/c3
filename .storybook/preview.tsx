import * as React from 'react'
import type { Preview } from '@storybook/react'
import * as Docs from '@storybook/blocks'
import '../lib/c3.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <Docs.Title />
          <Docs.Description />
          <Docs.Primary />
          <Docs.Controls />
          <Docs.Stories />
        </>
      ),
    },
  },
}

export default preview
