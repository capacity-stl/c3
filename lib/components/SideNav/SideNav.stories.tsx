import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import { SideNav } from './SideNav'
import { SideNavItemProps } from './SideNav.props'
import { Badge } from '@components/Badge/Badge'
import { userEvent, waitFor } from '@storybook/testing-library'
import React from 'react'
import { SIDE_NAV_STATES } from './SideNav.props'

const meta = {
  title: 'Navigation/SideNav',
  component: SideNav,
  parameters: {
    docs: {
      description: {
        component: 'SideNav component for application navigation',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of navigation items',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the nav container',
    },
    itemsClassName: {
      control: 'text',
      description: 'Additional CSS classes for all nav items',
    },
  },
} satisfies Meta<typeof SideNav>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'bg-meteor-100 w-80 rounded-xs',
    items: [
      {
        label: 'Home',
        link: '/',
        onItemClick: () => console.log('Home'),
        leadingIcon: 'Home',
        trailingNumber: 4,
        hasSectionDivider: true,
      },
      {
        label: 'About',
        link: '/about',
        leadingIcon: 'Help',
        trailingNumber: 8,
        startOpen: false,
        subItems: [
          {
            label: 'About 1',
            link: '/about-1',
            trailingNumber: 15,
            startOpen: false,
            leadingIcon: 'Folder',
            subItemsIcon: 'ChevronRight',
            subItems: [
              {
                label: 'About 1.1',
                link: '/about-1.1',
                leadingIcon: 'Document',
                trailingNumber: 16,
                hasSectionDivider: true,
                state: 'default',
              },
              {
                label: 'About 1.2',
                link: '/about-1.2',
                leadingIcon: 'Document',
                trailingNumber: 23,
              },
              {
                label: 'About 1.3',
                link: '/about-1.3',
                leadingIcon: 'Document',
                trailingNumber: 42,
                state: 'selected',
              },
              {
                label: 'About 1.4',
                link: '/about-1.4',
                leadingIcon: 'Document',
                trailingIcon: 'Lock',
                trailingNumber: 10,
              },
              {
                label: 'About 1.5',
                link: '/about-1.5',
                leadingIcon: 'Document',
              },
              {
                label: 'About 1.6',
                link: '/about-1.6',
                leadingIcon: 'Document',
              },
            ],
          },
          {
            label: 'About 2',
            link: '/about-2',
            leadingContent: (
              <Badge shape="rounded" size="small" color="night">
                Leading
              </Badge>
            ),
          },
          {
            label: 'About 3',
            link: '/about-3',
            trailingContent: (
              <Badge shape="rounded" size="small" color="night">
                Trailing
              </Badge>
            ),
          },
          {
            label: 'About 4',
            link: '/about-4',
            leadingIcon: 'Document',
            className: 'bg-mars-400 text-mars-100',
          },
          { label: 'About 5', link: '/about-5', leadingIcon: 'Document' },
          { label: 'About 6', link: '/about-6', leadingIcon: 'Document' },
        ],
      },
      {
        label: 'Contact',
        link: '/contact',
        leadingIcon: 'Broadcast',
        trailingIcon: 'Lock',
        onItemClick: () => console.log('Contact'),
      },
      {
        label: 'Settings',
        link: '/settings',
        leadingIcon: 'GearSolid',
        state: 'disabled',
      },
    ],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render component', async () => {
      const nav = canvas.getByTestId('navigation-component')
      await expect(nav).toBeInTheDocument()
    })

    await step('Nested menus expand', async () => {
      const aboutItem = canvas.getByText('About')
      await userEvent.click(aboutItem)
      await userEvent.unhover(aboutItem)
      await waitFor(async () => {
        const about1 = canvas.getByText('About 1')
        await expect(about1).toBeInTheDocument()

        // Expand a second level of nesting
        await userEvent.click(about1)
        await userEvent.unhover(about1)
        await waitFor(async () => {
          const about11 = canvas.getByText('About 1.1')
          await expect(about11).toBeInTheDocument()
        })
      })
    })

    await step('Links direct to the correct page', async () => {
      const contactItem = canvas.getByText('Contact')
      console.log = jest.fn()
      await userEvent.click(contactItem)
      await userEvent.unhover(contactItem)
      await expect(console.log).toHaveBeenCalledWith('Contact')
    })

    console.log = jest.fn()
    await step('onItemClick function is called', async () => {
      const homeItem = canvas.getByText('Home')
      await userEvent.click(homeItem)
      await userEvent.unhover(homeItem)
      await expect(console.log).toHaveBeenCalledWith('Home')
    })

    await step('Disabled items do not respond to clicks', async () => {
      const settingsItem = canvas.getByText('Settings')
      await userEvent.click(settingsItem)
      await userEvent.unhover(settingsItem)
      await expect(console.log).not.toHaveBeenCalledWith('Settings')
    })
  },
}

// Helper function to create individual item state stories
const createItemStory = (props: SideNavItemProps): Story => {
  return {
    args: {
      items: [props],
    },
  }
}

export const ItemDefault: Story = createItemStory({
  label: 'Navigation Item',
  link: '/example',
  leadingIcon: 'Document',
  trailingIcon: 'Lock',
})

export const ItemHovered: Story = createItemStory({
  label: 'Hovered Item',
  link: '/hovered',
  leadingIcon: 'Home',
  trailingIcon: 'Info',
  state: 'hovered',
})

export const ItemSelected: Story = createItemStory({
  label: 'Selected Item',
  link: '/selected',
  leadingIcon: 'Analytics',
  trailingIcon: 'CaretRight',
  state: 'selected',
})

export const ItemDisabled: Story = createItemStory({
  label: 'Disabled Item',
  link: '/disabled',
  leadingIcon: 'GearSolid',
  trailingIcon: 'Lock',
  state: 'disabled',
})

export const ItemWithTrailingNumber: Story = createItemStory({
  label: 'Trailing Number',
  link: '/trailing-number',
  leadingIcon: 'Envelope',
  trailingNumber: 42,
})

export const ItemWithSectionDivider: Story = createItemStory({
  label: 'Section Divider',
  link: '/section-divider',
  leadingIcon: 'Folder',
  trailingIcon: 'Lock',
  hasSectionDivider: true,
})

export const ItemWithSubItems: Story = createItemStory({
  label: 'Parent Item',
  leadingIcon: 'Folder',
  subItems: [
    {
      label: 'Child Item 1',
      link: '/child1',
      leadingIcon: 'Document',
    },
    {
      label: 'Child Item 2',
      link: '/child2',
      leadingIcon: 'Document',
      state: 'selected',
    },
    {
      label: 'Child Item 3',
      link: '/child3',
      leadingIcon: 'Document',
      trailingNumber: 5,
    },
  ],
})

// Helper to add onItemClick to all subitems recursively
const addClickHandlers = (items: SideNavItemProps[]): SideNavItemProps[] =>
  items.map((item: SideNavItemProps) =>
    item.subItems
      ? { ...item, subItems: addClickHandlers(item.subItems) }
      : { ...item, onItemClick: () => alert(`Clicked: ${item.label}`) },
  )

export const CustomInboxSidebar: Story = {
  args: {
    className: 'bg-meteor-100 w-80 rounded-xs c3-sidenav',
    items: addClickHandlers([
      {
        label: 'ACTIVE INTERACTIONS',
        subItems: [
          {
            label: 'Live Chat',
            trailingNumber: 3,
            state: 'selected',
          },
          {
            label: 'Ongoing Calls',
            trailingNumber: 1,
          },
        ],
      },
      {
        label: 'TICKETS',
        subItems: [
          {
            label: 'All',
            trailingNumber: 12,
            state: 'selected',
          },
          {
            label: 'Mine',
            trailingNumber: 2,
          },
          {
            label: 'Past Due',
            trailingNumber: 1,
          },
          {
            label: 'Watching',
            trailingNumber: 1,
          },
          {
            label: 'High Priority',
            trailingNumber: 1,
          },
          {
            label: 'Unassigned',
            trailingNumber: 0,
          },
          {
            label: 'All Boards',
            trailingNumber: 1,
          },
          {
            label: 'A Very Long Subitem Label That Should Truncate',
            trailingNumber: 99,
          },
        ],
      },
      {
        label: 'SMS',
        subItems: [
          {
            label: 'Inbound',
            trailingNumber: 5,
          },
          {
            label: 'Outbound',
            trailingNumber: 2,
          },
        ],
      },
    ]),
  },
}

// OmnichannelInboxExact: matches the screenshots exactly, with Show all / Show less toggle
export const OmnichannelInboxExact: Story = {
  args: {
    className: 'bg-meteor-100 w-80 rounded-xs c3-sidenav',
    items: [], // required for type safety, will be overridden in render
  },
  render: (args) => {
    const ticketSubItems = [
      { label: 'All', trailingNumber: 1497, state: SIDE_NAV_STATES.SELECTED },
      { label: 'Mine', trailingNumber: 0 },
      { label: 'Past Due', trailingNumber: 11 },
      { label: 'Watching', trailingNumber: 0 },
      { label: 'High Priority', trailingNumber: 8 },
      { label: 'Unassigned', trailingNumber: 244 },
      // Hidden by default:
      { label: 'All Test' },
      { label: 'All To Do About Nothing' },
      { label: 'CS In Progress' },
      { label: 'Concierge' },
      { label: 'Design Tickets' },
      { label: 'FE' },
      { label: 'FE Medium' },
      { label: 'In Progress Customer Success' },
      { label: 'My To Do Tickets' },
      { label: 'SE' },
      { label: 'Sales Hub' },
      { label: 'ai tickets in progress' },
      { label: 'test custom filter views NEW' },
      { label: 'All Boards' },
    ]
    const [showAll, setShowAll] = React.useState(false)
    const visibleTickets = showAll ? ticketSubItems : ticketSubItems.slice(0, 6)
    const showToggle = ticketSubItems.length > 6
    const ticketSection = {
      label: 'TICKETS',
      subItems: [
        ...visibleTickets,
        ...(showToggle
          ? [
              {
                label: showAll ? 'Show less' : 'Show all',
                isToggle: true,
                onItemClick: () => setShowAll((v) => !v),
              },
            ]
          : []),
      ],
    }
    const items = addClickHandlers([
      {
        label: 'ACTIVE INTERACTIONS',
        subItems: [
          {
            label: 'All',
            trailingNumber: 1504,
            state: SIDE_NAV_STATES.SELECTED,
          },
          { label: 'Mine', trailingNumber: 0 },
          { label: 'Unassigned', trailingNumber: 245 },
        ],
      },
      ticketSection,
      {
        label: 'SMS',
        subItems: [
          { label: 'All', trailingNumber: 7 },
          { label: 'Mine', trailingNumber: 0 },
          { label: 'Unassigned', trailingNumber: 1 },
          { label: 'Scheduled' },
        ],
      },
      {
        label: 'VOICE',
        subItems: [{ label: 'All', trailingNumber: 1070 }],
      },
    ])
    return <SideNav {...args} items={items} />
  },
  storyName: 'Omnichannel Inbox (Exact Match)',
  parameters: {
    docs: {
      description: {
        story:
          'Sidebar that matches the provided screenshots exactly, including Show all / Show less toggle, badges, and SMS/VOICE at the bottom.',
      },
    },
  },
}
