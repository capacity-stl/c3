import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Text } from './Text'
import { asTypes } from './Text.props'
const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'Fundamental typography component.',
      },
    },
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello, world',
    as: asTypes.div,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
  },
}

export const HeadingXL: Story = {
  args: {
    children: 'This is an XL Heading',
    as: asTypes.h1,
    type: 'heading-xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'KB Article Titles',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('h1')
    await expect(text).toHaveClass(
      'text-3xl text-deep-space font-bold leading-10',
    )
  },
}

export const HeadingLarge: Story = {
  args: {
    children: 'This is a Large Heading',
    as: asTypes.h1,
    type: 'heading-large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty State Headings',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('h1')
    await expect(text).toHaveClass(
      'text-2xl text-deep-space font-bold leading-8',
    )
  },
}

export const Heading: Story = {
  args: {
    children: 'This is a Heading',
    as: asTypes.h1,
    type: 'heading',
  },
  parameters: {
    docs: {
      description: {
        story: 'Section Titles (Top Nav Bar),Page Titles, Modal Titles',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('h1')
    await expect(text).toHaveClass(
      'text-xl text-deep-space font-bold leading-7',
    )
  },
}

export const Subheading: Story = {
  args: {
    children: 'This is a Subheading',
    as: asTypes.h2,
    type: 'subheading',
  },
  parameters: {
    docs: {
      description: {
        story: 'Subheadings, Notification/Alert headings',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('h2')
    await expect(text).toHaveClass('text-lg text-deep-space leading-6')
  },
}

export const Body: Story = {
  args: {
    children: 'This is a Body',
    as: asTypes.div,
    type: 'body',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default font style for components, body copy,form field labels',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('div')
    await expect(text).toHaveClass('text-base text-deep-space leading-5')
  },
}

export const BodyLarge: Story = {
  args: {
    children: 'This is a Body Large. Lorem ipsum dolor sit amet.',
    as: asTypes.div,
    type: 'body-large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty State paragraph',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('div')
    await expect(text).toHaveClass('text-lg text-deep-space leading-6')
  },
}

export const BodyStrong: Story = {
  args: {
    children: 'This is a Body Strong. Lorem ipsum dolor sit amet.',
    as: asTypes.div,
    type: 'body-strong',
  },
  parameters: {
    docs: {
      description: {
        story: 'Bold type in a paragraph or body copy,large buttons',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('div')
    await expect(text).toHaveClass(
      'text-base text-deep-space font-semibold leading-5',
    )
  },
}

export const BodySmall: Story = {
  args: {
    children: 'This is a Body Small. Lorem ipsum dolor sit amet.',
    as: asTypes.div,
    type: 'body-small',
  },
  parameters: {
    docs: {
      description: {
        story: 'Micro-copy, tooltips',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('div')
    await expect(text).toHaveClass('text-sm text-deep-space leading-4')
  },
}

export const BodySmallStrong: Story = {
  args: {
    children: 'This is a Body Small Strong. Lorem ipsum dolor sit amet.',
    as: asTypes.div,
    type: 'body-small-strong',
  },
  parameters: {
    docs: {
      description: {
        story: 'Bold micro-copy, badges, table headers, tabs, small buttons',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('div')
    await expect(text).toHaveClass(
      'text-sm text-deep-space font-semibold leading-4',
    )
  },
}

export const SmallCaps: Story = {
  args: {
    children: 'This is a Small Caps',
    as: asTypes.div,
    type: 'small-caps',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('div')
    await expect(text).toHaveClass(
      'text-xs text-deep-space leading-3 tracking-wide uppercase',
    )
  },
}

export const Code: Story = {
  args: {
    children: '<p>This is a Code</p>',
    as: asTypes.code,
    type: 'code',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('code')
    await expect(text).toHaveClass('text-base text-deep-space leading-3')
  },
}

export const CodeSmall: Story = {
  args: {
    children: '<p>This is a Code Small</p>',
    as: asTypes.code,
    type: 'code-small',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('code')
    await expect(text).toHaveClass(
      'text-sm text-deep-space font-semibold leading-3',
    )
  },
}
