import type { Meta, StoryObj } from '@storybook/react'
import { SideNavItemProps, SideNavItemState } from './SideNav.props'
import { SideNav } from './SideNav'

const meta = {
  title: 'Navigation/SideNavItem States',
  component: SideNav,
  parameters: {
    docs: {
      description: {
        component:
          'Demonstrates different states and configurations for SideNav items',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-meteor-100 w-80 rounded-xs">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SideNav>

export default meta
type Story = StoryObj<typeof meta>

const createItemStory = (props: SideNavItemProps): Story => {
  return {
    args: {
      items: [props],
    },
  }
}

export const Default = createItemStory({
  label: 'Navigation Item',
  link: '/example',
  leadingIcon: 'Document',
  trailingIcon: 'Lock',
})

export const Hovered = createItemStory({
  label: 'Hovered Item',
  link: '/hovered',
  leadingIcon: 'Home',
  trailingIcon: 'Info',
  state: SideNavItemState.HOVERED,
})

export const Selected = createItemStory({
  label: 'Selected Item',
  link: '/selected',
  leadingIcon: 'Analytics',
  trailingIcon: 'CaretRight',
  state: SideNavItemState.SELECTED,
})

export const Disabled = createItemStory({
  label: 'Disabled Item',
  link: '/disabled',
  leadingIcon: 'GearSolid',
  trailingIcon: 'Lock',
  state: SideNavItemState.DISABLED,
})

export const WithTrailingNumber = createItemStory({
  label: 'Trailing Number',
  link: '/trailing-number',
  leadingIcon: 'Envelope',
  trailingNumber: 42,
})

export const WithSectionDivider = createItemStory({
  label: 'Section Divider',
  link: '/section-divider',
  leadingIcon: 'Folder',
  trailingIcon: 'Lock',
  hasSectionDivider: true,
})

export const WithSubItems = createItemStory({
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
      state: SideNavItemState.SELECTED,
    },
    {
      label: 'Child Item 3',
      link: '/child3',
      leadingIcon: 'Document',
      trailingNumber: 5,
    },
  ],
})
