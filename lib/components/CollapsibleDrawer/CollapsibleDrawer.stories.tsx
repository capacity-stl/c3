import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { colorNames } from '@props/color.props'
import { Icon } from '@components/Icon/Icon'
import { Badge } from '@components/Badge/Badge'
import { CollapsibleDrawer } from './CollapsibleDrawer'
import { CollapsibleSheet } from './CollapsibleSheet'
import { DropToSideOptions } from './CollapsibleDrawer.props'

const meta = {
  title: 'Data Display/Collapsible Drawer',
  component: CollapsibleDrawer,
  parameters: {
    docs: {
      description: {
        component: 'Input element.',
      },
    },
    layout: 'centered',
    controls: {
      exclude: [
        'className',
        'children',
        'testId',
        'value',
        'wMin',
        'wMax',
        'm',
        'mx',
        'my',
        'mt',
        'mr',
        'mb',
        'ml',
        'hasLeadingIcon',
        'hasTrailingIcon',
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      options: ['Not Defined', ...colorNames],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'The background color of the icon column',
        },
        defaultValue: { summary: 'unset' },
      },
    },
    borderColor: {
      options: ['Not Defined', ...colorNames],
      mapping: { 'Not Defined': undefined },
      control: { type: 'select' },
      table: {
        type: {
          summary:
            'The color of the border applied to the leading edge of both the icon column and the content column',
        },
        defaultValue: { summary: 'meteor-200' },
      },
    },
    dropToSide: {
      mapping: DropToSideOptions,
      options: Object.keys(DropToSideOptions),
      control: { type: 'radio' },
      table: {
        type: {
          summary:
            'The side of the icon column where the content column will render',
        },
        defaultValue: { summary: 'right' },
      },
    },
    openSectionId: {
      control: { type: 'text' },
      table: {
        type: {
          summary:
            'Allows the parent implementation to set the panel that should be shown; use the `id` prop of the sheet you want to open',
        },
        defaultValue: { summary: 'unset' },
      },
    },
    w: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'The width of the content column',
        },
        defaultValue: { summary: '320' },
      },
    },
  },
} satisfies Meta<typeof CollapsibleDrawer>

export default meta
type Story = StoryObj<typeof meta>

const ExampleExternalHeader = () => {
  return (
    <div className="flex items-center gap-2">
      <Badge shape="rounded">Custom Header</Badge>
      <Icon icon={Icon.Glyph.Alert} size="tiny" />
    </div>
  )
}

const ExampleExternalComponent = () => {
  return (
    <div className="p-2">
      <p>
        Example component rendered with the <code>component</code> prop instead
        of <code>children</code>
      </p>
    </div>
  )
}

export const Default: Story = {
  args: {
    testId: 'default-story-drawer',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const input = await canvas.getByTestId('default-story-drawer')
    await expect(input).toBeInTheDocument()

    const button = await canvas.getByTestId('third-sheet-icon')
    await expect(button).toBeInTheDocument()

    await step('Clicking a button opens the corresponding sheet', async () => {
      await userEvent.click(button)

      const content = await canvas.getByTestId('third-sheet-content')
      await expect(content).toBeInTheDocument()
    })
  },
  render: (props) => (
    <div
      className={`border-${props.borderColor} flex ${props.dropToSide === DropToSideOptions.Left ? 'flex-row-reverse' : 'flex-row'} h-[400px] w-[500px] border`}
    >
      <CollapsibleDrawer {...props}>
        <CollapsibleSheet
          icon={Icon.Glyph.Analytics}
          id="first"
          testId="first-sheet"
          title="First"
        >
          <div className="p-2">First sheet content</div>
        </CollapsibleSheet>
        <CollapsibleSheet
          icon={Icon.Glyph.Archive}
          id="second"
          title="Second"
          testId="second-sheet"
          headerComponent={ExampleExternalHeader}
        >
          <div className="p-2">Second sheet content</div>
        </CollapsibleSheet>
        <CollapsibleSheet
          icon={Icon.Glyph.CardView}
          id="third"
          title="Third"
          testId="third-sheet"
          closeIcon={Icon.Glyph.CaretBoxedLeft}
        >
          <div className="p-2">Third sheet content</div>
        </CollapsibleSheet>
        <CollapsibleSheet
          icon={Icon.Glyph.CopyAndFill}
          id="external"
          title="External Sheet"
          testId="external-sheet"
          component={ExampleExternalComponent}
        />
      </CollapsibleDrawer>
    </div>
  ),
}

export const PageExample: Story = {
  args: {},
  render: () => (
    <div className="flex h-[600px] max-w-[1200px] border border-meteor-200">
      <CollapsibleDrawer hideSidebarWhenOpen openSectionId="queue" w="60">
        <CollapsibleSheet
          icon={Icon.Glyph.CaretRight}
          id="queue"
          title="Queue"
          closeIcon={Icon.Glyph.CaretLeft}
        >
          <div className="p-2">Card List</div>
        </CollapsibleSheet>
      </CollapsibleDrawer>
      <div className="flex-auto overflow-y-auto p-8">
        <p className="my-3">
          An example showing dual implementations; one with a single child that
          starts as open and renders like a collapsible section, and one with
          multiple children that lets the user click between them. This center
          section is an example implementation showing how the sidebar interacts
          with its siblings in a flex row.
        </p>
        <p className="my-3 text-meteor-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie
          bibendum lorem. Ut sit amet lectus pellentesque diam vehicula porta in
          eget lorem. Sed eu magna neque. Aenean orci erat, dignissim vel erat
          vitae, suscipit maximus enim. Donec convallis fringilla fermentum. In
          vitae ex libero. Etiam in purus in mi placerat fermentum. Sed congue
          rhoncus orci eget suscipit. Vestibulum vel nulla venenatis, efficitur
          lacus et, tincidunt est. Maecenas quis finibus justo. Curabitur et
          nisi massa. Praesent leo felis, ullamcorper ac ex in, placerat
          consequat ex.
        </p>
        <p className="my-3 text-meteor-300">
          Integer at efficitur lacus. Nulla at nulla eu magna laoreet commodo
          non sit amet arcu. Donec in commodo nisi. Aliquam rutrum laoreet
          purus, vitae ultrices tellus tincidunt vitae. Cras luctus lacus sed
          sapien feugiat tempor. Morbi luctus ultricies euismod. Donec
          vestibulum at turpis et egestas. Nullam egestas varius mauris, ac
          ullamcorper mauris congue vel. Cras euismod metus est, vitae interdum
          tortor eleifend quis. Duis pellentesque, sapien ac rutrum ultrices,
          justo lorem molestie ligula, vitae placerat enim erat id nibh.
          Maecenas aliquet, enim sit amet ornare mollis, nisi neque efficitur
          neque, ac iaculis erat metus ut nisl.
        </p>
        <p className="my-3 text-meteor-300">
          Duis sagittis malesuada scelerisque. Sed tempor neque in mollis
          condimentum. Etiam hendrerit egestas dignissim. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Proin ut velit sit amet dolor
          pulvinar facilisis. Fusce condimentum mi laoreet tellus dapibus
          volutpat. Fusce eu tortor bibendum, consequat mauris ut, euismod orci.
          Sed vitae facilisis nibh, sed rhoncus augue. Phasellus a leo semper
          ligula hendrerit condimentum. Sed feugiat ut nulla vel molestie.
          Mauris non orci fringilla, accumsan odio vitae, ornare dui. Praesent
          malesuada ac nisi vel viverra. Proin eu sem quam. Cras non magna ac
          lacus interdum maximus at et diam.
        </p>
        <p className="my-3 text-meteor-300">
          Cras ultrices dui massa, sed mattis magna malesuada dictum. In
          imperdiet, odio et lacinia dignissim, orci orci tristique metus, vel
          varius ligula velit sed orci. Nulla dignissim orci eu imperdiet
          semper. Cras ac vehicula mauris. Suspendisse hendrerit efficitur
          magna, vel hendrerit urna lacinia quis. Mauris vitae dui nec enim
          auctor iaculis sit amet et ligula. Nullam ligula lacus, faucibus sed
          diam vitae, sodales vestibulum dolor. Integer luctus blandit lectus,
          ac egestas purus luctus tristique. Nam finibus nisi eget maximus
          posuere. Sed lacinia eros quis accumsan accumsan. Nullam pretium ipsum
          dui, rutrum varius elit tristique eu. Suspendisse potenti. Nulla
          fringilla, nisi sit amet pretium efficitur, felis dolor pretium nisi,
          vel auctor libero ante sit amet urna. Mauris at est felis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Phasellus nec arcu
          vitae lorem congue imperdiet non fermentum felis.
        </p>
        <p className="my-3 text-meteor-300">
          Integer ut elit tortor. Pellentesque vel egestas tortor. Curabitur
          semper mauris quis convallis iaculis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Fusce sagittis
          diam fringilla finibus interdum. Aliquam erat volutpat. Nunc a leo
          imperdiet, posuere est nec, vulputate nisl. Donec ligula risus,
          consectetur quis tellus vitae, egestas gravida diam. Donec quam metus,
          interdum vitae justo accumsan, ultricies tristique augue.
        </p>
      </div>
      <CollapsibleDrawer
        bgColor="meteor-100"
        dropToSide="left"
        openSectionId="information"
      >
        <CollapsibleSheet
          icon={Icon.Glyph.Info}
          id="information"
          title="Ticket Information"
        >
          <div className="p-2">Information panel</div>
        </CollapsibleSheet>
        <CollapsibleSheet
          icon={Icon.Glyph.Person}
          id="external"
          title="External Example"
          component={ExampleExternalComponent}
        />
        <CollapsibleSheet
          icon={Icon.Glyph.ClassicExchange}
          id="Tools"
          title="Knowledge Base Tools"
        >
          <div className="p-2">Map to Exchange</div>
        </CollapsibleSheet>
      </CollapsibleDrawer>
    </div>
  ),
}
