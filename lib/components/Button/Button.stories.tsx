import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Button } from './Button'
import { ButtonTypes, ButtonSizes, ButtonStates } from './Button.props'
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
      mapping: ButtonTypes,
      options: Object.keys(ButtonTypes),
      control: { type: 'select' },
    },
    size: {
      mapping: ButtonSizes,
      options: Object.keys(ButtonSizes),
      control: { type: 'select' },
    },
    state: {
      mapping: ButtonStates,
      options: Object.keys(ButtonStates),
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
      <Button {...props} size={ButtonSizes.Small}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Small</Text>
      </Button>

      <Button {...props} size={ButtonSizes.Medium}>
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
      <Button {...props} type={ButtonTypes.Primary}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Primary</Text>
      </Button>

      <Button {...props} type={ButtonTypes.Secondary}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Secondary</Text>
      </Button>

      <Button {...props} type={ButtonTypes.Minimal}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Minimal</Text>
      </Button>

      <Button {...props} type={ButtonTypes.Destructive}>
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
      <Button {...props} state={ButtonStates.Initial}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Initial</Text>
      </Button>

      <Button {...props} state={ButtonStates.Loading}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Loading</Text>
      </Button>

      <Button {...props} state={ButtonStates.Success}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Success</Text>
      </Button>

      <Button {...props} state={ButtonStates.Error}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Error</Text>
      </Button>

      <Button {...props} state={ButtonStates.Disabled}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Disabled</Text>
      </Button>
    </div>
  ),
}
