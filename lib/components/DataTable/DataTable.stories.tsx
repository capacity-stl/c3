import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DataTable } from './DataTable'
import {
  simpleExample,
  queueExample,
  SimpleExampleDataShape,
} from './DataTable.data'
import { queueExampleColumns } from './DataTable.stories.ticket'
import { Text } from '@components/Text/Text'
import { Icon } from '@components/Icon/Icon'
import { useDefaultSortHandler } from './DataTable.hooks'

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

const DynamicHeader = ({ children }: { children?: React.ReactElement }) => {
  return (
    <div className="flex gap-3 p-3">
      {children}
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
        sortKey: 'dexNumber',
      },
      {
        header: 'Name',
        dataKeys: ['name'],
        sortKey: 'name',
      },
      {
        header: 'Stage',
        dataKeys: ['evolutionStage'],
        sortKey: 'evolutionStage',
        valueMapping: {
          1: 'Basic',
          2: 'Middle',
          3: 'Final',
        },
      },
      {
        header: 'Primary Type',
        dataKeys: ['type1'],
        sortKey: 'type1',
      },
      {
        header: 'Secondary Type',
        dataKeys: ['type2'],
        placeholder: '---',
      },
      {
        header: 'Generation',
        dataKeys: ['region', 'generation'],
        sortKey: 'generation',
      },
    ],
    data: simpleExample,
    onClickRow: (data) => {
      const item = data as { name: string }

      alert(item.name)
    },
  },
  render: function SortableTableStory({ columns, data, ...props }) {
    const sort = useDefaultSortHandler('dexNumber', true)
    const [selectEnabled, setSelectEnabled] = useState<boolean>(false)
    const [selectedIds, setSelectedIds] = useState<Array<number>>([])

    const handleSelect = (rowData: object, isSelected: boolean) => {
      const { dexNumber } = rowData as SimpleExampleDataShape

      if (isSelected) {
        setSelectedIds([...selectedIds, dexNumber])
      } else {
        setSelectedIds(selectedIds.filter((id) => id !== dexNumber))
      }
    }

    const handleSelectAll = () => {
      if (selectedIds.length === data.length) {
        setSelectedIds([])
      } else {
        setSelectedIds(data.map((item) => item.dexNumber))
      }
    }

    const sortedData = (data as Array<SimpleExampleDataShape>).sort((a, b) => {
      const columnKey = sort.sortKey as keyof SimpleExampleDataShape
      const [greater, lesser] = sort.isAscending ? [1, -1] : [-1, 1]

      return a[columnKey] > b[columnKey] ? greater : lesser
    })

    const selectedIndexes = sortedData.reduce((indexes, dataItem, index) => {
      return selectedIds.indexOf(dataItem.dexNumber) >= 0
        ? [...indexes, index]
        : indexes
    }, [] as Array<number>)

    return (
      <>
        <button
          className="m-4"
          onClick={() => setSelectEnabled(!selectEnabled)}
        >
          {selectEnabled ? 'Disable' : 'Enable'} Select Mode
        </button>
        <DataTable
          columns={columns}
          data={sortedData}
          sort={sort}
          isSelectable={selectEnabled}
          selectedIndexes={selectedIndexes}
          onSelectRow={handleSelect}
          onSelectAll={handleSelectAll}
          {...props}
        />
      </>
    )
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
