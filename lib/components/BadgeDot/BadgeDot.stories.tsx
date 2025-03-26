import type { Meta, StoryObj } from '@storybook/react'
import { BadgeDot } from './BadgeDot'
import { colorPalletes } from '@props/color.props'
import { sizeNameProps } from '@props/size.props'

const meta = {
  title: 'BadgeDot',
  component: BadgeDot,
  parameters: {
    docs: {
      description: {
        component: 'A badge dor component for displaying status or counts.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BadgeDot>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Size: Story = {
  render: () => (
    <div className={`flex items-center gap-4`}>
      {['tiny', 'small', 'medium', 'large', 'huge'].map((size) => (
        <BadgeDot key={size} size={size as sizeNameProps}></BadgeDot>
      ))}
    </div>
  ),
}

export const Color: Story = {
  render: () => (
    <div className={`flex items-center gap-4`}>
      {Object.keys(colorPalletes).map((color) => (
        <BadgeDot
          key={color}
          color={color as keyof typeof colorPalletes}
        ></BadgeDot>
      ))}
    </div>
  ),
}

export const Shape: Story = {
  render: () => (
    <div className={`flex items-center gap-4`}>
      <BadgeDot size="large" shape="circle"></BadgeDot>
      <BadgeDot size="large" shape="rounded"></BadgeDot>
    </div>
  ),
}

export const DotWithContent: Story = {
  render: () => (
    <div className={`flex flex-col gap-6`}>
      <div className={`flex items-center gap-6`}>
        {Object.keys(colorPalletes).map((color) => (
          <BadgeDot key={color} color={color as keyof typeof colorPalletes}>
            2
          </BadgeDot>
        ))}
      </div>
      <div className={`flex items-center gap-6`}>
        {Object.keys(colorPalletes).map((color) => (
          <BadgeDot
            shape="rounded"
            key={color}
            color={color as keyof typeof colorPalletes}
          >
            2
          </BadgeDot>
        ))}
      </div>
    </div>
  ),
}
