import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from './tableExports'
import { Badge } from '@components/Badge/Badge'
import { Icon } from '@components/Icon/Icon'
import sampleData from './sample-data.json'

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
  args: {},
  render: () => (
    <Table>
      <TableCaption>An example of a table caption</TableCaption>

      <TableHead>
        <TableRow>
          <TableCell>Slug</TableCell>
          <TableCell w="80" className="hidden md:table-cell">
            Message
          </TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Priority</TableCell>
          <TableCell>Project</TableCell>
          <TableCell>Assignee</TableCell>
          <TableCell>Due Date</TableCell>
          <TableCell>Tags</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.data.map((row) => (
          <TableRow key={row.slug} border="none">
            <TableCell color="earth-300">{row.slug}</TableCell>
            <TableCell
              type="body-small-strong"
              className="hidden md:table-cell"
            >
              {row.message}
            </TableCell>
            <TableCell>
              <Badge color="neptune" size="small">
                {row.status}
              </Badge>
            </TableCell>
            <TableCell align="center">
              {row.priority === 'high' ? (
                <Icon
                  icon="Alert"
                  color="mars-300"
                  className="animate-bounce"
                />
              ) : (
                <Icon icon="PriorityMedium" color="neptune-300" />
              )}
            </TableCell>
            <TableCell>{row.project}</TableCell>
            <TableCell>{row.assignee}</TableCell>
            <TableCell>{row.dueDate}</TableCell>
            <TableCell>
              {row.tags.map((tag) => (
                <Badge key={tag} color="earth" size="small" m="2">
                  {tag}
                </Badge>
              ))}
            </TableCell>
            <TableCell>
              <Icon icon="More" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const table = await canvas.getByTestId('table-component')
    await expect(table).toBeInTheDocument()
  },
}
