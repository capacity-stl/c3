import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Toggle is rendered', async () => {
      const toggle = canvas.getByTestId('toggle-default')
      await expect(toggle).toBeInTheDocument()
    })

    await step('Toggle is not checked by default', async () => {
      const switchElement = canvas.getByRole('switch')
      await expect(switchElement).toHaveAttribute('aria-checked', 'false')
    })

    await step('Label is rendered', async () => {
      const label = canvas.getByText('Enable notifications')
      await expect(label).toBeInTheDocument()
    })

    await step('Toggle can be clicked to turn on', async () => {
      const switchElement = canvas.getByRole('switch')
      await userEvent.click(switchElement)

      await waitFor(() => {
        expect(switchElement).toHaveAttribute('aria-checked', 'true')
      })
    })

    await step('Toggle can be clicked to turn off', async () => {
      const switchElement = canvas.getByRole('switch')
      await userEvent.click(switchElement)

      await waitFor(() => {
        expect(switchElement).toHaveAttribute('aria-checked', 'false')
      })
    })
  },
}

export const Checked: Story = {
  args: {
    label: 'Pre-checked toggle',
    defaultChecked: true,
    testId: 'toggle-checked',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Toggle is rendered', async () => {
      const toggle = canvas.getByTestId('toggle-checked')
      await expect(toggle).toBeInTheDocument()
    })

    await step('Toggle is checked by default', async () => {
      const switchElement = canvas.getByRole('switch')
      await expect(switchElement).toHaveAttribute('aria-checked', 'true')
    })

    await step('Toggle can be turned off', async () => {
      const switchElement = canvas.getByRole('switch')
      await userEvent.click(switchElement)

      await waitFor(() => {
        expect(switchElement).toHaveAttribute('aria-checked', 'false')
      })
    })
  },
}

export const Disabled: Story = {
  args: {
    state: Toggle.State.Disabled,
    label: 'Disabled toggle',
    testId: 'toggle-disabled',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Toggle is rendered', async () => {
      const toggle = canvas.getByTestId('toggle-disabled')
      await expect(toggle).toBeInTheDocument()
    })

    await step('Toggle is disabled', async () => {
      const switchElement = canvas.getByRole('switch')
      await expect(switchElement).toBeDisabled()
    })

    await step('Disabled toggle cannot be clicked', async () => {
      const switchElement = canvas.getByRole('switch')
      const initialState = switchElement.getAttribute('aria-checked')

      await userEvent.click(switchElement)

      // State should not change because it's disabled
      await expect(switchElement).toHaveAttribute('aria-checked', initialState)
    })
  },
}

export const DisabledChecked: Story = {
  args: {
    state: Toggle.State.Disabled,
    label: 'Disabled checked toggle',
    defaultChecked: true,
    testId: 'toggle-disabled-checked',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Toggle is rendered', async () => {
      const toggle = canvas.getByTestId('toggle-disabled-checked')
      await expect(toggle).toBeInTheDocument()
    })

    await step('Toggle is both disabled and checked', async () => {
      const switchElement = canvas.getByRole('switch')
      await expect(switchElement).toBeDisabled()
      await expect(switchElement).toHaveAttribute('aria-checked', 'true')
    })
  },
}

export const Error: Story = {
  args: {
    state: Toggle.State.Error,
    label: 'Toggle with error',
    testId: 'toggle-error',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Toggle is rendered', async () => {
      const toggle = canvas.getByTestId('toggle-error')
      await expect(toggle).toBeInTheDocument()
    })

    await step('Toggle is not disabled in error state', async () => {
      const switchElement = canvas.getByRole('switch')
      await expect(switchElement).not.toBeDisabled()
    })

    await step('Toggle can still be clicked in error state', async () => {
      const switchElement = canvas.getByRole('switch')
      await userEvent.click(switchElement)

      await waitFor(() => {
        expect(switchElement).toHaveAttribute('aria-checked', 'true')
      })
    })
  },
}

export const ErrorChecked: Story = {
  args: {
    state: Toggle.State.Error,
    label: 'Toggle with error (checked)',
    defaultChecked: true,
    testId: 'toggle-error-checked',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Toggle is rendered', async () => {
      const toggle = canvas.getByTestId('toggle-error-checked')
      await expect(toggle).toBeInTheDocument()
    })

    await step('Toggle is checked and in error state', async () => {
      const switchElement = canvas.getByRole('switch')
      await expect(switchElement).toHaveAttribute('aria-checked', 'true')
      await expect(switchElement).not.toBeDisabled()
    })

    await step('Toggle can be turned off', async () => {
      const switchElement = canvas.getByRole('switch')
      await userEvent.click(switchElement)

      await waitFor(() => {
        expect(switchElement).toHaveAttribute('aria-checked', 'false')
      })
    })
  },
}

export const WithoutLabel: Story = {
  args: {
    testId: 'toggle-no-label',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Toggle is rendered without label', async () => {
      const toggle = canvas.getByTestId('toggle-no-label')
      await expect(toggle).toBeInTheDocument()
    })

    await step('Toggle switch is accessible', async () => {
      const switchElement = canvas.getByRole('switch')
      await expect(switchElement).toBeInTheDocument()
    })

    await step('Toggle functions without label', async () => {
      const switchElement = canvas.getByRole('switch')
      await userEvent.click(switchElement)

      await waitFor(() => {
        expect(switchElement).toHaveAttribute('aria-checked', 'true')
      })
    })
  },
}

export const MultipleToggles: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Toggle
        label="Email notifications"
        defaultChecked
        testId="toggle-email"
      />
      <Toggle label="Push notifications" testId="toggle-push" />
      <Toggle label="SMS notifications" defaultChecked testId="toggle-sms" />
      <Toggle
        label="In-app notifications"
        state={Toggle.State.Disabled}
        testId="toggle-inapp"
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('All toggles are rendered', async () => {
      const emailToggle = canvas.getByTestId('toggle-email')
      const pushToggle = canvas.getByTestId('toggle-push')
      const smsToggle = canvas.getByTestId('toggle-sms')
      const inappToggle = canvas.getByTestId('toggle-inapp')

      await expect(emailToggle).toBeInTheDocument()
      await expect(pushToggle).toBeInTheDocument()
      await expect(smsToggle).toBeInTheDocument()
      await expect(inappToggle).toBeInTheDocument()
    })

    await step('First and third toggles are checked by default', async () => {
      const switches = canvas.getAllByRole('switch')
      await expect(switches[0]).toHaveAttribute('aria-checked', 'true')
      await expect(switches[1]).toHaveAttribute('aria-checked', 'false')
      await expect(switches[2]).toHaveAttribute('aria-checked', 'true')
    })

    await step('Last toggle is disabled', async () => {
      const switches = canvas.getAllByRole('switch')
      await expect(switches[3]).toBeDisabled()
    })

    await step('Can interact with enabled toggles', async () => {
      const switches = canvas.getAllByRole('switch')

      // Click second toggle
      await userEvent.click(switches[1])
      await waitFor(() => {
        expect(switches[1]).toHaveAttribute('aria-checked', 'true')
      })
    })

    await step('All labels are displayed correctly', async () => {
      const emailLabel = canvas.getByText('Email notifications')
      const pushLabel = canvas.getByText('Push notifications')
      const smsLabel = canvas.getByText('SMS notifications')
      const inappLabel = canvas.getByText('In-app notifications')

      await expect(emailLabel).toBeInTheDocument()
      await expect(pushLabel).toBeInTheDocument()
      await expect(smsLabel).toBeInTheDocument()
      await expect(inappLabel).toBeInTheDocument()
    })
  },
}
