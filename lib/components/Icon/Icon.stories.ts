import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Icon } from './Icon'
import { colorNames } from '../../props/color.props'
import { iconsizeProps } from '../../props/iconsize.props'

const meta = {
  title: 'Icons',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          'Component to display an icon glyph. Use the `Icon.Glyph.{IconName}` enum to set the `icon` prop, and the `Icon.Size.{SizeName}` enum for the desired `size` prop. Accepts any supported color.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    color: {
      options: colorNames,
      control: { type: 'select' },
    },
    icon: {
      options: Object.keys(Icon.Glyph),
      control: { type: 'select' },
    },
    size: {
      options: Object.keys(iconsizeProps.size),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'medium',
    color: 'earth-300',
    icon: Icon.Glyph.Action,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const icon = await canvas.getByTestId('icon-component')
    await expect(icon).toBeInTheDocument()
  },
}
