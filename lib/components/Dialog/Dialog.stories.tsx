import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Dialog } from './Dialog'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const BasicExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hover:bg-earth-500 rounded bg-earth-400 px-4 py-2 text-white"
      >
        Open Dialog
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Header
          title="Dialog Title"
          description="This is a basic dialog example"
        />

        <Dialog.Body>
          <p>This is the dialog content. You can put any content here.</p>
        </Dialog.Body>

        <Dialog.Footer>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:bg-gray-400 rounded bg-mercury-400 px-4 py-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setOpen(false)}
            className="rounded bg-earth-300 px-4 py-2 text-white hover:bg-earth-400"
          >
            Confirm
          </button>
        </Dialog.Footer>
      </Dialog>
    </>
  )
}

const WithTriggerExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog.Trigger onClick={() => setOpen(true)}>
        Open Dialog with Trigger Component
      </Dialog.Trigger>

      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Header
          title="Dialog with Trigger"
          description="This dialog uses the Dialog.Trigger component"
        />

        <Dialog.Body>
          <p>
            The Dialog.Trigger component provides consistent styling and
            behavior for opening dialogs.
          </p>
        </Dialog.Body>

        <Dialog.Footer justifyContent="between">
          <button
            onClick={() => setOpen(false)}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400 rounded px-4 py-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setOpen(false)}
            className="bg-green-500 hover:bg-green-600 rounded px-4 py-2 text-white"
          >
            Save Changes
          </button>
        </Dialog.Footer>
      </Dialog>
    </>
  )
}

const LargeDialogExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog.Trigger onClick={() => setOpen(true)}>
        Open Large Dialog
      </Dialog.Trigger>

      <Dialog open={open} onOpenChange={setOpen} size="xl">
        <Dialog.Header
          title="Large Dialog"
          description="This is a larger dialog with more content"
          showCloseButton={true}
        />

        <Dialog.Body>
          <div className="space-y-4">
            <p>This is a large dialog with more content space.</p>
            <p>You can fit forms, tables, or other complex content here.</p>
            <div className="bg-gray-100 rounded p-4">
              <h4 className="font-medium">Example Content Block</h4>
              <p className="text-gray-600 mt-2 text-sm">
                This could be a form, chart, or any other content you need to
                display.
              </p>
            </div>
          </div>
        </Dialog.Body>

        <Dialog.Footer>
          <button
            onClick={() => setOpen(false)}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400 rounded px-4 py-2"
          >
            Close
          </button>
        </Dialog.Footer>
      </Dialog>
    </>
  )
}

const CustomStylesExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog.Trigger
        onClick={() => setOpen(true)}
        className="bg-purple-500 hover:bg-purple-600 text-white"
      >
        Custom Styled Dialog
      </Dialog.Trigger>

      <Dialog
        open={open}
        onOpenChange={setOpen}
        className="custom-dialog"
        size="lg"
      >
        <Dialog.Header
          title="Custom Dialog"
          description="This dialog has custom styling"
          className="bg-purple-50"
        />

        <Dialog.Body className="bg-purple-25">
          <p>This dialog demonstrates custom styling capabilities.</p>
          <p>You can override the default styles using className props.</p>
        </Dialog.Body>

        <Dialog.Footer className="bg-purple-50" justifyContent="center">
          <button
            onClick={() => setOpen(false)}
            className="bg-purple-500 hover:bg-purple-600 rounded px-6 py-2 text-white"
          >
            Got it!
          </button>
        </Dialog.Footer>
      </Dialog>
    </>
  )
}

const MultipleDialogsExample = () => {
  const [dialog1Open, setDialog1Open] = useState(false)
  const [dialog2Open, setDialog2Open] = useState(false)

  return (
    <>
      <div className="flex gap-4">
        <Dialog.Trigger onClick={() => setDialog1Open(true)}>
          Open First Dialog
        </Dialog.Trigger>
        <Dialog.Trigger onClick={() => setDialog2Open(true)}>
          Open Second Dialog
        </Dialog.Trigger>
      </div>

      <Dialog open={dialog1Open} onOpenChange={setDialog1Open} size="md">
        <Dialog.Header title="First Dialog" />
        <Dialog.Body>
          <p>This is the first dialog.</p>
          <button
            onClick={() => setDialog2Open(true)}
            className="bg-blue-500 hover:bg-blue-600 mt-4 rounded px-4 py-2 text-white"
          >
            Open Second Dialog
          </button>
        </Dialog.Body>
        <Dialog.Footer>
          <button
            onClick={() => setDialog1Open(false)}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400 rounded px-4 py-2"
          >
            Close
          </button>
        </Dialog.Footer>
      </Dialog>

      <Dialog open={dialog2Open} onOpenChange={setDialog2Open} size="sm">
        <Dialog.Header title="Second Dialog" />
        <Dialog.Body>
          <p>This is the second dialog. You can have multiple dialogs open.</p>
        </Dialog.Body>
        <Dialog.Footer>
          <button
            onClick={() => setDialog2Open(false)}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400 rounded px-4 py-2"
          >
            Close
          </button>
        </Dialog.Footer>
      </Dialog>
    </>
  )
}

export const Basic: Story = {
  render: () => <BasicExample />,
}

export const WithTriggerComponent: Story = {
  render: () => <WithTriggerExample />,
}

export const LargeDialog: Story = {
  render: () => <LargeDialogExample />,
}

export const CustomStyles: Story = {
  render: () => <CustomStylesExample />,
}

export const MultipleDialogs: Story = {
  render: () => <MultipleDialogsExample />,
}
