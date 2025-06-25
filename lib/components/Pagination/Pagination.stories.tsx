import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Pagination } from './Pagination'

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'Pagination with page navigation, next and previous links.',
      },
    },
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {
    children: {
      defaultValue: 'Pagination',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'w-full',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const pagination = await canvas.getByTestId('pagination-component')
    await expect(pagination).toBeInTheDocument()
  },
}

export const WithCustomProps: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A pagination component with custom props',
      },
    },
  },
  args: {
    totalPages: 10,
    currentPage: 1,
    setCurrentPage: () => {},
    totalItemsShown: 7,
    siblingRange: 3,
    activeBgColor: 'earth-300',
    activeTextColor: 'white',
    disabled: false,
    bgColor: 'white',
  },
} satisfies Story
