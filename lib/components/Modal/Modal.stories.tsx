import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
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
        Open Modal
      </button>

      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Header
          title="Modal Title"
          description="This is a basic modal example"
        />

        <Modal.Body>
          <p>This is the modal content. You can put any content here.</p>
        </Modal.Body>

        <div>
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
        </div>
      </Modal>
    </>
  )
}

const WithTriggerExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Open Modal with Trigger Component
      </button>

      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Header
          title="Modal with Trigger"
          description="This modal uses the Modal.Trigger component"
        />

        <Modal.Body>
          <p>
            The Modal.Trigger component provides consistent styling and behavior
            for opening modals.
          </p>
        </Modal.Body>

        <div className="flex justify-between">
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
        </div>
      </Modal>
    </>
  )
}

const LargeModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Large Modal</button>

      <Modal open={open} onOpenChange={setOpen} size="xl">
        <Modal.Header
          title="Large Modal"
          description="This is a larger modal with more content"
          showCloseButton={true}
        />

        <Modal.Body>
          <div className="space-y-4">
            <p>This is a large modal with more content space.</p>
            <p>You can fit forms, tables, or other complex content here.</p>
            <div className="bg-gray-100 rounded p-4">
              <h4 className="font-medium">Example Content Block</h4>
              <p className="text-gray-600 mt-2 text-sm">
                This could be a form, chart, or any other content you need to
                display.
              </p>
            </div>
          </div>
        </Modal.Body>

        <div>
          <button
            onClick={() => setOpen(false)}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400 rounded px-4 py-2"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  )
}

const CustomStylesExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-purple-500 hover:bg-purple-600 text-white"
      >
        Custom Styled Modal
      </button>

      <Modal
        open={open}
        onOpenChange={setOpen}
        className="custom-modal"
        size="lg"
      >
        <Modal.Header
          title="Custom Modal"
          description="This modal has custom styling"
          className="bg-purple-50"
        />

        <Modal.Body className="bg-purple-25">
          <p>This modal demonstrates custom styling capabilities.</p>
          <p>You can override the default styles using className props.</p>
        </Modal.Body>

        <div className="bg-purple-50 flex justify-center">
          <button
            onClick={() => setOpen(false)}
            className="bg-purple-500 hover:bg-purple-600 rounded px-6 py-2 text-white"
          >
            Got it!
          </button>
        </div>
      </Modal>
    </>
  )
}

const MultipleModalsExample = () => {
  const [modal1Open, setModal1Open] = useState(false)
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <>
      <div className="flex gap-4">
        <button onClick={() => setModal1Open(true)}>Open First Modal</button>
        <button onClick={() => setModal2Open(true)}>Open Second Modal</button>
      </div>

      <Modal open={modal1Open} onOpenChange={setModal1Open} size="md">
        <Modal.Header title="First Modal" />
        <Modal.Body>
          <p>This is the first modal.</p>
          <button
            onClick={() => setModal2Open(true)}
            className="bg-blue-500 hover:bg-blue-600 mt-4 rounded px-4 py-2 text-white"
          >
            Open Second Modal
          </button>
        </Modal.Body>
        <div>
          <button
            onClick={() => setModal1Open(false)}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400 rounded px-4 py-2"
          >
            Close
          </button>
        </div>
      </Modal>

      <Modal open={modal2Open} onOpenChange={setModal2Open} size="sm">
        <Modal.Header title="Second Modal" />
        <Modal.Body>
          <p>This is the second modal. You can have multiple modals open.</p>
        </Modal.Body>
        <div>
          <button
            onClick={() => setModal2Open(false)}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400 rounded px-4 py-2"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  )
}

const ConfirmationModalExample = () => {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    alert('Action confirmed!')
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-red-500 hover:bg-red-600 text-white"
      >
        Delete Item
      </button>

      <Modal open={open} onOpenChange={setOpen} size="sm">
        <Modal.Header
          title="Confirm Deletion"
          description="This action cannot be undone"
          showCloseButton={false}
        />

        <Modal.Body>
          <p>
            Are you sure you want to delete this item? This action is permanent
            and cannot be reversed.
          </p>
        </Modal.Body>

        <div className="flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400 mr-2 rounded px-4 py-2"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="bg-red-500 hover:bg-red-600 rounded px-4 py-2 text-white"
          >
            Delete
          </button>
        </div>
      </Modal>
    </>
  )
}

const FullScreenModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white"
      >
        Open Full Screen Modal
      </button>

      <Modal open={open} onOpenChange={setOpen} fullScreen>
        <Modal.Header
          title="Full Screen Modal"
          description="This modal takes up the entire screen"
        />

        <Modal.Body>
          <div className="space-y-4">
            <p>This is a full screen modal that takes up the entire viewport.</p>
            <p>
              Perfect for complex forms, detailed content, or immersive
              experiences.
            </p>
            <div className="bg-gray-100 rounded p-4">
              <h4 className="font-medium">Full Screen Features</h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• No border radius for edge-to-edge appearance</li>
                <li>• Full viewport width and height</li>
                <li>• No padding on container for maximum space</li>
                <li>• Maintains all other modal functionality</li>
              </ul>
            </div>
          </div>
        </Modal.Body>

        <div className="p-6">
          <button
            onClick={() => setOpen(false)}
            className="bg-blue-500 hover:bg-blue-600 rounded px-4 py-2 text-white"
          >
            Close Full Screen Modal
          </button>
        </div>
      </Modal>
    </>
  )
}

const NoCloseOutsideModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-orange-500 hover:bg-orange-600 text-white"
      >
        Open Modal (No Close Outside)
      </button>

      <Modal open={open} onOpenChange={setOpen} closeOutside={false}>
        <Modal.Header
          title="Cannot Close by Clicking Outside"
          description="This modal requires explicit action to close"
        />

        <Modal.Body>
          <div className="space-y-4">
            <p>
              This modal has <code>closeOutside=&#123;false&#125;</code> which
              prevents it from closing when you click outside the modal area.
            </p>
            <p>
              This is useful for critical actions, forms with unsaved data, or
              any scenario where you want to ensure the user explicitly chooses
              to close the modal.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h4 className="font-medium text-yellow-800">Note</h4>
              <p className="mt-1 text-sm text-yellow-700">
                You can still close this modal using the close button (X) or by
                pressing the Escape key. Only clicking outside is disabled.
              </p>
            </div>
          </div>
        </Modal.Body>

        <div className="p-6">
          <button
            onClick={() => setOpen(false)}
            className="bg-orange-500 hover:bg-orange-600 rounded px-4 py-2 text-white"
          >
            Close Modal
          </button>
        </div>
      </Modal>
    </>
  )
}

export const Basic: Story = {
  render: () => <BasicExample />,
}

export const WithTriggerComponent: Story = {
  render: () => <WithTriggerExample />,
}

export const LargeModal: Story = {
  render: () => <LargeModalExample />,
}

export const CustomStyles: Story = {
  render: () => <CustomStylesExample />,
}

export const MultipleModals: Story = {
  render: () => <MultipleModalsExample />,
}

export const ConfirmationModal: Story = {
  render: () => <ConfirmationModalExample />,
}

export const FullScreenModal: Story = {
  render: () => <FullScreenModalExample />,
}

export const NoCloseOutside: Story = {
  render: () => <NoCloseOutsideModalExample />,
}
