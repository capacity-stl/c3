import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Card } from './Card'

const cardChildren = [
  <Card.Header title="Card Title" description="Card Description" />,
  <Card.Body style={{ maxWidth: '200px' }}>
    This is the body of the card. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quisquam, quos.
  </Card.Body>,
  <Card.Footer>
    <button className="rounded-md border border-meteor-200 p-2 text-meteor-400">
      Button
    </button>
    <button className="rounded-md bg-deep-space p-2 text-white">Button</button>
  </Card.Footer>,
]

const meta = {
  title: 'Card',
  component: Card,
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
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: cardChildren,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const box = await canvas.getByTestId('card-component')
    await expect(box).toBeInTheDocument()
  },
}
