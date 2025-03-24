import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Card } from './Card'
import { colorNames } from '@props/color.props'
import { useState } from 'react'

const CardChildren = ({ withFooter = false }) => {
  return (
    <>
      <Card.Header
        title="Card Title"
        description="A versatile card component that can be used to display content with a header, body and footer sections."
      />
      <Card.Body>
        This card demonstrates a typical layout with a title, descriptive
        content in the body, and action buttons in the footer. The content is
        neatly organized and the width is constrained for optimal readability.
      </Card.Body>
      {withFooter && (
        <Card.Footer>
          {/* TODO: Add real button component */}
          <button className="rounded-md border border-meteor-200 p-3 text-meteor-400">
            Cancel
          </button>
          <button className="rounded-md bg-deep-space p-3 text-white">
            Action
          </button>
        </Card.Footer>
      )}
    </>
  )
}

const meta = {
  title: 'Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'Fundamental layout building block.',
      },
    },
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {
    children: {
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: `The content of the card. Optionally can include a <Card.Header>, a <Card.Body> and/or a <Card.Footer>`,
        },
      },
    },
    hoverEffect: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    bgColor: {
      options: colorNames,
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The color of the background of the card',
        },
        defaultValue: { summary: null },
      },
    },
    borderRadius: {
      defaultValue: 'medium',
      control: {
        type: 'text',
      },
    },
    p: {
      defaultValue: '4',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic card component displaying just text content.',
      },
    },
  },
  args: {
    children: 'This is a card',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const box = await canvas.getByTestId('card-component')
    await expect(box).toBeInTheDocument()
  },
}

export const WithHeaderAndBody: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A basic card component displaying a formatted `<Card.Header>` and `<Card.Body>` content.',
      },
    },
  },
  args: {
    children: <CardChildren withFooter={false} />,
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const card = await canvas.getByTestId('card-component')
    const header = await canvas.getByRole('heading', { name: 'Card Title' })
    const description = await canvas.getByText(/A versatile card component/)

    await expect(card).toBeInTheDocument()

    await step('Check the Card header and body are rendered', async () => {
      await expect(header).toBeInTheDocument()
      await expect(description).toBeInTheDocument()
    })
  },
}

export const WithActionFooter: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A card component that includes also a `<Card.Footer>` with action buttons.',
      },
    },
  },
  args: {
    children: <CardChildren withFooter={true} />,
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const card = await canvas.getByTestId('card-component')
    const actionButton = await canvas.getByRole('button', { name: 'Action' })

    await expect(card).toBeInTheDocument()
    await step('Check the Card footer is rendered', async () => {
      await expect(actionButton).toBeInTheDocument()
    })
  },
}

export const HoverEffect: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the card component with an interactive hover effect that provides visual feedback when users mouse over the card.',
      },
    },
  },
  args: {
    children: <CardChildren />,
    hoverEffect: true,
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const card = await canvas.getByTestId('card-component')

    await expect(card).toBeInTheDocument()

    await step('Check the Card has the hover class applied', async () => {
      await expect(card.className).toMatch('hover')
    })
  },
}

export const Shadow: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Cards can have different shadow depths using the boxshadow prop. Available options are: tiny, small, medium, large, and huge.',
      },
    },
  },
  args: {
    children: <CardChildren />,
    boxshadow: 'medium',
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const card = await canvas.getByTestId('card-component')

    await expect(card).toBeInTheDocument()

    await step('Check the Card has the shadow class applied', async () => {
      await expect(card.className).toMatch('shadow')
    })
  },
}

export const Event: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the on click event of the card, cycling through different background colors.',
      },
    },
  },
  args: {
    children: <CardChildren />,
    onClick: function () {
      console.log('clicked')
    },
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const card = await canvas.getByTestId('card-component')

    await expect(card).toBeInTheDocument()
    await step('Check the onClick event is triggered', async () => {
      await userEvent.click(card)
      await expect(card).toHaveAttribute('onclick')
    })
  },
}
