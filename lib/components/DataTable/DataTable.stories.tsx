import type { Meta, StoryObj } from '@storybook/react'
import { DataTable } from './DataTable'
import { simpleExample, queueExample } from './DataTable.data'
import { queueExampleColumns } from './DataTable.stories.ticket'
import { Text } from '@components/Text/Text'
import { Icon } from '@components/Icon/Icon'

const meta = {
  title: 'Data Display/Data Table',
  component: DataTable,
  parameters: {
    docs: {
      description: {
        component: 'Display an array of data in a table',
      },
    },
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

const DynamicHeader = () => {
  return (
    <div className="flex gap-3 p-3">
      <Text color="neptune-300" type="body-small-strong">
        DEX
      </Text>
      <Icon icon={Icon.Glyph.More} size="tiny" />
    </div>
  )
}

export const Simple: Story = {
  args: {
    columns: [
      {
        header: DynamicHeader,
        dataKeys: ['dexNumber'],
        sort: 'dexNumber',
      },
      {
        header: 'Name',
        dataKeys: ['name'],
        sort: 'name',
      },
      {
        header: 'Stage',
        dataKeys: ['evolutionStage'],
        valueMapping: {
          1: 'Basic',
          2: 'Middle',
          3: 'Final',
        },
      },
      {
        header: 'Primary Type',
        dataKeys: ['type1'],
        sort: '',
      },
      {
        header: 'Secondary Type',
        dataKeys: ['type2'],
        placeholder: '---',
      },
      {
        header: 'Generation',
        dataKeys: ['region', 'generation'],
      },
    ],
    data: simpleExample,
    rowClickAction: (data) => {
      const item = data as { name: string }

      alert(item.name)
    },
  },
  render: function SortableTableStory({ columns, data, ...props }) {
    return <DataTable columns={columns} data={data} {...props} />
  },
}

export const TicketQueue: Story = {
  args: {
    columns: queueExampleColumns,
    data: queueExample.ticketQueue,
  },
  render: function SortableTableStory({ columns, data, ...props }) {
    const sortedData = data.slice(0, 20)

    return <DataTable columns={columns} data={sortedData} {...props} />
  },
}
