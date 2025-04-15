import type { Meta, StoryObj } from '@storybook/react'
import { BadgeDot } from './BadgeDot'
import { colorPalletes } from '@props/color.props'
import { sizeNameProps } from '@props/size.props'
import { shapeProps } from '@props/shape.props'
import { badgeSizeProps } from '@components/Badge/Badge.props'

const meta = {
  title: 'Data Display/BadgeDot',
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
  argTypes: {
    color: {
      options: ['Not Defined', ...Object.keys(colorPalletes)],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      description: 'Color of the badge',
      table: {
        type: {
          summary: 'string ',
        },
        defaultValue: { summary: 'earth' },
      },
    },

    shape: {
      options: ['Not Defined', ...Object.keys(shapeProps.shape)],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      description: 'Shape of the badge',
      table: {
        type: {
          summary: 'string ',
        },
        defaultValue: { summary: 'circle' },
      },
    },

    size: {
      options: ['Not Defined', ...Object.keys(badgeSizeProps.size)],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      description: 'Size of the badge',
      table: {
        type: {
          summary: 'string ',
        },
        defaultValue: { summary: 'medium' },
      },
    },
  },
} satisfies Meta<typeof BadgeDot>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Size: Story = {
  parameters: {
    docs: {
      source: {
        code: Object.keys(badgeSizeProps.size)
          .map((size) => `<BadgeDot size="${size}"></BadgeDot>`)
          .join('\n'),
        language: 'tsx',
      },
    },
  },
  render: () => (
    <div className={`flex items-center gap-4`}>
      {['tiny', 'small', 'medium', 'large', 'huge'].map((size) => (
        <BadgeDot key={size} size={size as sizeNameProps}></BadgeDot>
      ))}
    </div>
  ),
}

export const Color: Story = {
  parameters: {
    docs: {
      source: {
        code: Object.keys(colorPalletes)
          .map((color) => `<BadgeDot color="${color}"></BadgeDot>`)
          .join('\n'),
        language: 'tsx',
      },
    },
  },
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
  parameters: {
    docs: {
      source: {
        code: `
<BadgeDot size="large" shape="circle"></BadgeDot>
<BadgeDot size="large" shape="rounded"></BadgeDot>`,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <div className={`flex items-center gap-4`}>
      <BadgeDot size="large" shape="circle"></BadgeDot>
      <BadgeDot size="large" shape="rounded"></BadgeDot>
    </div>
  ),
}

export const DotWithContent: Story = {
  parameters: {
    docs: {
      source: {
        code:
          Object.keys(colorPalletes)
            .map((color) => `<BadgeDot color="${color}">2</BadgeDot>`)
            .join('\n') +
          '\n' +
          Object.keys(colorPalletes)
            .map(
              (color) =>
                `<BadgeDot shape="rounded" color="${color}">2</BadgeDot>`,
            )
            .join('\n'),
        language: 'tsx',
      },
    },
  },

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
