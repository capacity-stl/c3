import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Text } from './Text'

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'Fundamental typography component.',
      },
    },
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {
    children: {
      defaultValue: 'Hello, world!',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello, world!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')
    await expect(text).toBeInTheDocument()
  },
}
