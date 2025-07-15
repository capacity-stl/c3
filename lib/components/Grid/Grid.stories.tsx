import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Grid, GridItem } from './index'

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible CSS Grid component with GridItem support, inspired by Chakra UI and Radix UI themes.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    templateColumns: {
      control: { type: 'text' },
      description:
        'Grid template columns (number, string, or responsive object)',
    },
    templateRows: {
      control: { type: 'text' },
      description: 'Grid template rows (number, string, or responsive object)',
    },
    gap: {
      control: { type: 'text' },
      description:
        'Gap between grid items (number, string, or responsive object)',
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
    autoFlow: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-dense', 'column-dense'],
      description: 'Grid auto flow direction',
    },
    display: {
      control: { type: 'select' },
      options: ['grid', 'inline-grid'],
      description: 'Display type',
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
    style={{
      background: '#f1f5f9',
      border: '1px solid #e2e8f0',
      padding: '1rem',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60px',
    }}
    {...props}
  >
    {children}
  </div>
)

export const Default: Story = {
  args: {
    templateColumns: 'repeat(3, 1fr)',
    gap: 4,
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
    templateColumns: 'repeat(4, 1fr)',
    gap: 4,
    testId: 'grid-with-items',
    children: (
      <>
        <GridItem
          colSpan={2}
          style={{
            background: '#fef3c7',
            padding: '1rem',
            borderRadius: '4px',
          }}
        >
          Spans 2 columns
        </GridItem>
        <GridItem
          style={{
            background: '#dbeafe',
            padding: '1rem',
            borderRadius: '4px',
          }}
        >
          Item 2
        </GridItem>
        <GridItem
          style={{
            background: '#f3e8ff',
            padding: '1rem',
            borderRadius: '4px',
          }}
        >
          Item 3
        </GridItem>
        <GridItem
          rowSpan={2}
          style={{
            background: '#d1fae5',
            padding: '1rem',
            borderRadius: '4px',
          }}
        >
          Spans 2 rows
        </GridItem>
        <GridItem
          colSpan={3}
          style={{
            background: '#fce7f3',
            padding: '1rem',
            borderRadius: '4px',
          }}
        >
          Spans 3 columns
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

export const CustomCSSValues: Story = {
  args: {
    templateColumns: 'repeat(5, 1fr)',
    templateRows: 'repeat(2, 1fr)',
    gap: '1rem',
    h: '200px',
    testId: 'grid-custom',
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
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const grid = await canvas.getByTestId('grid-custom')
    await expect(grid).toBeInTheDocument()

    const computedStyle = window.getComputedStyle(grid)
    await expect(computedStyle.gridTemplateColumns).toBe('repeat(5, 1fr)')
    await expect(computedStyle.gridTemplateRows).toBe('repeat(2, 1fr)')
  },
}

export const WithAlignment: Story = {
  args: {
    templateColumns: 'repeat(3, 1fr)',
    gap: 4,
    alignItems: 'center',
    justifyItems: 'center',
    h: '300px',
    testId: 'grid-alignment',
    children: (
      <>
        <BasicGridItem>Centered</BasicGridItem>
        <BasicGridItem>Content</BasicGridItem>
        <BasicGridItem>Items</BasicGridItem>
      </>
    ),
  },
}

export const WithTemplateAreas: Story = {
  args: {
    templateColumns: 'repeat(3, 1fr)',
    templateRows: 'repeat(3, 1fr)',
    gap: 4,
    templateAreas: `
      "header header header"
      "sidebar main main"
      "footer footer footer"
    `,
    h: '300px',
    testId: 'grid-areas',
    children: (
      <>
        <GridItem
          area="header"
          style={{
            background: '#fef3c7',
            padding: '1rem',
            borderRadius: '4px',
          }}
        >
          Header
        </GridItem>
        <GridItem
          area="sidebar"
          style={{
            background: '#dbeafe',
            padding: '1rem',
            borderRadius: '4px',
          }}
        >
          Sidebar
        </GridItem>
        <GridItem
          area="main"
          style={{
            background: '#f3e8ff',
            padding: '1rem',
            borderRadius: '4px',
          }}
        >
          Main Content
        </GridItem>
        <GridItem
          area="footer"
          style={{
            background: '#d1fae5',
            padding: '1rem',
            borderRadius: '4px',
          }}
        >
          Footer
        </GridItem>
      </>
    ),
  },
}

export const ResponsiveGrid: Story = {
  args: {
    templateColumns: {
      initial: 'repeat(1, 1fr)',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)',
    },
    gap: { initial: 2, md: 4 },
    testId: 'grid-responsive',
    children: (
      <>
        <BasicGridItem>Responsive 1</BasicGridItem>
        <BasicGridItem>Responsive 2</BasicGridItem>
        <BasicGridItem>Responsive 3</BasicGridItem>
        <BasicGridItem>Responsive 4</BasicGridItem>
        <BasicGridItem>Responsive 5</BasicGridItem>
        <BasicGridItem>Responsive 6</BasicGridItem>
        <BasicGridItem>Responsive 7</BasicGridItem>
        <BasicGridItem>Responsive 8</BasicGridItem>
      </>
    ),
  },
}

export const AutoFlow: Story = {
  args: {
    templateColumns: 'repeat(3, 1fr)',
    templateRows: 'repeat(2, 1fr)',
    gap: 4,
    autoFlow: 'column',
    testId: 'grid-flow',
    children: (
      <>
        <BasicGridItem>Flow 1</BasicGridItem>
        <BasicGridItem>Flow 2</BasicGridItem>
        <BasicGridItem>Flow 3</BasicGridItem>
        <BasicGridItem>Flow 4</BasicGridItem>
        <BasicGridItem>Flow 5</BasicGridItem>
        <BasicGridItem>Flow 6</BasicGridItem>
        <BasicGridItem>Flow 7</BasicGridItem>
      </>
    ),
  },
}
