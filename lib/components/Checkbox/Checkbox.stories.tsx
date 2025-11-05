import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-default')
      await expect(checkbox).toBeInTheDocument()
    })

    await step('Checkbox is not checked by default', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await expect(input.checked).toBe(false)
    })

    await step('Label is rendered', async () => {
      const label = canvas.getByText('Accept terms and conditions')
      await expect(label).toBeInTheDocument()
    })

    await step('Checkbox can be clicked to check', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await userEvent.click(input)
      
      await waitFor(() => {
        expect(input.checked).toBe(true)
      })
    })

    await step('Checkbox can be clicked to uncheck', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await userEvent.click(input)
      
      await waitFor(() => {
        expect(input.checked).toBe(false)
      })
    })
  },
}

export const Checked: Story = {
  args: {
    label: 'Pre-checked checkbox',
    defaultChecked: true,
    testId: 'checkbox-checked',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-checked')
      await expect(checkbox).toBeInTheDocument()
    })

    await step('Checkbox is checked by default', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await expect(input.checked).toBe(true)
    })

    await step('Checkbox can be unchecked', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await userEvent.click(input)
      
      await waitFor(() => {
        expect(input.checked).toBe(false)
      })
    })
  },
}

export const Disabled: Story = {
  args: {
    state: Checkbox.State.Disabled,
    label: 'Disabled checkbox',
    testId: 'checkbox-disabled',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-disabled')
      await expect(checkbox).toBeInTheDocument()
    })

    await step('Checkbox is disabled', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await expect(input.disabled).toBe(true)
    })

    await step('Disabled checkbox cannot be clicked', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      const initialState = input.checked
      
      await userEvent.click(input)
      
      // State should not change because it's disabled
      await expect(input.checked).toBe(initialState)
    })
  },
}

export const DisabledChecked: Story = {
  args: {
    state: Checkbox.State.Disabled,
    label: 'Disabled checked checkbox',
    defaultChecked: true,
    testId: 'checkbox-disabled-checked',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-disabled-checked')
      await expect(checkbox).toBeInTheDocument()
    })

    await step('Checkbox is both disabled and checked', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await expect(input.disabled).toBe(true)
      await expect(input.checked).toBe(true)
    })
  },
}

export const Error: Story = {
  args: {
    state: Checkbox.State.Error,
    label: 'Checkbox with error',
    testId: 'checkbox-error',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-error')
      await expect(checkbox).toBeInTheDocument()
    })

    await step('Checkbox is not disabled in error state', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await expect(input.disabled).toBe(false)
    })

    await step('Checkbox can still be clicked in error state', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await userEvent.click(input)
      
      await waitFor(() => {
        expect(input.checked).toBe(true)
      })
    })
  },
}

export const WithoutLabel: Story = {
  args: {
    testId: 'checkbox-no-label',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Checkbox is rendered without label', async () => {
      const checkbox = canvas.getByTestId('checkbox-no-label')
      await expect(checkbox).toBeInTheDocument()
    })

    await step('Checkbox input is accessible', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await expect(input).toBeInTheDocument()
    })

    await step('Checkbox functions without label', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await userEvent.click(input)
      
      await waitFor(() => {
        expect(input.checked).toBe(true)
      })
    })
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true,
    testId: 'checkbox-indeterminate',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-indeterminate')
      await expect(checkbox).toBeInTheDocument()
    })

    await step('Checkbox is in indeterminate state', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await expect(input.indeterminate).toBe(true)
    })

    await step('Label text is rendered', async () => {
      const label = canvas.getByText('Indeterminate checkbox')
      await expect(label).toBeInTheDocument()
    })
  },
}

export const IndeterminateError: Story = {
  args: {
    label: 'Indeterminate with error',
    indeterminate: true,
    state: Checkbox.State.Error,
    testId: 'checkbox-indeterminate-error',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-indeterminate-error')
      await expect(checkbox).toBeInTheDocument()
    })

    await step('Checkbox is indeterminate and in error state', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await expect(input.indeterminate).toBe(true)
      await expect(input.disabled).toBe(false)
    })
  },
}

export const IndeterminateDisabled: Story = {
  args: {
    label: 'Indeterminate disabled',
    indeterminate: true,
    state: Checkbox.State.Disabled,
    testId: 'checkbox-indeterminate-disabled',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-indeterminate-disabled')
      await expect(checkbox).toBeInTheDocument()
    })

    await step('Checkbox is both indeterminate and disabled', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement
      await expect(input.indeterminate).toBe(true)
      await expect(input.disabled).toBe(true)
    })
  },
}

export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Option 1" defaultChecked testId="checkbox-option-1" />
      <Checkbox label="Option 2" testId="checkbox-option-2" />
      <Checkbox label="Option 3" testId="checkbox-option-3" />
      <Checkbox label="Option 4" state={Checkbox.State.Disabled} testId="checkbox-option-4" />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('All checkboxes are rendered', async () => {
      const option1 = canvas.getByTestId('checkbox-option-1')
      const option2 = canvas.getByTestId('checkbox-option-2')
      const option3 = canvas.getByTestId('checkbox-option-3')
      const option4 = canvas.getByTestId('checkbox-option-4')

      await expect(option1).toBeInTheDocument()
      await expect(option2).toBeInTheDocument()
      await expect(option3).toBeInTheDocument()
      await expect(option4).toBeInTheDocument()
    })

    await step('First checkbox is checked by default', async () => {
      const checkboxes = canvas.getAllByRole('checkbox') as HTMLInputElement[]
      await expect(checkboxes[0].checked).toBe(true)
    })

    await step('Last checkbox is disabled', async () => {
      const checkboxes = canvas.getAllByRole('checkbox') as HTMLInputElement[]
      await expect(checkboxes[3].disabled).toBe(true)
    })

    await step('Can interact with enabled checkboxes', async () => {
      const checkboxes = canvas.getAllByRole('checkbox') as HTMLInputElement[]
      
      // Click second checkbox
      await userEvent.click(checkboxes[1])
      await waitFor(() => {
        expect(checkboxes[1].checked).toBe(true)
      })
    })
  },
}

export const ParentChildExample: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Select All" indeterminate={true} testId="checkbox-parent" />
      <div className="ml-6 flex flex-col gap-2">
        <Checkbox label="Child Option 1" defaultChecked testId="checkbox-child-1" />
        <Checkbox label="Child Option 2" testId="checkbox-child-2" />
        <Checkbox label="Child Option 3" testId="checkbox-child-3" />
      </div>
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Parent checkbox is rendered', async () => {
      const parent = canvas.getByTestId('checkbox-parent')
      await expect(parent).toBeInTheDocument()
    })

    await step('All child checkboxes are rendered', async () => {
      const child1 = canvas.getByTestId('checkbox-child-1')
      const child2 = canvas.getByTestId('checkbox-child-2')
      const child3 = canvas.getByTestId('checkbox-child-3')

      await expect(child1).toBeInTheDocument()
      await expect(child2).toBeInTheDocument()
      await expect(child3).toBeInTheDocument()
    })

    await step('Parent checkbox is in indeterminate state', async () => {
      const checkboxes = canvas.getAllByRole('checkbox') as HTMLInputElement[]
      await expect(checkboxes[0].indeterminate).toBe(true)
    })

    await step('First child is checked by default', async () => {
      const checkboxes = canvas.getAllByRole('checkbox') as HTMLInputElement[]
      await expect(checkboxes[1].checked).toBe(true)
    })

    await step('Can interact with child checkboxes', async () => {
      const checkboxes = canvas.getAllByRole('checkbox') as HTMLInputElement[]
      
      // Click second child checkbox
      await userEvent.click(checkboxes[2])
      await waitFor(() => {
        expect(checkboxes[2].checked).toBe(true)
      })
    })
  },
}
