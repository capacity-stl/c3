import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'
import { colorPalletes } from '@props/color.props'
import { expect, fn } from '@storybook/test'
import { within, userEvent } from '@storybook/testing-library'
import { badgeSizeProps } from './Badge.props'
import { shapeProps } from '@props/shape.props'
import { Text } from '@components/Text/Text'
import { Icons } from '@components/Icon/Glyphs'

const meta = {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'A badge component for displaying labels or items.',
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

    icon: {
      options: ['Not Defined', ...Object.keys(Icons)],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      description: 'Icon of the badge',
      table: {
        type: {
          summary: 'string ',
        },
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

    value: {
      description: 'Value returned as parameter onRemove',
      table: {
        type: {
          summary: 'string ',
        },
        defaultValue: { summary: 'undefined' },
      },
    },

    onRemove: {
      description: 'Function to be called when the badge is removed',
      table: {
        type: {
          summary: 'function ',
        },
      },
      defaultValue: { summary: 'undefined' },
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
    color: 'meteor',
    onRemove: undefined,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const badge = await canvas.getByTestId('badge-component')

    await step('Check the component is rendered', async () => {
      await expect(badge).toBeInTheDocument()
    })
  },
}

export const Size: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Badge size="tiny">tiny</Badge>
<Badge size="small">small</Badge>
<Badge size="medium">medium</Badge>
<Badge size="large">large</Badge>
<Badge size="huge">huge</Badge>`,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="tiny">tiny</Badge>
      <Badge size="small">small</Badge>
      <Badge size="medium">medium</Badge>
      <Badge size="large">large</Badge>
      <Badge size="huge">huge</Badge>
    </div>
  ),
}

export const Dense: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Badge dense size="tiny">tiny</Badge>
<Badge dense size="small">small</Badge>
<Badge dense size="medium">medium</Badge>
<Badge dense size="large">large</Badge>
<Badge dense size="huge">huge</Badge>`,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Badge dense size="tiny">
        tiny
      </Badge>
      <Badge dense size="small">
        small
      </Badge>
      <Badge dense size="medium">
        medium
      </Badge>
      <Badge dense size="large">
        large
      </Badge>
      <Badge dense size="huge">
        huge
      </Badge>
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Check dense badges have correct styling', async () => {
      const badge = canvas.getByText('tiny')
      await expect(badge).toBeInTheDocument()
      await expect(badge).toHaveClass('px-1')
      await expect(badge).toHaveClass('py-0')
    })
  },
}

export const Shape: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<Badge shape="circle">circle</Badge>
<Badge shape="rounded">rounded</Badge>
<Badge shape="square">square</Badge>`,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Badge shape="circle">circle</Badge>
      <Badge shape="rounded">rounded</Badge>
      <Badge shape="square">square</Badge>
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const shapes: (keyof typeof shapeProps.shape)[] = [
      'circle',
      'rounded',
      'square',
    ]

    await step(
      'Check all shapes are rendered with correct classes',
      async () => {
        for (const shape of shapes) {
          const badge = canvas.getByText(shape)
          await expect(badge).toBeInTheDocument()
          await expect(badge).toHaveClass(shapeProps.shape[shape])
        }
      },
    )
  },
}

export const Color: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: Object.keys(colorPalletes)
          .map(
            (color) =>
              `<Badge key="${color}" color="${color}">${color}</Badge>`,
          )
          .join('\n'),
        language: 'tsx',
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-4">
      {Object.keys(colorPalletes).map((color) => (
        <Badge key={color} color={color as keyof typeof colorPalletes}>
          {color}
        </Badge>
      ))}
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Check all color variants are rendered', async () => {
      for (const color of Object.keys(colorPalletes)) {
        const badge = canvas.getByText(color, { exact: false })
        await expect(badge).toBeInTheDocument()
        await expect(badge.className).toMatch(`bg-${color}`)
      }
    })
  },
}

export const Icon: Story = {
  args: {
    children: 'Rich Content Examples',
    color: 'meteor',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Badge color="meteor" icon="Person">User</Badge>
<Badge dense color="meteor" icon="Person">User</Badge>
<Badge color="neptune" icon="Clock" />
<Badge color="mars" icon="Clock" shape="rounded" />`,
        language: 'tsx',
      },
    },
  },

  render: () => (
    <div className="flex items-center gap-4">
      <Badge color="meteor" icon="Person">
        User
      </Badge>
      <Badge dense color="meteor" icon="Person">
        User
      </Badge>
      <Badge color="neptune" icon="Clock" />
      <Badge color="mars" icon="Clock" shape="rounded" />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const badges = canvas.getAllByRole('status')

    await step('Check badges with icons are rendered correctly', async () => {
      badges.forEach(async (badge) => {
        const icon = within(badge).queryByTestId('icon-component')
        await expect(icon).toBeInTheDocument()
      })
    })
  },
}

export const RichContent: Story = {
  args: {
    children: 'Rich Content Examples',
    color: 'meteor',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Badge color="meteor" icon="Person">
  <Text type="body-small-strong">Role</Text>
  <Text type="small-caps">Developer</Text>
</Badge>`,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Badge color="meteor" icon="Person">
        <Text type="body-small-strong">Role</Text>
        <Text type="small-caps">Developer</Text>
      </Badge>
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const badge = canvas.getByRole('status')

    await step('Check rich content structure', async () => {
      await expect(badge).toBeInTheDocument()
      const boldText = within(badge).getByText('Role')
      const italicText = within(badge).getByText('Developer')

      await expect(boldText).toHaveClass('font-semibold')
      await expect(italicText).toHaveClass('leading-3', 'uppercase')
    })
  },
}

export const OnRemove: Story = {
  args: {
    children: '',
    color: 'meteor',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Badge onRemove={(v) => alert(\`Removed with value: \${v}\`)} value="1">John</Badge>
<Badge onRemove={(v) => alert(\`Removed with value: \${v}\`)} value="2">Jane</Badge>`,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Badge
        dense
        icon="Person"
        color="meteor"
        onRemove={(v) => alert(`Removed with value: ${v}`)}
        value="1"
      >
        John
      </Badge>
      <Badge
        icon="Person"
        color="meteor"
        onRemove={(v) => alert(`Removed with value: ${v}`)}
        value="2"
      >
        Jane
      </Badge>
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Check remove functionality', async () => {
      const removeButtons = canvas.getAllByRole('button')
      const alertMock = fn()
      window.alert = alertMock

      await userEvent.click(removeButtons[0])
      await expect(alertMock).toHaveBeenCalledWith('Removed with value: 1')

      await userEvent.click(removeButtons[1])
      await expect(alertMock).toHaveBeenCalledWith('Removed with value: 2')
    })
  },
}
