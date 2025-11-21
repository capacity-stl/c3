import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Text } from './Text'
import { asTypes } from './Text.props'
import { colorNames } from '../../props/color.props'
import { fontSizes } from '../../props/font.props'

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'Fundamental typography component.',
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
    as: {
      control: {
        type: 'select',
      },
      options: Object.values(asTypes),
      table: {
        type: { summary: 'The HTML tag to render the text as' },
        defaultValue: { summary: 'div' },
      },
    },
    type: {
      control: {
        type: 'select',
      },
      options: Object.keys(fontSizes),
      table: {
        type: { summary: 'The type of text to render' },
        defaultValue: { summary: 'body' },
      },
    },
    children: {
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'The text to render' },
        defaultValue: { summary: '' },
      },
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      table: {
        type: { summary: 'The alignment of the text' },
        defaultValue: { summary: 'left' },
      },
    },
    color: {
      control: {
        type: 'select',
      },
      options: colorNames,
      table: {
        type: { summary: 'The color of the text' },
        defaultValue: { summary: 'deep-space' },
      },
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello, world',
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
    color: 'deep-space',
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
      'text-3xl text-deep-space font-semibold leading-10',
    )
  },
}

export const HeadingLarge: Story = {
  args: {
    children: 'This is a Large Heading',
    as: asTypes.h1,
    type: 'heading-large',
    color: 'deep-space',
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
      'text-2xl text-deep-space font-semibold leading-8',
    )
  },
}

export const Heading: Story = {
  args: {
    children: 'This is a Heading',
    as: asTypes.h1,
    type: 'heading',
    color: 'deep-space',
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
      'text-xl text-deep-space font-semibold leading-7',
    )
  },
}

export const Subheading: Story = {
  args: {
    children: 'This is a Subheading',
    as: asTypes.h2,
    type: 'subheading',
    color: 'deep-space',
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
    color: 'deep-space',
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
    await expect(text).toHaveClass('text-sm text-deep-space leading-5')
  },
}

export const BodyLarge: Story = {
  args: {
    children: 'This is a Body Large. Lorem ipsum dolor sit amet.',
    as: asTypes.div,
    type: 'body-large',
    color: 'deep-space',
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
    color: 'deep-space',
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
      'text-base text-deep-space font-medium leading-5',
    )
  },
}

export const BodySmall: Story = {
  args: {
    children: 'This is a Body Small. Lorem ipsum dolor sit amet.',
    as: asTypes.div,
    type: 'body-small',
    color: 'deep-space',
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
    await expect(text).toHaveClass('text-xs text-deep-space leading-4')
  },
}

export const BodySmallStrong: Story = {
  args: {
    children: 'This is a Body Small Strong. Lorem ipsum dolor sit amet.',
    as: asTypes.div,
    type: 'body-small-strong',
    color: 'deep-space',
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
      'text-xs text-deep-space font-semibold leading-4',
    )
  },
}

export const SmallCaps: Story = {
  args: {
    children: 'This is a Small Caps',
    as: asTypes.div,
    type: 'small-caps',
    color: 'deep-space',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('div')
    await expect(text).toHaveClass(
      'text-xxs leading-3 tracking-wide uppercase font-semibold',
    )
  },
}

export const Code: Story = {
  args: {
    children: 'console.log("Hello, world")',
    as: asTypes.code,
    type: 'code',
    color: 'deep-space',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('code')
    await expect(text).toHaveClass('text-sm text-deep-space leading-3')
  },
}

export const CodeSmall: Story = {
  args: {
    children: 'console.log("Hello, world")',
    as: asTypes.code,
    type: 'code-small',
    color: 'deep-space',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toContainHTML('code')
    await expect(text).toHaveClass('text-xs text-deep-space leading-3')
  },
}

export const Truncate: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet.cillum labore in adipisicing exercitation exercitation deserunt velit ad commodo adipisicing enim sunt adipisicing reprehenderit dolor sit Lorem excepteur anim reprehenderit dolor labore mollit in adipisicing irure in proident deserunt duis esse quis minim aute nostrud officia amet ipsum aute consequat sint veniam ad consectetur minim aute nostrud id ut et exercitation fugiat aliqua id laboris et velit sunt ipsum anim laborum sint ad tempor laboris do est proident cupidatat amet proident ut esse dolore fugiat in eu aute nulla eu occaecat quis dolor officia esse anim duis sunt ullamco do nostrud incididunt adipisicing irure incididunt culpa ea ipsum commodo adipisicing ea nulla tempor mollit id duis proident mollit nostrud excepteur sit quis elit officia fugiat ad dolor voluptate dolor aliqua est id enim cupidatat nisi officia culpa nulla officia proident aliqua officia deserunt est ea exercitation deserunt in excepteur do fugiat dolor et proident do aliquip occaecat ut ipsum commodo aliqua voluptate sunt Lorem et quis duis velit qui Lorem ea aliquip cupidatat eu est Lorem dolor occaecat qui ex nostrud consectetur velit ex culpa irure laborum aliqua voluptate occaecat ad fugiat velit nulla sit qui exercitation reprehenderit occaecat adipisicing adipisicing ad proident culpa veniam proident sint ex exercitation',
    as: asTypes.div,
    className: 'w-[500px] truncate',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = await canvas.getByTestId('text-component')

    await expect(text).toBeInTheDocument()
    await expect(text).toHaveClass('truncate')
  },
}
