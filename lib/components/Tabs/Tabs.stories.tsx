import { expect } from '@storybook/jest';
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { jest } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'
import { TabList } from './TabList'
import { TabListProps } from './Tabs.props'

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
    title: 'Profile',
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
    hasBottomBorder: {
      description: 'Whether to show the bottom border line for the tab list',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TabList>

export default meta
type Story = StoryObj<typeof meta>

const TabsDemo = (args: TabListProps) => {
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

export const TabsDefault: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Basic tabs component with default styling. Includes an example of a disabled tab.',
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

    await step('Should not allow clicking disabled tab', async () => {
      onChangingTabMock.mockClear();
      
      const profileTab = canvas.getByRole('tab', { name: /Profile/i });
      expect(profileTab).toHaveAttribute('data-disabled', 'true');
      expect(profileTab).toHaveClass('cursor-not-allowed', 'opacity-50');
      
      await userEvent.click(profileTab);
      expect(canvas.getByRole('tab', { selected: true })).toHaveTextContent('Settings');
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