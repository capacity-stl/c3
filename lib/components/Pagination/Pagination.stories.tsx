import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import React, { useState } from 'react'
import { Pagination } from './Pagination'
import { colorNames } from '@props/color.props'

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'Pagination with page navigation, next and previous links.',
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
        'hMin',
        'hMax',
        'wMin',
        'wMax',
        'children',
        'bgColor',
        'disabled',
        'value',
        'active',
      ],
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
    activeBgColor: {
      defaultValue: 'white',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The color of the background of the active pagination item',
        },
        defaultValue: { summary: undefined },
      },
    },
    activeTextColor: {
      defaultValue: 'white',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The color of the text of the active pagination item',
        },
        defaultValue: { summary: undefined },
      },
    },
    activeBorderColor: {
      defaultValue: 'earth-300',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The color of the border of the active pagination item',
        },
        defaultValue: { summary: undefined },
      },
    },
    itemBgColor: {
      defaultValue: 'white',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The color of the background of the pagination item',
        },
        defaultValue: { summary: undefined },
      },
    },
    itemTextColor: {
      defaultValue: 'night',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The color of the text of the pagination item',
        },
        defaultValue: { summary: undefined },
      },
    },
    itemBorderColor: {
      defaultValue: 'earth-300',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The color of the border of the pagination item',
        },
        defaultValue: { summary: undefined },
      },
    },
    hoverTextColor: {
      defaultValue: 'night',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The color of the text of the pagination item on hover',
        },
        defaultValue: { summary: undefined },
      },
    },
    hoverBgColor: {
      defaultValue: 'white',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary:
            'The color of the background of the pagination item on hover',
        },
        defaultValue: { summary: undefined },
      },
    },
    hoverBorderColor: {
      defaultValue: 'earth-100',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The color of the border of the pagination item on hover',
        },
        defaultValue: { summary: undefined },
      },
    },
    nextPreviousBgColor: {
      defaultValue: 'white',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary:
            'The color of the background of the next and previous buttons',
        },
        defaultValue: { summary: undefined },
      },
    },
    nextPreviousBorderColor: {
      defaultValue: 'earth-300',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The color of the border of the next and previous buttons',
        },
        defaultValue: { summary: undefined },
      },
    },
    nextPreviousTextColor: {
      defaultValue: 'night',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The color of the text of the next and previous buttons',
        },
        defaultValue: { summary: undefined },
      },
    },
    nextPreviousHoverBgColor: {
      defaultValue: 'earth-100',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary:
            'The color of the background of the next and previous buttons on hover',
        },
        defaultValue: { summary: undefined },
      },
    },
    nextPreviousHoverBorderColor: {
      defaultValue: 'earth-300',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary:
            'The color of the border of the next and previous buttons on hover',
        },
        defaultValue: { summary: undefined },
      },
    },
    nextPreviousHoverTextColor: {
      defaultValue: 'night',
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary:
            'The color of the text of the next and previous buttons on hover',
        },
        defaultValue: { summary: undefined },
      },
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

const InteractivePagination = (
  args: React.ComponentProps<typeof Pagination>,
) => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  )
}

export const Default: Story = {
  args: {
    className: 'w-full',
    totalPages: 10,
    currentPage: 1,
    totalItemsShown: 7,
    siblingRange: 3,
  },
  render: InteractivePagination,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const pagination = await canvas.getByTestId('pagination-component')
    await expect(pagination).toBeInTheDocument()
  },
}
