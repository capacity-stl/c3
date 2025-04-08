import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Flex } from './Flex'

const controlsToExclude = [
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
  'bgColor',
]

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: 'Fundamental layout building block.',
      },
    },
    controls: {
      exclude: [...controlsToExclude],
    },
  },

  tags: ['autodocs'],
  argTypes: {
    numberOfBoxes: {
      control: { type: 'number', min: 1, max: 24 },
      defaultValue: 5,
      table: {
        type: { summary: 'Number of boxes to display (For testing purposes)' },
        defaultValue: { summary: '5' },
      },
    },
    justify: {
      control: { type: 'select' },
      mapping: { 'No Justify': null },
      options: [
        'No Justify',
        'start',
        'center',
        'end',
        'between',
        'around',
        'evenly',
      ],
      table: {
        type: {
          summary:
            "Utilities for controlling how flex items are positioned along a container's main axis.",
        },
      },
    },
    align: {
      control: { type: 'select' },
      mapping: { 'No Align': null },
      options: ['No Align', 'start', 'center', 'end', 'stretch'],
      table: {
        type: {
          summary:
            "Utilities for controlling how flex items are positioned along a container's cross axis.",
        },
      },
    },
    alignContent: {
      control: { type: 'select' },
      mapping: { 'No Align Content': null },
      options: ['No Align Content', 'start', 'center', 'end', 'stretch'],
      table: {
        type: {
          summary:
            'Utilities for controlling how rows are positioned in multi-row flex containers..',
        },
      },
    },
    alignSelf: {
      control: { type: 'select' },
      mapping: { 'No Align Self': null },
      options: ['No Align Self', 'start', 'center', 'end', 'stretch'],
      table: {
        type: {
          summary:
            "Utilities for controlling how an individual flex item is positioned along its container's cross axis.",
        },
      },
    },
    direction: {
      control: { type: 'select' },
      options: ['row', 'rowReverse', 'col', 'colReverse'],
      defaultValue: 'row',
      table: {
        type: {
          summary: 'Utilities for controlling the direction of flex items.',
        },
        defaultValue: { summary: 'row' },
      },
    },
    wrap: {
      control: { type: 'select' },
      options: ['wrap', 'wrapReverse', 'nowrap'],
      table: {
        type: {
          summary:
            'Utilities for controlling how flex items wrap within a container.',
        },
      },
    },
    grow: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary:
            'Utilities for controlling how flex items grow to fill available space.',
        },
      },
    },
    shrink: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary:
            'Utilities for controlling how flex items shrink to fit within a container.',
        },
      },
    },
    basis: {
      control: { type: 'select' },
      options: ['auto', 'content', 'fit-content', 'max-content', 'min-content'],
      table: {
        type: {
          summary: 'Utilities for controlling the initial size of a flex item.',
        },
      },
    },
    gap: {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5'],
      table: {
        type: {
          summary: 'Utilities for controlling the spacing between flex items.',
        },
      },
    },
    gapX: {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5'],
      table: {
        type: {
          summary:
            'Utilities for controlling the spacing between flex items horizontally.',
        },
      },
    },
    gapY: {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5'],
      table: {
        type: {
          summary:
            'Utilities for controlling the spacing between flex items vertically.',
        },
      },
    },
    order: {
      control: { type: 'select' },

      options: ['1', '2', '3', '4', '5'],

      table: {
        type: {
          summary: 'Utilities for controlling the order of flex items.',
        },
      },
    },
  },
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const FlexContainer: Story = {
  parameters: {
    controls: {
      exclude: [
        ...controlsToExclude,
        'order',
        'grow',
        'shrink',
        'basis',
        'flex',
        'alignSelf',
      ],
    },
  },
  args: {
    numberOfBoxes: 5,
    direction: 'row',
    wrap: 'wrap',
    justify: 'center',
    align: 'center',
    alignContent: 'center',
    gap: '2',
  },
  render: ({ numberOfBoxes = 5, ...args }) => (
    <Flex
      className="h-[300px] w-[500px] border border-dashed border-earth-200"
      {...args}
      p="4"
    >
      {Array.from({ length: numberOfBoxes }, (_, i) => (
        <Flex
          key={i}
          className="text-meteor-500 h-[50px] w-[50px] items-center justify-center border border-earth-200 text-center text-earth-300"
          bgColor="earth-100"
          p="2"
        >
          {i + 1}
        </Flex>
      ))}
    </Flex>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const flex = await canvas.getByTestId('flex-component')
    await expect(flex).toBeInTheDocument()
  },
}

export const FlexItems: Story = {
  parameters: {
    controls: {
      exclude: [
        ...controlsToExclude,
        'numberOfBoxes',
        'gap',
        'gapX',
        'gapY',
        'direction',
        'wrap',
        'justify',
        'align',
        'alignContent',
      ],
    },
  },
  args: {
    numberOfBoxes: 5,
    direction: 'row',
    wrap: 'wrap',
    justify: 'center',
    align: 'center',
    grow: true,
    shrink: true,
    basis: 'auto',
    gap: '2',
  },

  render: ({ ...args }) => (
    <Flex
      className="h-[300px] w-[1000px] border border-dashed border-earth-200"
      {...args}
      p="4"
      align="center"
    >
      <Flex
        className="text-meteor-500 h-[100px] w-[100px] border border-earth-200 text-earth-300 "
        bgColor="earth-100"
        p="2"
        order={args.order}
        grow={args.grow}
        alignSelf={args.alignSelf}
        testId="flex-item-1"
        justify="center"
        align="center"
      >
        Control Me
      </Flex>
      <Flex
        className="text-meteor-500 h-[100px] w-[100px]  border border-sun-200"
        bgColor="sun-100"
        p="2"
        order="2"
        testId="flex-item-2"
      ></Flex>
      <Flex
        className="text-meteor-500 h-[100px] w-[100px] border border-sun-200 "
        bgColor="sun-100"
        p="2"
        order={'3'}
        testId="flex-item-3"
      ></Flex>
      <Flex
        className="text-meteor-500 h-[100px] w-[100px] border border-sun-200 "
        bgColor="sun-100"
        p="2"
        order={'4'}
        testId="flex-item-4"
      ></Flex>
    </Flex>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const flex = await canvas.getByTestId('flex-component')
    await expect(flex).toBeInTheDocument()
  },
}
