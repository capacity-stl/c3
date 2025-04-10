import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { CardList } from './CardList'
import { Icon } from '@components/Icon/Icon'
import { userEvent } from '@storybook/testing-library'
import { ListItemType } from './CardList.props'
import { Avatar } from '@components/Avatar/Avatar'
import { jest } from '@storybook/jest'
interface InteractionType extends ListItemType {
  id: number
  title: string
  description: string
  datetime: string
  reference?: string
  icon?: keyof typeof Icon.Glyph
  iconColor?: string
  status?: string
  user?: {
    imageUrl: string
    initials: string[2]
    color?: string
  }
}

const items: InteractionType[] = [
  {
    id: 1,
    title: 'Consierge Visitor',
    description:
      'Message from the concierge. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    datetime: new Date().toISOString(),
    icon: 'Livechat',
    iconColor: 'neptune-300',
    status: 'in progress',
    options: [
      {
        name: 'open',
        label: 'Open',
        action: () => console.log('Option 1'),
      },
      {
        name: 'edit',
        label: 'Edit',
        action: () => console.log('Option 2'),
      },
    ],
    user: {
      imageUrl: 'https://i.pravatar.cc/300',
      initials: 'JS',
      color: 'neptune-300',
    },
  },
  {
    id: 2,
    title: '314-434-3333',
    description:
      'Message from SMS. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    datetime: '2025-03-11T12:00:00Z',
    icon: 'Concierge',
    iconColor: 'earth-300',
    reference: 'CAP-1234',
    user: {
      imageUrl: 'https://i.pravatar.cc/301',
      initials: 'MS',
      color: 'aurora-300',
    },
  },
  {
    id: 3,
    title: 'joesmith@business.com',
    description:
      'Message from email. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    datetime: '2025-01-25T12:00:00Z',
    icon: 'Ticket',
    iconColor: 'aurora-300',
    options: [
      {
        name: 'claim',
        label: 'Claim',
        action: () => console.log('Option 1'),
      },
    ],
    user: {
      imageUrl: '',
      initials: 'CX',
      color: 'mars-300',
    },
  },
  {
    id: 4,
    title: 'Is Skitch an Approved application?',
    description: 'james@business.com',
    datetime: '2024-01-26T12:00:00Z',
    reference: 'CAP-1234',
    user: {
      imageUrl: '',
      initials: 'TM',
      color: 'aurora-300',
    },
  },
]

const NoItemsMessage = () => {
  return (
    <div
      data-testid="no-items-message"
      className="flex flex-col items-center justify-center gap-2"
    >
      <Icon icon="Close" color="mars-300" size="small" />
      <span>
        No <span className="font-bold">tickets</span> found!
      </span>
    </div>
  )
}

const bottomLeftContent = (item: InteractionType) =>
  item?.status && (
    <div className="flex flex-row items-center gap-1">
      <span className="bg-sun-100 text-sun-400 rounded-full px-2 py-1 text-xs font-medium capitalize">
        {item?.status}
      </span>
      {item?.status === 'in progress' && (
        <Icon icon="Done" color="neptune-300" size="tiny" />
      )}
    </div>
  )

const bottomRightContent = (item: InteractionType) => (
  <Avatar src={item.user?.imageUrl} size="small" bgColor={item.user?.color}>
    {item.user?.initials}
  </Avatar>
)

const header = (selectedItems: InteractionType[]) => {
  const onClick = () => {
    alert(`Bulk Edit on ${selectedItems.length} selected tickets`)
  }
  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <button
        type="button"
        aria-label="Sort tickets"
        onClick={() => alert('Sort tickets')}
      >
        <Icon icon="Sort" color="meteor-300" size="tiny" />
      </button>
      {selectedItems.length > 0 ? (
        <button
          className="text-meteor-400 flex cursor-pointer flex-row items-center gap-1 text-sm font-medium"
          onClick={onClick}
        >
          <Icon icon="Pencil" color="meteor-300" size="tiny" />
          Bulk Edit
        </button>
      ) : (
        <span className="text-sm font-medium">Tickets</span>
      )}
    </div>
  )
}

const onSelectionChangeMock = jest.fn(
  (items: InteractionType[], lastSelectedItem?: InteractionType) => {
    console.info('onSelectionChange', items, lastSelectedItem)
  },
)

const meta = {
  title: 'Data Display/CardList',
  component: CardList<InteractionType>,
  parameters: {
    docs: {
      description: {
        component: 'Component to display a List.',
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    items: {
      description:
        'Array of items to display in the list. They can optionally implement ListItemType attributes.',
      table: {
        type: {
          summary: `ListItemType`,
          detail: `interface ListItemType {
  options?: OptionItem[]
  icon?: keyof typeof Icon.Glyph
  iconColor?: string
}`,
        },
      },
    },
    divider: { description: `Displays a divider between items` },
    dense: { description: `Enables Dense mode; occupies less space` },
    titleKey: { description: `Name of the attribute which holds the "title"` },
    descriptionKey: {
      description: `Name of the attribute which holds the "description"`,
    },
    datetimeKey: {
      description: `Name of the attribute which holds the "datetime" in ISO format`,
    },
    referenceKey: {
      description: `Name of the attribute which holds the "reference"`,
    },
    loading: { description: `Displays the loading state` },
    firstOptionAsButton: {
      description: `Displays the first option of the menu as a button`,
    },
    selectionMode: {
      description: 'Mode of selection of the list',
      table: { type: { summary: 'single | multiple | none' } },
      control: { type: 'select' },
      options: ['single', 'multiple', 'none'],
    },
    noItems: {
      description: `[Slot] Content to display when the list is empty`,
    },
    onSelectionChange: {
      description: `[Slot] Callback function to handle the selection of items`,
      table: {
        type: { summary: `(items: T[], lastSelectedItem?: T) => void` },
      },
    },
    bottomLeftContent: {
      description: `[Slot] Callback function to handle the bottom left content`,
      table: { type: { summary: `(item: T) => React.ReactNode` } },
    },
    bottomRightContent: {
      description: `[Slot] Callback function to handle the bottom right content`,
      table: { type: { summary: `(item: T) => React.ReactNode` } },
    },
    header: {
      description: `[Slot] Callback function to handle the header`,
      table: {
        type: {
          summary: `(selectedItems: T[], items: T[]) => React.ReactNode`,
        },
      },
    },
  },
} satisfies Meta<typeof CardList<InteractionType>>

export default meta
type Story = StoryObj<typeof meta>

export const CardListDefault: Story = {
  args: {
    items,
    selectionMode: 'multiple',
    dense: false,
    divider: true,
    bottomLeftContent: bottomLeftContent,
    bottomRightContent: bottomRightContent,
    onSelectionChange: onSelectionChangeMock,
    header: header,
    firstOptionAsButton: true,
  },

  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    const items = args.items

    await step('Should render all list items', async () => {
      const listItems = canvas.getAllByRole('article')
      expect(listItems).toHaveLength(items.length)
    })

    await step('Should display text content correctly', async () => {
      const firstItem = items[0]
      const firstItemElement = canvas.getByLabelText(firstItem.title)

      if (firstItem.title) {
        expect(firstItemElement).toHaveTextContent(firstItem.title)
      }

      if (firstItem.description) {
        expect(firstItemElement).toHaveTextContent(firstItem.description)
      }

      // Check reference if exists
      if (firstItem.reference) {
        expect(firstItemElement).toHaveTextContent(firstItem.reference)
      }
    })

    await step('Should handle item selection', async () => {
      const firstItemElement = canvas.getByLabelText(items[0].title)
      await userEvent.click(firstItemElement)

      if (args.selectionMode === 'single') {
        expect(onSelectionChangeMock.mock.calls).toHaveLength(1)
        expect(onSelectionChangeMock.mock.calls[0][0]).toEqual([items[0]])
        expect(onSelectionChangeMock.mock.calls[0][1]).toBe(items[0])
      }

      if (args.selectionMode === 'multiple') {
        const secondItemElement = canvas.getByLabelText(items[1].title)
        await userEvent.click(secondItemElement)
        expect(onSelectionChangeMock.mock.calls[0][0]).toEqual([items[0]])
        expect(onSelectionChangeMock.mock.calls[0][1]).toBe(items[0])
        expect(onSelectionChangeMock.mock.calls[1][0]).toEqual([
          items[0],
          items[1],
        ])
        expect(onSelectionChangeMock.mock.calls[1][1]).toBe(items[1])
      }

      if (args.selectionMode === 'none') {
        expect(onSelectionChangeMock.mock.calls).toHaveLength(0)
      }
    })

    await step('Should render bottom content correctly', async () => {
      const firstItemElement = canvas.getByLabelText(items[0].title)

      const statusBadge = within(firstItemElement).getByText(
        items[0].status as string,
      )
      expect(statusBadge).toBeInTheDocument()
    })

    await step('Should handle options correctly', async () => {
      const firstItemElement = canvas.getByLabelText(items[0].title)

      const firstItemWithOptions = items.find((item) => item?.options?.length)
      if (firstItemWithOptions) {
        const optionsButton = within(firstItemElement).getByRole('menu')
        expect(optionsButton).toBeInTheDocument()
      }
    })
  },
}

export const CardListEmpty: Story = {
  args: {
    items: [],
    noItems: <NoItemsMessage />,
  },
}
