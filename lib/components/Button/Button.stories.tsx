import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Button } from './Button'
import { BUTTON_TYPES, BUTTON_SIZES, BUTTON_STATES } from './Button.props'
import { Text } from '@components/Text/Text'
import { Icon } from '@components/Icon/Icon'
import { BadgeDot } from '@components/BadgeDot/BadgeDot'

const meta = {
  title: 'Input/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Renders a button',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    type: {
      mapping: BUTTON_TYPES,
      options: Object.keys(BUTTON_TYPES),
      control: { type: 'select' },
    },
    size: {
      mapping: BUTTON_SIZES,
      options: Object.keys(BUTTON_SIZES),
      control: { type: 'select' },
    },
    state: {
      mapping: BUTTON_STATES,
      options: Object.keys(BUTTON_STATES),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onClick: () => alert('click'),
    m: '2',
  },
  render: (props) => (
    <div>
      <Button {...props} testId="icon-button">
        <Icon icon={Icon.Glyph.Plus} />
      </Button>

      <Button {...props} testId="number-button">
        <Icon icon={Icon.Glyph.Visibility} />
        <Text>10</Text>
      </Button>

      <Button {...props} testId="text-button">
        <Text>Text Only</Text>
      </Button>

      <Button {...props} testId="right-icon-button">
        <Text>Icon Right</Text>
        <Icon icon={Icon.Glyph.Plus} />
      </Button>

      <Button {...props} testId="left-icon-button">
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Icon Left</Text>
      </Button>

      <Button {...props} testId="dual-decorator-button">
        <Icon icon={Icon.Glyph.FilterKB} />
        <Text>Dual Decorators</Text>
        <BadgeDot>7</BadgeDot>
      </Button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const iconButton = await canvas.getByTestId('icon-button')
    await expect(iconButton).toBeInTheDocument()

    const numberButton = await canvas.getByTestId('number-button')
    await expect(numberButton).toBeInTheDocument()

    const textButton = await canvas.getByTestId('text-button')
    await expect(textButton).toBeInTheDocument()

    const rightIconButton = await canvas.getByTestId('right-icon-button')
    await expect(rightIconButton).toBeInTheDocument()

    const leftIconButton = await canvas.getByTestId('left-icon-button')
    await expect(leftIconButton).toBeInTheDocument()

    const dualDecoratorButton = await canvas.getByTestId(
      'dual-decorator-button',
    )
    await expect(dualDecoratorButton).toBeInTheDocument()
  },
}

export const ButtonSizeExamples: Story = {
  args: {
    onClick: () => alert('click'),
    m: '2',
  },
  render: (props) => (
    <div>
      <Button {...props} size={BUTTON_SIZES.Small}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Small</Text>
      </Button>

      <Button {...props} size={BUTTON_SIZES.Medium}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Medium</Text>
      </Button>
    </div>
  ),
}

export const ButtonTypeExamples: Story = {
  args: {
    onClick: () => alert('click'),
    m: '2',
  },
  render: (props) => (
    <div>
      <Button {...props} type={BUTTON_TYPES.Primary}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Primary</Text>
      </Button>

      <Button {...props} type={BUTTON_TYPES.Secondary}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Secondary</Text>
      </Button>

      <Button {...props} type={BUTTON_TYPES.Minimal}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Minimal</Text>
      </Button>

      <Button {...props} type={BUTTON_TYPES.Destructive}>
        <Icon icon={Icon.Glyph.Delete} />
        <Text>Destructive</Text>
      </Button>
    </div>
  ),
}

export const ButtonStateExamples: Story = {
  args: {
    onClick: () => alert('click'),
    m: '2',
  },
  render: (props) => (
    <div>
      <Button {...props} state={BUTTON_STATES.Initial}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Initial</Text>
      </Button>

      <Button {...props} state={BUTTON_STATES.Loading}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Loading</Text>
      </Button>

      <Button {...props} state={BUTTON_STATES.Success}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Success</Text>
      </Button>

      <Button {...props} state={BUTTON_STATES.Error}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Error</Text>
      </Button>

      <Button {...props} state={BUTTON_STATES.Disabled}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Disabled</Text>
      </Button>
    </div>
  ),
}
