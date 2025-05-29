import { expect } from '@storybook/jest';
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { jest } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'
import { TabList } from './TabList'
import { BrowserRouter } from 'react-router-dom'

interface TabItem {
  key: string;
  title: string;
  count?: number;
  disabled?: boolean;
  linkTo?: string;
}

const tabItems: TabItem[] = [
  { 
    key: 'overview', 
    title: 'Overview',
    count: 12
  },
  { 
    key: 'settings', 
    title: 'Settings',
    count: 5
  },
  { 
    key: 'profile', 
    title: 'Profile'
  },
];

const tabItemsWithLinks: TabItem[] = [
  { 
    key: 'overview', 
    title: 'Overview',
    linkTo: '/overview'
  },
  { 
    key: 'settings', 
    title: 'Settings',
    linkTo: '/settings'
  },
  { 
    key: 'profile', 
    title: 'Profile',
    linkTo: '/profile',
    disabled: true
  },
];

const onChangingTabMock = jest.fn((key: string) => {
  console.info('onChangingTab', key)
})

const meta = {
  title: 'Navigation/Tabs',
  component: TabList,
  parameters: {
    docs: {
      description: {
        component: 'Component to display tabs.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      description: 'Array of tab options to display',
    },
    activeTabKey: {
      control: 'text',
      description: 'The active tab key',
    },
    onChangingTab: {
      description: 'Callback for when the active tab changes',
      action: 'changed tab'
    },
    className: {
      description: 'Class name to apply to the component',
    },
    displayFullBorder: {
      description: 'Whether to display a full border around the tab list and borders between tabs',
    },
    hasBottomBorder: {
      description: 'Whether to show the bottom border line for the tab list',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TabList>

export default meta
type Story = StoryObj<typeof meta>

const TabsDemo = (args) => {
  const [activeTabKey, setActiveTabKey] = React.useState(args.activeTabKey);
  
  React.useEffect(() => {
    setActiveTabKey(args.activeTabKey);
  }, [args.activeTabKey]);
  
  return (
    <div style={{ width: '500px' }}>
      <TabList 
        {...args}
        activeTabKey={activeTabKey}
        onChangingTab={(key) => {
          setActiveTabKey(key);
          args.onChangingTab?.(key);
        }}
      />
    </div>
  );
};

const TabsWithRouterDemo = (args) => (
  <BrowserRouter>
    <TabsDemo {...args} />
  </BrowserRouter>
);

export const TabsDefault: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Basic tabs component with default styling.',
      },
    },
  },
  args: {
    activeTabKey: 'overview',
    tabs: tabItems,
    onChangingTab: onChangingTabMock,
  },
  render: (args) => <TabsDemo {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Should handle tab switching', async () => {
      const settings = canvas.getByRole('tab', { name: /Settings/i });
      await userEvent.click(settings);
      
      expect(onChangingTabMock).toHaveBeenCalledWith('settings');
      expect(canvas.getByRole('tab', { selected: true })).toHaveTextContent('Settings');
    });

    await step('Should update when activeTabKey prop changes', async () => {
      // Reset mock to clear previous calls
      onChangingTabMock.mockClear();
      
      const profile = canvas.getByRole('tab', { name: /Profile/i });
      await userEvent.click(profile);
      
      expect(onChangingTabMock).toHaveBeenCalledWith('profile');
      expect(canvas.getByRole('tab', { selected: true })).toHaveTextContent('Profile');
    });
  },
}

export const TabsToLinks: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Tabs with navigation links. Clicking a tab will navigate to the specified URL.',
      },
    },
  },
  args: {
    activeTabKey: 'overview',
    tabs: tabItemsWithLinks,
    onChangingTab: onChangingTabMock,
  },
  render: (args) => <TabsWithRouterDemo {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    
    await step('Should handle tab with link navigation', async () => {
      const settingsTab = canvas.getByRole('tab', { name: /Settings/i });
      await userEvent.click(settingsTab);
      
      expect(onChangingTabMock).toHaveBeenCalledWith('settings');
      expect(canvas.getByRole('tab', { selected: true })).toHaveTextContent('Settings');
    });

    await step('Should not allow clicking disabled tab', async () => {
      // Clear mock before testing disabled tab
      onChangingTabMock.mockClear();
      
      const profileTab = canvas.getByRole('tab', { name: /Profile/i });
      expect(profileTab).toHaveAttribute('disabled', '');
      expect(profileTab).toHaveClass('cursor-not-allowed', 'opacity-50');
      
      await userEvent.click(profileTab);
      // Should not change the active tab
      expect(canvas.getByRole('tab', { selected: true })).toHaveTextContent('Settings');
      // Should not have called onChangingTab for the disabled tab
      expect(onChangingTabMock).not.toHaveBeenCalled();
    });
  },
}

export const TabsNoBottomBorder: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Tabs without the bottom border line.',
      },
    },
  },
  args: {
    activeTabKey: 'overview',
    tabs: tabItems,
    onChangingTab: onChangingTabMock,
    hasBottomBorder: false,
  },
  render: (args) => <TabsDemo {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    
    await step('Should handle tab switching without bottom border', async () => {
      const settings = canvas.getByRole('tab', { name: /Settings/i });
      await userEvent.click(settings);
      
      expect(onChangingTabMock).toHaveBeenCalledWith('settings');
      expect(canvas.getByRole('tab', { selected: true })).toHaveTextContent('Settings');
    });
  },
} 