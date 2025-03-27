import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Avatar } from './Avatar'
import { colorNames } from '@props/color.props'
import { avatarsizeProps } from './Avatar.props'
import { shapeProps } from '@props/shape.props'

const IMAGE_SOURCES = {
  valid: 'public/avatar.png',
  invalid: 'invalid-image.png',
}

const meta = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'Component to display a user Avatar.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['Not Defined', ...colorNames],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'Text color for the initials display  | string ',
        },
        defaultValue: { summary: 'earth-400' },
      },
    },
    bgColor: {
      options: ['Not Defined', ...colorNames],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The background color of the avatar | string | undefined',
        },
        defaultValue: { summary: 'earth-100' },
      },
    },
    borderColor: {
      options: ['Not Defined', ...colorNames],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'Border color when border prop is enabled | string ',
        },
        defaultValue: { summary: 'earth-400' },
      },
    },
    size: {
      options: ['Not Defined', ...Object.keys(avatarsizeProps.size)],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      table: {
        type: {
          summary:
            'The size of the avatar | tiny, small, medium, large, huge or available px size',
        },
        defaultValue: { summary: 'medium' },
      },
    },
    alt: {
      table: {
        type: {
          summary: 'Alternative text for the image for accessibility purposes',
        },
        defaultValue: { summary: 'avatar' },
      },
    },
    shape: {
      table: {
        type: {
          summary: 'The shape of the avatar | circle, square',
        },
        defaultValue: { summary: 'circle' },
      },
    },
    children: {
      table: {
        type: {
          summary:
            'The initials to display when the image is not provided, or when the image fails to load ',
        },
      },
    },
    src: {
      table: {
        type: {
          summary:
            'The image source to display in the avatar | string | undefined',
        },
      },
    },
    border: {
      table: {
        type: {
          summary:
            'Whether to display a border around the avatar | boolean | undefined',
        },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    color: 'earth-400',
    bgColor: 'earth-100',
    borderColor: 'earth-400',
    shape: 'circle',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const ImageAvatar: Story = {
  args: {
    src: IMAGE_SOURCES.valid,
    alt: 'Avatar',
    children: 'MM',
  },

  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    const avatar = await canvas.getByTestId('avatar-component')

    await step('Check the component is rendered', async () => {
      await expect(avatar).toBeInTheDocument()
    })

    await step(
      'Check the component has shape and size classes applied',
      async () => {
        await expect(avatar).toHaveClass(
          args.size
            ? avatarsizeProps.size[args.size]
            : avatarsizeProps.size.medium,
        )
        await expect(avatar).toHaveClass(
          args.shape ? shapeProps.shape[args.shape] : shapeProps.shape.circle,
        )
      },
    )

    await step('Check the image renders with an image source', async () => {
      const img = await canvas.findByRole('img')
      await expect(img).toBeInTheDocument()
      await expect(args.src).toBeDefined()
      await expect(img).toHaveAttribute('src', IMAGE_SOURCES.valid)
    })
  },
}

export const InitialsAvatar: Story = {
  args: {
    ...ImageAvatar.args,
    src: undefined,
  },

  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)

    await step(
      'Check initials renders when the image is not provided',
      async () => {
        const fallbackText = await canvas.findByText(args.children ?? '')
        await expect(fallbackText).toBeInTheDocument()
      },
    )
  },
}
