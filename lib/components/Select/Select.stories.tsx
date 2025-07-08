import { useState, useRef, MutableRefObject } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Select } from './Select'
import { Icons } from '@components/Icon/Glyphs'
import {
  exampleStringItems,
  exampleSearchableItems,
} from './Select.stories.data'

const meta = {
  title: 'Data Input/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Styled Select box replacement with searchable dropdown',
      },
    },
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const SettableStateDecorator = (Story: Story, { args }) => {
  const [value, _setValue] = useState(args.value)

  const setValue = (item) => {
    console.log('clicked item', item)

    _setValue(item)
  }

  return (
    <>
      <Story args={{ ...args, value, onChange: setValue }} />
    </>
  )
}

export const ArrayOfStrings: Story = {
  args: {
    items: exampleStringItems,
    value: [exampleStringItems[3], exampleStringItems[5]],
    multi: true,
    onChange: () => {},
  },
  decorators: [SettableStateDecorator],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = await canvas.getByTestId('select-component')

    await expect(select).toBeInTheDocument()
  },
}

export const ArrayOfObjects: Story = {
  args: {
    items: [
      { label: 'Oneth', value: 1 },
      { label: 'Twoth', value: 2 },
      { label: 'Thirth', value: 3 },
      { label: 'Fourst', value: 4 },
    ],
    onChange: () => {},
  },
  decorators: [SettableStateDecorator],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = await canvas.getByTestId('select-component')

    await expect(select).toBeInTheDocument()
  },
}

export const ArrayOfObjectsWithDecorators: Story = {
  args: {
    items: [
      {
        label: 'First',
        subLabel: 'Pick the first item!',
        value: 1,
        leadingIcon: Icons.Apps,
        trailingIcon: Icons.ArrowRight,
      },
      {
        label: 'Second',
        subLabel: 'How about this one?',
        value: 2,
        leadingIcon: Icons.Archive,
        trailingIcon: Icons.CaretRight,
      },
      {
        label: 'Third',
        subLabel: 'This is what I have...',
        value: 3,
        leadingIcon: Icons.Automations,
        trailingIcon: Icons.ChevronRight,
      },
    ],
    onChange: () => {},
  },
  decorators: [SettableStateDecorator],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = await canvas.getByTestId('select-component')

    await expect(select).toBeInTheDocument()
  },
}

export const ControlledSearch: Story = {
  args: {
    items: exampleStringItems,
    value: [exampleStringItems[3], exampleStringItems[5]],
    multi: true,
    onChange: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = await canvas.getByTestId('select-component')

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
