import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Text } from './Text'
import { asTypes } from './Text.props'
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
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello, world',
    as: asTypes.div,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
  },
}

export const Heading: Story = {
  args: {
    children: 'This is a Heading',
    as: asTypes.h1,
    type: 'heading',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('h1')
    await expect(text).toHaveClass('text-xl')
  },
}

export const Subheading: Story = {
  args: {
    children: 'This is a Subheading',
    as: asTypes.h2,
    type: 'subheading',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('h2')
    await expect(text).toHaveClass('text-lg')
  },
}

export const Body: Story = {
  args: {
    children: 'This is a Body',
    as: asTypes.p,
    type: 'body',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('p')
    await expect(text).toHaveClass('text-base')
  },
}
