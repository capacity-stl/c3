import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

const meta = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'A tooltip component for displaying additional information.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
      description: 'Position of the tooltip',
      table: {
        type: {
          summary: 'string ',
        },
        defaultValue: { summary: 'top' },
      },
    },
    content: {
      description: 'Content of the tooltip',
      table: {
        type: { summary: 'string | React.ReactNode' },
      },
    },
    children: {
      description: 'Element that triggers the tooltip when hovered',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    offsetX: {
      control: { type: 'number' },
      description: 'Offset of the tooltip on the x-axis',
      table: {
        type: { summary: 'number' },
      },
    },
    offsetY: {
      control: { type: 'number' },
      description: 'Offset of the tooltip on the y-axis',
      table: {
        type: { summary: 'number' },
      },
    },
    gap: {
      control: { type: 'number' },
      description: 'Gap of the tooltip from the trigger element',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '8' },
      },
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    position: 'top',
    children: <div>Hover me</div>,
    content: <div>This is a tooltip</div>,
  },
}
