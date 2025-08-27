import { useState, useRef } from 'react'
import { cn } from '@utils/cn'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Select } from './Select'
import {
  exampleStringItems,
  exampleSimpleObjects,
  examplePreformattedItems,
  exampleMappableItems,
  exampleCustomItems,
} from './Select.stories.data'
import { SelectItemRenderingContext, SelectItemsType } from './Select.props'

const meta = {
  title: 'Input/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Styled Select box replacement with searchable dropdown',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: [] as SelectItemsType,
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const ArrayOfStrings: Story = {
  args: {
    items: exampleStringItems,
    value: [exampleStringItems[3], exampleStringItems[5]],
    multi: true,
    onChange: () => {},
    testId: 'select-basic-array',
  },
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState(args.value)

      return <Story args={{ ...args, value, onChange: setValue }} />
    },
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = await canvas.getByTestId('select-basic-array')

    await expect(select).toBeInTheDocument()
  },
}

export const ArrayOfSimpleObjects: Story = {
  args: {
    items: exampleSimpleObjects,
    onChange: () => {},
    testId: 'select-array-of-objects',
  },
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState(args.value)

      return <Story args={{ ...args, value, onChange: setValue }} />
    },
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = await canvas.getByTestId('select-array-of-objects')

    await expect(select).toBeInTheDocument()
  },
}

export const ArrayOfPreformattedObjects: Story = {
  args: {
    items: examplePreformattedItems,
    onChange: () => {},
    testId: 'select-preformatted-items',
  },
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState(args.value)

      return <Story args={{ ...args, value, onChange: setValue }} />
    },
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = await canvas.getByTestId('select-preformatted-items')

    await expect(select).toBeInTheDocument()
  },
}

export const CustomObjectsWithMapping: Story = {
  args: {
    items: exampleMappableItems,
    onChange: () => {},
    dataKeyMapping: {
      label: 'name',
      subLabel: 'phoneNumber',
      value: 'id',
    },
    testId: 'select-mapped-items',
  },
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState(args.value)

      return <Story args={{ ...args, value, onChange: setValue }} />
    },
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = await canvas.getByTestId('select-mapped-items')

    await expect(select).toBeInTheDocument()
  },
}

export const CustomObjectsWithCustomRenderer: Story = {
  args: {
    items: exampleCustomItems,
    onChange: () => {},
    renderItem: ({ item, classNames, renderContext, isSelected }) => {
      const {
        make,
        model,
        modelYear,
        trimLevel,
        price,
        condition,
        miles,
        color,
      } = item as (typeof exampleCustomItems)[number]

      switch (renderContext) {
        case SelectItemRenderingContext.SelectedSingle:
          return (
            <div className={classNames.labelContainerClassString}>
              {`${modelYear} ${make} ${model} ${trimLevel}`}
            </div>
          )
        default:
          return (
            <div className={classNames.labelContainerClassString}>
              <div className={classNames.labelClassString}>
                {`${modelYear} ${make} ${model} ${trimLevel}`}
              </div>
              <div
                className={cn(classNames.subLabelClassString, 'flex flex-wrap')}
              >
                <span className="mr-2">${price}</span>
                {condition === 'New' ? (
                  <span
                    className={`mr-2 ${isSelected ? 'font-bold' : 'text-neptune-300'}`}
                  >
                    {condition}
                  </span>
                ) : null}
                {miles !== 0 ? <span className="mr-2">{miles}mi</span> : null}
                <span className="mr-2">{color}</span>
              </div>
            </div>
          )
      }
    },
    testId: 'select-custom-renderer',
  },
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState(args.value)

      return <Story args={{ ...args, value, onChange: setValue }} />
    },
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = await canvas.getByTestId('select-custom-renderer')

    await expect(select).toBeInTheDocument()
  },
}

export const ExternalSearchImplementation: Story = {
  args: {
    items: exampleStringItems,
    value: [exampleStringItems[3], exampleStringItems[5]],
    multi: true,
    onChange: () => {},
    testId: 'select-with-external-search',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = await canvas.getByTestId('select-with-external-search')

    await expect(select).toBeInTheDocument()
  },
  render: function SortableTableStory(props) {
    const loadTimeout = useRef<ReturnType<typeof setTimeout>>()
    const itemsTimeout = useRef<ReturnType<typeof setTimeout>>()
    const [value, setValue] = useState(props.value)
    const [activeItems, setActiveItems] = useState(props.items)
    const [filterValue, _setFilterValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const setFilterValue = (newValue: string) => {
      if (loadTimeout.current) clearTimeout(loadTimeout.current)
      if (itemsTimeout.current) clearTimeout(itemsTimeout.current)

      _setFilterValue(newValue)

      loadTimeout.current = setTimeout(() => {
        setIsLoading(true)
      }, 200)

      itemsTimeout.current = setTimeout(() => {
        const filteredItems = props.items.filter((item) => {
          return (item as string).toLowerCase().indexOf(newValue) >= 0
        })

        setIsLoading(false)
        setActiveItems(filteredItems as Array<string>)
      }, 700)
    }

    return (
      <>
        <Select
          {...props}
          filterBehavior={Select.FilterBehaviors.Search}
          filterValue={filterValue}
          isLoading={isLoading}
          items={activeItems}
          onFilterValueChange={setFilterValue}
          onChange={setValue}
          value={value}
        />
      </>
    )
  },
}
