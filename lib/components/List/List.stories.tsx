import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { List } from './List'
import React from 'react'
import { Icon } from '@components/Icon/Icon'
import { userEvent } from '@storybook/testing-library'

interface InteractionType {
  text: string
}

const items: InteractionType[] = [
  { text: 'Consierge Visitor' },
  { text: '314-434-3333' },
  { text: 'joesmith@business.com' },
]

const renderItem = (item: InteractionType) => {
  return (
    <article className="flex flex-row gap-2">
      <div className="flex flex-col">{item.text}</div>
    </article>
  )
}

const NoItemsMessage = () => {
  return (
    <div
      data-testid="no-items-message"
      className="flex flex-col items-center justify-center gap-2"
    >
      <Icon icon="Close" color="mars-300" size="small" />
      <span>
        No <span className="font-bold">items</span> found!
      </span>
    </div>
  )
}

const meta = {
  title: 'List',
  component: List<InteractionType>,
  parameters: {
    docs: {
      description: {
        component: 'Component to display a List.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of items to display in the list.',
    },
    renderItem: {
      description: 'Function to customize the rendering of each element',
      table: {
        type: { summary: '(item: T) => ReactNode' },
      },
    },
    selectedItems: {
      description: 'Array of items that are currently selected from the list',
      table: {
        type: { summary: 'T[]' },
      },
    },
    onItemClick: {
      description: 'Function to handle the click event of each element',
      table: {
        type: { summary: '(item) => void' },
      },
    },
  },
} satisfies Meta<typeof List<InteractionType>>

export default meta
type Story = StoryObj<typeof meta>

export const ListDefault: Story = {
  args: {
    items,
    renderItem,
    dense: false,
    selectedItems: [],
  },

  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    const items = args.items

    if (args.header) {
      await step('Check the header is rendered', async () => {
        const header = canvas.getByRole('heading')
        expect(header).toBeInTheDocument()
      })
    }

    if (args.items.length > 0) {
      await step('Check the component is rendered', async () => {
        const listbox = await canvas.getByRole('listbox')
        expect(listbox).toBeInTheDocument()
      })

      const listItems = canvas.getAllByRole('option')
      const firstItemEl = listItems[0]

      await step('Check the list is rendered', async () => {
        expect(listItems).toHaveLength(items.length)
      })

      await step('Check the item contents are rendered', async () => {
        items.forEach((item) => {
          expect(canvas.getByText(item.text)).toBeInTheDocument()
        })
      })

      if (args.onItemClick) {
        await step('Check the click event is handled', async () => {
          await userEvent.click(firstItemEl)
          expect(args.onItemClick).toHaveBeenCalledWith(items[0])
        })

        await step('Check the keyboard interaction is handled', async () => {
          await userEvent.tab() // Move focus to the first item
          await userEvent.keyboard('{Enter}')
          expect(args.onItemClick).toHaveBeenCalledWith(items[0])
        })
      }
    } else {
      await step('Check the "no items" message is rendered', async () => {
        const noItemsMessage = await canvas.findByTestId('no-items-message')
        expect(noItemsMessage).toBeInTheDocument()
      })
    }
  },
}

export const ListCustomized: Story = {
  args: {
    items,
    renderItem,
    header: 'Interactions',
    dense: true,
    selectedItems: [],
    divider: false,
    loading: true,
  },

  render: (args) => {
    const ListCustomizedStory = () => {
      const [selectedItems, setSelectedItems] = React.useState<
        InteractionType[]
      >([])
      return { selectedItems, setSelectedItems }
    }
    const { selectedItems, setSelectedItems } = ListCustomizedStory()

    const handleItemClick = (item: InteractionType) => {
      console.log('handleItemClick', item)
      const isSelected = selectedItems.some((i) => i.text === item.text)
      const newSelectedItems = isSelected
        ? selectedItems.filter((i) => i.text !== item.text)
        : [...selectedItems, item]
      setSelectedItems(newSelectedItems)
      // Expose the updated state for testing
      ;(
        window as typeof window & { __selectedItems: InteractionType[] }
      ).__selectedItems = newSelectedItems
    }

    return React.createElement(List<InteractionType>, {
      ...args,
      selectedItems,
      onItemClick: handleItemClick,
    })
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Verificar la selección de elementos', async () => {
      const firstItem = canvas.getAllByRole('option')[0]
      await userEvent.click(firstItem)

      // Verify the updated state
      const selectedItems = (
        window as typeof window & { __selectedItems: InteractionType[] }
      ).__selectedItems
      expect(selectedItems).toHaveLength(1)
      expect(selectedItems[0].text).toBe(items[0].text)
    })
  },
}

export const ListEmpty: Story = {
  args: {
    items: [],
    renderItem,
    noItems: <NoItemsMessage />,
  },

  play: async ({ canvasElement, args, step, ...context }) => {
    if (ListDefault.play)
      await ListDefault.play({ canvasElement, args, step, ...context })
  },
}
