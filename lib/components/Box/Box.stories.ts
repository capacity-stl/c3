import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Box } from './Box'

const meta = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'Fundamental layout building block.',
      },
    },
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {
    children: {
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    m: '1',
    p: '4',
    border: 'default',
    bgColor: 'earth-100',
    children: 'I am a box',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const box = await canvas.getByTestId('box-component')
    await expect(box).toBeInTheDocument()
  },
}
