import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Input/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'A customizable checkbox component with different states (default, disabled, error) and support for indeterminate state.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(Checkbox.State),
      description: 'State of the checkbox',
      defaultValue: Checkbox.State.Default,
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state (uncontrolled)',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state (partially checked)',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    testId: 'checkbox-default',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = await canvas.getByTestId('checkbox-default')
    await expect(checkbox).toBeInTheDocument()
  },
}

export const Checked: Story = {
  args: {
    label: 'Pre-checked checkbox',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    state: Checkbox.State.Disabled,
    label: 'Disabled checkbox',
  },
}

export const DisabledChecked: Story = {
  args: {
    state: Checkbox.State.Disabled,
    label: 'Disabled checked checkbox',
    defaultChecked: true,
  },
}

export const Error: Story = {
  args: {
    state: Checkbox.State.Error,
    label: 'Checkbox with error',
  },
}

export const WithoutLabel: Story = {
  args: {
    testId: 'checkbox-no-label',
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true,
  },
}

export const IndeterminateError: Story = {
  args: {
    label: 'Indeterminate with error',
    indeterminate: true,
    state: Checkbox.State.Error,
  },
}

export const IndeterminateDisabled: Story = {
  args: {
    label: 'Indeterminate disabled',
    indeterminate: true,
    state: Checkbox.State.Disabled,
  },
}

export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Option 1" defaultChecked />
      <Checkbox label="Option 2" />
      <Checkbox label="Option 3" />
      <Checkbox label="Option 4" state={Checkbox.State.Disabled} />
    </div>
  ),
}

export const ParentChildExample: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Select All" indeterminate={true} />
      <div className="ml-6 flex flex-col gap-2">
        <Checkbox label="Child Option 1" defaultChecked />
        <Checkbox label="Child Option 2" />
        <Checkbox label="Child Option 3" />
      </div>
    </div>
  ),
}
