import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { TemplateName } from './TemplateName'

const meta = {
  title: 'TemplateName',
  component: TemplateName,
  parameters: {
    docs: {
      description: {
        component: 'TemplateName',
      },
    },
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {
    children: {
      defaultValue: 'TemplateName',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof TemplateName>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'I am a TemplateName',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const templateName = await canvas.getByTestId('template-name')
    await expect(templateName).toBeInTheDocument()
  },
}
