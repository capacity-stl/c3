import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Avatar } from './Avatar'
import { colorNames, colorPalettes } from '@props/color.props'
import { avatarsizeProps } from './Avatar.props'
import { shapeProps } from '@props/shape.props'

const IMAGE_SOURCES = {
  valid: 'avatar.png',
  invalid: 'invalid-image.png',
}

const meta = {
  title: 'Data Display/Avatar',
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
    theme: {
      options: ['Not Defined', ...Object.keys(colorPalettes)],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      description:
        'Theme will provide an standard color for text, background and border with the given color pallete name (like "earth"). Theme can be overridden by the color, bgColor and borderColor props.',
      table: {
        type: {
          summary: 'string | undefined',
        },
        defaultValue: { summary: null },
      },
    },

    color: {
      options: ['Not Defined', ...colorNames],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'earth-400' },
      },
      description: 'Text color for the initials display',
    },
    bgColor: {
      options: ['Not Defined', ...colorNames],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'earth-100' },
      },
      description: 'Background color of the avatar',
    },

    borderColor: {
      options: ['Not Defined', ...colorNames],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'earth-400' },
      },
      description: 'Border color when border prop is enabled',
    },
    size: {
      options: ['Not Defined', ...Object.keys(avatarsizeProps.size)],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'medium' },
      },
      description: 'Size of the avatar',
    },
    alt: {
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'avatar' },
      },
      description: 'Alternative text for the image for accessibility purposes',
    },
    shape: {
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'circle' },
      },
      description: 'Shape of the avatar',
    },
    children: {
      table: {
        type: {
          summary: 'string | undefined',
        },
      },
      description:
        'The initials to display when the image is not provided, or when the image fails to load',
    },
    src: {
      table: {
        type: {
          summary: 'string',
        },
      },
      description: 'The image source to display in the avatar',
    },
    border: {
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
      description: 'Whether to display a border around the avatar',
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
