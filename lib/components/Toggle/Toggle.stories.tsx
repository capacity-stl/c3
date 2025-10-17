import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Toggle } from './Toggle'

const meta = {
  title: 'Input/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          'A toggle switch component with different states (default, disabled, error). Also known as a switch or toggle button.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(Toggle.State),
      description: 'State of the toggle',
      defaultValue: Toggle.State.Default,
    },
    label: {
      control: 'text',
      description: 'Label text for the toggle',
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state (uncontrolled)',
    },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Enable notifications',
    testId: 'toggle-default',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggle = await canvas.getByTestId('toggle-default')
    await expect(toggle).toBeInTheDocument()
  },
}

export const Checked: Story = {
  args: {
    label: 'Pre-checked toggle',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    state: Toggle.State.Disabled,
    label: 'Disabled toggle',
  },
}

export const DisabledChecked: Story = {
  args: {
    state: Toggle.State.Disabled,
    label: 'Disabled checked toggle',
    defaultChecked: true,
  },
}

export const Error: Story = {
  args: {
    state: Toggle.State.Error,
    label: 'Toggle with error',
  },
}

export const ErrorChecked: Story = {
  args: {
    state: Toggle.State.Error,
    label: 'Toggle with error (checked)',
    defaultChecked: true,
  },
}

export const WithoutLabel: Story = {
  args: {
    testId: 'toggle-no-label',
  },
}

export const MultipleToggles: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Toggle label="Email notifications" defaultChecked />
      <Toggle label="Push notifications" />
      <Toggle label="SMS notifications" defaultChecked />
      <Toggle label="In-app notifications" state={Toggle.State.Disabled} />
    </div>
  ),
}
