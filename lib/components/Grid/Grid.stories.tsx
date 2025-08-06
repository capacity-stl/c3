import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Grid, GridItem } from './index'

const controlsToExclude = [
  'testId',
  'className',
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'children',
  'w',
  'h',
  'border',
  'pt',
  'pb',
  'pl',
  'pr',
  'align',
  'justify',
  'alignSelf',
  'order',
  'justifyContent',
  'justifyItems',
  'bgColor',
  'wMax',
  'hMax',
  'wMin',
  'hMin',
  'wFull',
  'hFull',
  'wFit',
  'alignContent',
  'placeContent',
  'alignItems',
  'placeItems',
]

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: 'A flexible CSS Grid component.',
      },
    },
    layout: 'centered',
    controls: {
      exclude: [...controlsToExclude],
    },
  },
  tags: ['autodocs'],

  argTypes: {
    cols: {
      control: { type: 'select' },
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'none',
      ],
      description: 'Number of grid columns',
    },
    rows: {
      control: { type: 'select' },
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'none',
      ],
      description: 'Number of grid rows',
    },
    gap: {
      control: { type: 'select' },
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'none',
      ],
      description: 'Gap between grid items',
    },
    alignItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Align items within grid cells',
    },
    justifyItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Justify items within grid cells',
    },
    flow: {
      control: { type: 'select' },
      options: ['row', 'column', 'dense', 'col-dense'],
      description: 'Grid auto flow direction',
    },
  },
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

// Helper component for basic grid items
const BasicGridItem = ({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="h-full border border-dashed border-earth-200 bg-earth-100 p-4 text-center align-middle text-earth-400"
    {...props}
  >
    {children}
  </div>
)

export const Default: Story = {
  args: {
    cols: '3',
    gap: '4',
    testId: 'grid-default',
    children: (
      <>
        <BasicGridItem>Item 1</BasicGridItem>
        <BasicGridItem>Item 2</BasicGridItem>
        <BasicGridItem>Item 3</BasicGridItem>
        <BasicGridItem>Item 4</BasicGridItem>
        <BasicGridItem>Item 5</BasicGridItem>
        <BasicGridItem>Item 6</BasicGridItem>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const grid = await canvas.getByTestId('grid-default')
    await expect(grid).toBeInTheDocument()
  },
}

export const WithGridItems: Story = {
  args: {
    cols: '4',
    rows: '3',
    gap: '4',
    testId: 'grid-with-items',
    children: (
      <>
        <GridItem colSpan="2">
          <BasicGridItem>Spans 2 columns</BasicGridItem>
        </GridItem>
        <GridItem>
          <BasicGridItem>Item 2</BasicGridItem>
        </GridItem>
        <GridItem>
          <BasicGridItem>Item 3</BasicGridItem>
        </GridItem>
        <GridItem rowSpan="2">
          <BasicGridItem>Spans 2 rows</BasicGridItem>
        </GridItem>
        <GridItem colSpan="3">
          <BasicGridItem>Spans 3 columns</BasicGridItem>
        </GridItem>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const grid = await canvas.getByTestId('grid-with-items')
    await expect(grid).toBeInTheDocument()
  },
}

export const AutoFlow: Story = {
  args: {
    cols: '3',
    rows: '2',
    gap: '4',
    flow: 'column',
    testId: 'grid-flow',
    children: (
      <>
        <GridItem colSpan="2">
          <BasicGridItem>Item 1</BasicGridItem>
        </GridItem>
        <GridItem colSpan="2">
          <BasicGridItem>Item 2</BasicGridItem>
        </GridItem>

        <BasicGridItem>Item 3</BasicGridItem>
        <BasicGridItem>Item 4</BasicGridItem>
        <BasicGridItem>Item 5</BasicGridItem>
        <BasicGridItem>Item 6</BasicGridItem>
        <BasicGridItem>Item 7</BasicGridItem>
      </>
    ),
  },
}

export const ResponsiveGrid: Story = {
  args: {
    cols: '1', // 1 column on mobile
    gap: '4',
    testId: 'grid-responsive',
    className: 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6', // Responsive columns
    children: (
      <>
        <BasicGridItem>Item 1</BasicGridItem>
        <BasicGridItem>Item 2</BasicGridItem>
        <BasicGridItem>Item 3</BasicGridItem>
        <BasicGridItem>Item 4</BasicGridItem>
        <BasicGridItem>Item 5</BasicGridItem>
        <BasicGridItem>Item 6</BasicGridItem>
        <BasicGridItem>Item 7</BasicGridItem>
        <BasicGridItem>Item 8</BasicGridItem>
        <BasicGridItem>Item 9</BasicGridItem>
        <BasicGridItem>Item 10</BasicGridItem>
        <BasicGridItem>Item 11</BasicGridItem>
        <BasicGridItem>Item 12</BasicGridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `
This responsive grid adapts to different screen sizes:
- **Mobile (default)**: 1 column
- **Small screens (sm)**: 2 columns  
- **Medium screens (md)**: 3 columns
- **Large screens (lg)**: 4 columns
- **Extra large (xl)**: 6 columns

Resize your browser window to see the grid adapt.
        `,
      },
    },
  },
}
