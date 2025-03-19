import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { TextBox } from './TextBox'
import { Icon } from '../Icon/Icon'
import { colorNames } from '../../props/color.props'

const meta = {
  title: 'Form/Textbox',
  component: TextBox,
  parameters: {
    docs: {
      description: {
        component: 'Input element.',
      },
    },
    layout: 'centered',
    controls: {
      exclude: [
        'className',
        'testId',
        'value',
        'w',
        'wMin',
        'wMax',
        'm',
        'mx',
        'my',
        'mt',
        'mr',
        'mb',
        'ml',
        'hasLeadingIcon',
        'hasTrailingIcon',
      ],
    },
  },

  tags: ['autodocs'],
  argTypes: {
    type: {
      mapping: TextBox.Types,
      options: Object.keys(TextBox.Types),
      control: { type: 'radio' },
      table: {
        type: {
          summary:
            '`standard` will rendered with a solid border, whereas `shadow` will render with a contact shadow',
        },
        defaultValue: { summary: 'standard' },
      },
    },
    size: {
      mapping: TextBox.Sizes,
      options: Object.keys(TextBox.Sizes),
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'The height of the input',
        },
        defaultValue: { summary: 'small' },
      },
    },
    color: {
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The color of the value text',
        },
        defaultValue: { summary: 'night' },
      },
    },
    leadingIcon: {
      mapping: { 'No Icon': null },
      options: ['No Icon', ...Object.keys(Icon.Glyph)],
      control: { type: 'select' },
      table: {
        type: {
          summary: 'An icon positioned to the left of the input content',
        },
      },
    },
    leadingIconColor: {
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: { summary: 'The color of the leading icon' },
        defaultValue: { summary: 'meteor-300' },
      },
    },
    trailingIcon: {
      mapping: { 'No Icon': null },
      options: ['No Icon', ...Object.keys(Icon.Glyph)],
      control: { type: 'select' },
      table: {
        type: {
          summary: 'An icon positioned to the right of the input content',
        },
      },
    },
    trailingIconColor: {
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: { summary: 'The color of the trailing icon' },
        defaultValue: { summary: 'meteor-300' },
      },
    },
    placeholder: {
      table: {
        type: { summary: 'Text to show when the value is unset' },
      },
    },
    isError: {
      options: [true, false],
    },
    hasLeadingIcon: {
      control: false,
      table: {
        type: {
          summary: 'This value is derived and should not be set directly',
        },
        disabled: true,
      },
    },
    hasTrailingIcon: {
      control: false,
      table: {
        type: {
          summary: 'This value is derived and should not be set directly',
        },
        disabled: true,
      },
    },
    testId: {
      control: false,
    },
  },
} satisfies Meta<typeof TextBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    testId: 'default-input',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = await canvas.getByTestId('default-input')
    await expect(input).toBeInTheDocument()
  },
}

export const Search: Story = {
  args: {
    type: TextBox.Types.Shadow,
    leadingIcon: Icon.Glyph.Search,
    placeholder: 'Search...',
    testId: 'search-box',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = await canvas.getByTestId('search-box')
    await expect(input).toBeInTheDocument()
  },
}

export const MediumInput: Story = {
  args: {
    size: TextBox.Sizes.Medium,
    placeholder: 'Account Name',
    testId: 'input-box',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = await canvas.getByTestId('input-box')
    await expect(input).toBeInTheDocument()
  },
}

export const ErrorState: Story = {
  args: {
    isError: true,
    placeholder: 'Phone Number (Required)',
    testId: 'error-box',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = await canvas.getByTestId('error-box')
    await expect(input).toBeInTheDocument()
  },
}
