import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DataTable } from './DataTable'
import {
  simpleExample,
  queueExample,
  SimpleExampleDataShape,
  QueueExampleDataShape,
} from './DataTable.stories.data'
import { queueExampleColumns } from './DataTable.stories.ticket'
import { Text } from '@components/Text/Text'
import { Icon } from '@components/Icon/Icon'
import { useDefaultSortHandler } from './DataTable.hooks'
import { ColumnSchema } from './DataTable.props'

const meta = {
  title: 'Data Display/Data Table',
  component: DataTable<SimpleExampleDataShape | QueueExampleDataShape>,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      description: 'Array of column definitions for the table',
      table: {
        type: {
          summary: `Array<ColumnSchema<T>>`,
          detail: `interface ColumnSchema<T extends object> {
  component?: React.FunctionComponent<Pick<T, keyof T>>
  dataCellClassName?: string
  dataKeys?: Array<keyof T>
  align?: 'left' | 'center' | 'right'
  delimiter?: string
  header: | null | string | React.FunctionComponent<{ children?: React.ReactElement }>
  headerCellClassName?: string
  keyPropMapping?: { [key in keyof T]: string | null | undefined }
  placeholder?: string
  sortKey?: keyof T
  textType?: keyof typeof fontSizes
  valueMapping?: { [key: string]: string }
}`,
        },
      },
    },
    data: {
      description: 'Array of data objects to display in the table',
      table: {
        type: { summary: 'Array<T>' },
      },
    },
    uniqueKey: {
      description: 'Optional key to uniquely identify rows',
      table: {
        type: { summary: 'string' },
      },
    },
    sort: {
      description: 'Sorting configuration object',
      table: {
        type: { summary: 'SortSchema' },
      },
    },
    onClickRow: {
      description: 'Callback function when a row is clicked',
      table: {
        type: { summary: '(rowData: Partial<T>) => void' },
      },
    },
    isSelectable: {
      description: 'Whether rows can be selected',
      table: {
        type: { summary: 'boolean' },
      },
    },
    selectedIndexes: {
      description: 'Array of selected row indexes',
      table: {
        type: { summary: 'Array<number>' },
      },
    },
    onSelectRow: {
      description: 'Callback function when a row is selected/deselected',
      table: {
        type: { summary: '(rowData: T, selected: boolean) => void' },
      },
    },
    onSelectAll: {
      description: 'Callback function when all rows are selected/deselected',
      table: {
        type: { summary: '() => void' },
      },
    },
    borderColor: {
      description: 'Custom border color for the table',
      table: {
        type: { summary: 'string' },
      },
    },
    testId: {
      description: 'Test ID for testing purposes',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      description: 'Additional CSS classes for the table',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Display an array of data in a table',
      },
    },
    layout: 'centered',
  },
} satisfies Meta<
  typeof DataTable<SimpleExampleDataShape | QueueExampleDataShape>
>

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
        align: 'right',
      },
      {
        header: 'Name',
        headerCellClassName: 'p-4',
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
        sortKey: 'type1',
        component: (props) => {
          return (
            <div className={!props.type2 ? `font-bold` : ''}>{props.type1}</div>
          )
        },
      },
      {
        header: 'Secondary Type',
        dataKeys: ['type2'],
        placeholder: '---',
        tooltip:
          'A Pokemon can have a secondary type that affects its weaknesses and resistances.',
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

    const handleSelect = (
      rowData: SimpleExampleDataShape | QueueExampleDataShape,
      isSelected: boolean,
    ) => {
      const { dexNumber } = rowData

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
          {...props}
          columns={columns}
          data={sortedData}
          sort={sort}
          isSelectable={selectEnabled}
          selectedIndexes={selectedIndexes}
          onSelectRow={handleSelect}
          onSelectAll={handleSelectAll}
        />
      </>
    )
  },
}

export const TicketQueue: Story = {
  args: {
    columns: queueExampleColumns as Array<ColumnSchema<QueueExampleDataShape>>,
    data: queueExample.ticketQueue,
  },
  render: function SortableTableStory({ columns, data, ...props }) {
    const sortedData = data.slice(0, 20)

    return <DataTable columns={columns} data={sortedData} {...props} />
  },
}
