import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Label } from './Label'
import { colorNames } from '../../props/color.props'

const meta = {
  title: 'Data Display/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component:
          'Label component for form inputs. Supports required indicator and disabled state.',
      },
    },
    controls: {
      exclude: [
        'testId',
        'className',
        'mx',
        'my',
        'px',
        'py',
        'w',
        'h',
        'border',
        'pt',
        'pb',
        'pl',
        'pr',
        'm',
        'p',
        'min-w',
        'min-h',
        'max-w',
        'max-h',
        'mt',
        'mb',
        'ml',
        'mr',
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'The label text' },
        defaultValue: { summary: '' },
      },
    },
    htmlFor: {
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'The id of the form element this label is for' },
        defaultValue: { summary: '' },
      },
    },
    type: {
      control: {
        type: 'select',
      },
      options: ['body', 'body-small', 'body-strong', 'body-small-strong'],
      table: {
        type: { summary: 'The font style of the label' },
        defaultValue: { summary: 'body' },
      },
    },
    color: {
      control: {
        type: 'select',
      },
      options: colorNames,
      table: {
        type: { summary: 'The color of the label text' },
        defaultValue: { summary: 'deep-space' },
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'Shows required asterisk indicator' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'Applies disabled styling' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = await canvas.getByTestId('label-component')

    await expect(label).toBeInTheDocument()
    await expect(label).toContainHTML('Email Address')
  },
}

export const Required: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Label with required indicator (red asterisk)',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = await canvas.getByTestId('label-component')

    await expect(label).toBeInTheDocument()
    await expect(label).toContainHTML('Email Address')
  },
}

export const Disabled: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Label with disabled styling (reduced opacity)',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = await canvas.getByTestId('label-component')

    await expect(label).toBeInTheDocument()
    await expect(label).toHaveClass('opacity-50')
  },
}

export const RequiredAndDisabled: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    required: true,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Label that is both required and disabled',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = await canvas.getByTestId('label-component')

    await expect(label).toBeInTheDocument()
    await expect(label).toHaveClass('opacity-50')
  },
}

export const SmallLabel: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    type: 'body-small',
  },
  parameters: {
    docs: {
      description: {
        story: 'Smaller label text for compact forms',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = await canvas.getByTestId('label-component')

    await expect(label).toBeInTheDocument()
    await expect(label).toHaveClass('text-xs')
  },
}

export const StrongLabel: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    type: 'body-strong',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Bold label text for emphasis',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = await canvas.getByTestId('label-component')

    await expect(label).toBeInTheDocument()
    await expect(label).toHaveClass('font-medium')
  },
}

export const CustomColor: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    color: 'earth-400',
  },
  parameters: {
    docs: {
      description: {
        story: 'Label with custom color from the design system',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = await canvas.getByTestId('label-component')

    await expect(label).toBeInTheDocument()
    await expect(label).toHaveClass('text-earth-400')
  },
}
