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
