import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Table } from './Table'
import { Text } from '../Text/Text'
const meta = {
  title: 'Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'Table',
      },
    },
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {
    children: {
      defaultValue: 'Table',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: [
      {
        slug: 'CAP-123',
        title: 'This is a test title',
        reporter: 'john@capcity.com',
        createdAt: '2021-01-01',
        project: 'FE',
        status: 'Open',
        priority: 'High',
        assignee: 'John Doe',
        dueDate: '2021-01-01',
        SLA: '...',
      },
      {
        slug: 'CAP-123',
        title: 'This is a test title',
        reporter: 'john@capcity.com',
        createdAt: '2021-01-01',
        project: 'FE',
        status: 'Open',
        priority: 'High',
        assignee: 'John Doe',
        dueDate: '2021-01-01',
        SLA: (
          <button>
            <Text type="body-small-strong">test</Text>
          </button>
        ),
      },
    ],
    columns: [
      { header: 'Slug', accessorKey: 'slug' },
      { header: 'Title', accessorKey: 'title' },
      { header: 'Reporter', accessorKey: 'reporter' },
      { header: 'Created At', accessorKey: 'createdAt' },
      { header: 'Project', accessorKey: 'project' },
      { header: 'Status', accessorKey: 'status' },
      { header: 'Priority', accessorKey: 'priority' },
      { header: 'Assignee', accessorKey: 'assignee' },
      { header: 'Due Date', accessorKey: 'dueDate' },
      {
        header: 'SLA',
        accessorKey: 'SLA',
        cell: ({ row }) => row.original.SLA,
      },
    ],
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const table = await canvas.getByTestId('table')
    await expect(table).toBeInTheDocument()
  },
}
