import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import { Modal } from './Modal'
import { Button } from '@components/Button/Button'
import { Text } from '@components/Text/Text'
import { Flex } from '@components/Flex/Flex'
import { Icon } from '@components/Icon/Icon'
import { colorNames } from '../../props/color.props'

const meta: Meta<typeof Modal> = {
  title: 'Data Display/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof meta>
// Custom story type for WithIcon to accept an `icon` arg separate from Modal props
type WithIconStory = StoryObj<{
  icon: keyof typeof Icon.Glyph
  color: (typeof colorNames)[number]
}>

type SizesStory = StoryObj<{
  size: 'sm' | 'md' | 'lg' | 'xl'
  open: boolean
}>

// Custom stories with their own arg shapes
type CustomStylesStory = StoryObj<{
  showCloseButton: boolean
  title: string
  description: string
  icon: keyof typeof Icon.Glyph
  iconColor: (typeof colorNames)[number]
  showIcon: boolean
  showBorderHeader: boolean
  showBorderFooter: boolean
  closeOutside: boolean
  fullScreen: boolean
  bodyContent: string
}>

type ConfirmationModalStory = StoryObj<{
  showCloseButton: boolean
  title: string
  description: string
  icon: keyof typeof Icon.Glyph
  iconColor: (typeof colorNames)[number]
  cancelText: string
  confirmText: string
  buttonText: string
}>

type FullScreenStory = StoryObj<{ fullScreen: boolean }>
type NoCloseOutsideStory = StoryObj<{ closeOutside: boolean }>

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-96 items-center justify-center">{children}</div>
  )
}

const BasicExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <ModalContainer>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Header
          title="Modal Title"
          description="This is a basic modal example"
        />

        <Modal.Body>
          <Text type="body" color="night">
            This is the modal content. You can put any content here.
          </Text>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setOpen(false)} type="secondary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} type="primary">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalContainer>
  )
}

const WithIconExample = ({
  icon,
  color,
}: {
  icon: keyof typeof Icon.Glyph
  color: (typeof colorNames)[number]
}) => {
  const [open, setOpen] = useState(false)

  return (
    <ModalContainer>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Header
          title="Modal Title"
          description="This is a basic modal example"
          icon={icon}
          iconColor={color}
        />

        <Modal.Body>
          <Text type="body" color="night">
            This is the modal content. You can put any content here.
          </Text>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setOpen(false)} type="secondary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} type="primary">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalContainer>
  )
}

const SizesExample = ({
  size,
  open,
}: {
  size: 'sm' | 'md' | 'lg' | 'xl'
  open: boolean
}) => {
  return (
    <ModalContainer>
      <Modal open={open} size={size}>
        <Modal.Header
          title={`${size.toUpperCase()} Modal`}
          description={`This is a ${size} modal with more content`}
          showCloseButton={true}
        />

        <Modal.Body>
          <Text type="body" color="night">
            This is a {size} modal with more content space.
          </Text>
        </Modal.Body>

        <Modal.Footer>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal>
    </ModalContainer>
  )
}

const CustomStylesExample = ({
  showCloseButton,
  title,
  description,
  icon,
  iconColor,
  showBorderHeader,
  showBorderFooter,
  showIcon,
  closeOutside,
  fullScreen,
  bodyContent,
}: {
  showCloseButton: boolean
  title: string
  description: string
  icon: keyof typeof Icon.Glyph
  iconColor: (typeof colorNames)[number]
  showBorderHeader: boolean
  showBorderFooter: boolean
  showIcon: boolean
  closeOutside: boolean
  fullScreen: boolean
  bodyContent: string
}) => {
  const [open, setOpen] = useState(true)

  return (
    <ModalContainer>
      <Button
        onClick={() => setOpen(true)}
        className="bg-purple-500 hover:bg-purple-600 text-white"
      >
        Custom Styled Modal
      </Button>

      <Modal
        open={open}
        onOpenChange={setOpen}
        className="custom-modal"
        size="lg"
        closeOutside={closeOutside}
        fullScreen={fullScreen}
      >
        <Modal.Header
          title={title}
          description={description}
          className="bg-purple-50"
          showCloseButton={showCloseButton}
          icon={showIcon ? icon : undefined}
          iconColor={showIcon ? iconColor : undefined}
          showBorder={showBorderHeader}
        />

        <Modal.Body>
          <Flex direction="col" gap="2">
            <Text type="body" color="night">
              {bodyContent}
            </Text>
          </Flex>
        </Modal.Body>

        <Modal.Footer showBorder={showBorderFooter}>
          <Button onClick={() => setOpen(false)}>Got it!</Button>
        </Modal.Footer>
      </Modal>
    </ModalContainer>
  )
}

const ConfirmationModalExample = ({
  title,
  description,
  icon,
  iconColor,
  cancelText,
  confirmText,
  buttonText,
}: {
  title: string
  description: string
  icon: keyof typeof Icon.Glyph
  iconColor: (typeof colorNames)[number]
  cancelText: string
  confirmText: string
  buttonText: string
}) => {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    alert('Action confirmed!')
    setOpen(false)
  }

  return (
    <ModalContainer>
      <Button onClick={() => setOpen(true)}>{buttonText}</Button>

      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Confirmation
          title={title}
          onCancel={() => {
            console.log('Cancelled')
          }}
          onConfirm={() => {
            handleConfirm()
          }}
          cancelText={cancelText}
          confirmText={confirmText}
          description={description}
          icon={icon}
          iconColor={iconColor}
        />
      </Modal>
    </ModalContainer>
  )
}

const FullScreenModalExample = ({ fullScreen }: { fullScreen: boolean }) => {
  const [open, setOpen] = useState(false)

  return (
    <ModalContainer>
      <Button onClick={() => setOpen(true)}>Open Full Screen Modal</Button>

      <Modal open={open} onOpenChange={setOpen} fullScreen={fullScreen}>
        <Modal.Header
          title="Full Screen Modal"
          description="This modal takes up the entire screen"
        />

        <Modal.Body>
          <div className="space-y-4">
            <Text type="body" color="night">
              This is a full screen modal that takes up the entire viewport.
            </Text>
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
    </ModalContainer>
  )
}

const NoCloseOutsideModalExample = ({
  closeOutside,
}: {
  closeOutside: boolean
}) => {
  const [open, setOpen] = useState(false)

  return (
    <ModalContainer>
      <Button onClick={() => setOpen(true)}>
        Open Modal (No Close Outside)
      </Button>

      <Modal open={open} onOpenChange={setOpen} closeOutside={closeOutside}>
        <Modal.Header
          title="Cannot Close by Clicking Outside"
          description="This modal requires explicit action to close"
        />

        <Modal.Body>
          <div className="space-y-4">
            <Text type="body" color="night">
              This modal has <code>closeOutside=&#123;false&#125;</code> which
              prevents it from closing when you click outside the modal area.
            </Text>
            <Text type="body" color="night">
              This is useful for critical actions, forms with unsaved data, or
              any scenario where you want to ensure the user explicitly chooses
              to close the modal.
            </Text>
            <Text type="body" color="night">
              You can still close this modal using the close button (X) or by
              pressing the Escape key. Only clicking outside is disabled.
            </Text>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setOpen(false)}>Close Modal</Button>
        </Modal.Footer>
      </Modal>
    </ModalContainer>
  )
}

export const Basic: Story = {
  parameters: {
    controls: { include: [''] },
    docs: {
      source: {
        code: `
          <Modal open={open} onOpenChange={setOpen}>
            <Modal.Header
              title="Modal Title"
              description="This is a basic modal example"
            />
            <Modal.Body>
              <Text type="body" color="night">
                This is the modal content. You can put any content here.
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpen(false)} type="secondary">
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)} type="primary">
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        `,
      },
    },
  },
  render: (args) => <BasicExample {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Modal is initially closed', async () => {
      const modal = canvas.queryByTestId('modal-root')
      expect(modal).not.toBeInTheDocument()
    })

    await step('Open modal button is present', async () => {
      const openButton = canvas.getByText('Open Modal')
      await expect(openButton).toBeInTheDocument()
    })

    await step('Modal opens when button is clicked', async () => {
      const openButton = canvas.getByText('Open Modal')
      await userEvent.click(openButton)

      await waitFor(async () => {
        const modal = canvas.getByTestId('modal-root')
        await expect(modal).toBeInTheDocument()
      })
    })

    await step('Modal header displays correct content', async () => {
      const header = canvas.getByTestId('modal-header')
      await expect(header).toBeInTheDocument()

      const title = canvas.getByText('Modal Title')
      await expect(title).toBeInTheDocument()

      const description = canvas.getByText('This is a basic modal example')
      await expect(description).toBeInTheDocument()
    })

    await step('Modal body displays content', async () => {
      const body = canvas.getByTestId('modal-body')
      await expect(body).toBeInTheDocument()

      const bodyContent = canvas.getByText(
        'This is the modal content. You can put any content here.',
      )
      await expect(bodyContent).toBeInTheDocument()
    })

    await step('Modal footer displays buttons', async () => {
      const footer = canvas.getByTestId('modal-footer')
      await expect(footer).toBeInTheDocument()

      const cancelButton = canvas.getByText('Cancel')
      await expect(cancelButton).toBeInTheDocument()

      const confirmButton = canvas.getByText('Confirm')
      await expect(confirmButton).toBeInTheDocument()
    })

    await step('Close button is present in header', async () => {
      const closeButton = canvas.getByTestId('modal-close-button')
      await expect(closeButton).toBeInTheDocument()
    })

    await step('Modal closes when close button is clicked', async () => {
      const closeButton = canvas.getByTestId('modal-close-button')
      await userEvent.click(closeButton)

      await waitFor(() => {
        const modal = canvas.queryByTestId('modal-root')
        expect(modal).not.toBeInTheDocument()
      })
    })

    await step('Modal closes when Cancel button is clicked', async () => {
      const openButton = canvas.getByText('Open Modal')
      await userEvent.click(openButton)

      await waitFor(async () => {
        const modal = canvas.getByTestId('modal-root')
        await expect(modal).toBeInTheDocument()
      })

      const cancelButton = canvas.getByText('Cancel')
      await userEvent.click(cancelButton)

      await waitFor(() => {
        const modal = canvas.queryByTestId('modal-root')
        expect(modal).not.toBeInTheDocument()
      })
    })

    await step('Modal closes when Confirm button is clicked', async () => {
      const openButton = canvas.getByText('Open Modal')
      await userEvent.click(openButton)

      await waitFor(async () => {
        const modal = canvas.getByTestId('modal-root')
        await expect(modal).toBeInTheDocument()
      })

      const confirmButton = canvas.getByText('Confirm')
      await userEvent.click(confirmButton)

      await waitFor(() => {
        const modal = canvas.queryByTestId('modal-root')
        expect(modal).not.toBeInTheDocument()
      })
    })
  },
}

export const WithIcon: WithIconStory = {
  args: {
    icon: 'Alert',
    color: 'earth-300',
  },
  argTypes: {
    icon: { options: Object.keys(Icon.Glyph), control: { type: 'select' } },
    color: { options: colorNames, control: { type: 'select' } },
  },
  parameters: {
    controls: { include: ['icon', 'color'] },
  },
  render: (args) => <WithIconExample {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Open modal with icon', async () => {
      const openButton = canvas.getByText('Open Modal')
      await userEvent.click(openButton)

      await waitFor(async () => {
        const modal = canvas.getByTestId('modal-root')
        await expect(modal).toBeInTheDocument()
      })
    })

    await step('Modal header displays with icon', async () => {
      const header = canvas.getByTestId('modal-header')
      await expect(header).toBeInTheDocument()

      // Check for icon presence (icon component should be rendered)
      const title = canvas.getByText('Modal Title')
      await expect(title).toBeInTheDocument()
    })

    await step('Close modal', async () => {
      const closeButton = canvas.getByTestId('modal-close-button')
      await userEvent.click(closeButton)

      await waitFor(() => {
        const modal = canvas.queryByTestId('modal-root')
        expect(modal).not.toBeInTheDocument()
      })
    })
  },
}

export const Sizes: SizesStory = {
  args: {
    size: 'lg',
    open: true,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
    },
    open: { control: { type: 'boolean' } },
  },
  parameters: {
    controls: { include: ['size', 'open'] },
  },
  render: (args) => <SizesExample {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Modal renders when open is true', async () => {
      const modal = canvas.getByTestId('modal-root')
      await expect(modal).toBeInTheDocument()
    })

    await step('Modal displays correct size title', async () => {
      const title = canvas.getByText('LG Modal')
      await expect(title).toBeInTheDocument()
    })

    await step('Modal header has close button', async () => {
      const closeButton = canvas.getByTestId('modal-close-button')
      await expect(closeButton).toBeInTheDocument()
    })

    await step('Modal body contains size information', async () => {
      const bodyContent = canvas.getByText(
        'This is a lg modal with more content space.',
      )
      await expect(bodyContent).toBeInTheDocument()
    })

    await step('Modal footer has close button', async () => {
      const closeButton = canvas.getByText('Close')
      await expect(closeButton).toBeInTheDocument()
    })
  },
}

export const AllOptions: CustomStylesStory = {
  args: {
    showCloseButton: true,
    title: 'Custom Modal',
    description: 'This modal has all the options available',
    icon: 'Alert',
    iconColor: 'earth-300',
    showIcon: true,
    showBorderHeader: true,
    showBorderFooter: true,
    closeOutside: true,
    fullScreen: false,
    bodyContent:
      'This modal has all the options available. You can put any content here.',
  },
  argTypes: {
    showCloseButton: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    icon: { options: Object.keys(Icon.Glyph), control: { type: 'select' } },
    iconColor: { options: colorNames, control: { type: 'select' } },
    showIcon: { control: { type: 'boolean' } },
    showBorderHeader: { control: { type: 'boolean' } },
    showBorderFooter: { control: { type: 'boolean' } },
    closeOutside: { control: { type: 'boolean' } },
    fullScreen: { control: { type: 'boolean' } },
    bodyContent: { control: { type: 'text' } },
  },
  parameters: {
    controls: {
      include: [
        'showCloseButton',
        'title',
        'description',
        'icon',
        'iconColor',
        'showIcon',
        'showBorderHeader',
        'showBorderFooter',
        'closeOutside',
        'fullScreen',
        'bodyContent',
      ],
    },
  },
  render: (args) => <CustomStylesExample {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Custom modal is initially open', async () => {
      const modal = canvas.getByTestId('modal-root')
      await expect(modal).toBeInTheDocument()
    })

    await step(
      'Modal header displays custom title and description',
      async () => {
        const title = canvas.getByText('Custom Modal')
        await expect(title).toBeInTheDocument()

        const description = canvas.getByText(
          'This modal has all the options available',
        )
        await expect(description).toBeInTheDocument()
      },
    )

    await step('Modal body displays custom content', async () => {
      const bodyContent = canvas.getByText(
        'This modal has all the options available. You can put any content here.',
      )
      await expect(bodyContent).toBeInTheDocument()
    })

    await step('Close button is shown', async () => {
      const closeButton = canvas.getByTestId('modal-close-button')
      await expect(closeButton).toBeInTheDocument()
    })

    await step('Footer button is present', async () => {
      const footerButton = canvas.getByText('Got it!')
      await expect(footerButton).toBeInTheDocument()
    })

    await step('Modal closes when footer button is clicked', async () => {
      const footerButton = canvas.getByText('Got it!')
      await userEvent.click(footerButton)

      await waitFor(() => {
        const modal = canvas.queryByTestId('modal-root')
        expect(modal).not.toBeInTheDocument()
      })
    })

    await step('Modal reopens with custom styles', async () => {
      const openButton = canvas.getByText('Custom Styled Modal')
      await userEvent.click(openButton)

      await waitFor(async () => {
        const modal = canvas.getByTestId('modal-root')
        await expect(modal).toBeInTheDocument()
      })
    })
  },
}

export const ConfirmationModal: ConfirmationModalStory = {
  args: {
    showCloseButton: true,
    title: 'Confirm Action',
    description: 'Are you sure you want to delete this item?',
    icon: 'Alert',
    iconColor: 'earth-300',
    cancelText: 'Cancel',
    confirmText: 'Delete Item',
    buttonText: 'Delete Item',
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    icon: { options: Object.keys(Icon.Glyph), control: { type: 'select' } },
    iconColor: { options: colorNames, control: { type: 'select' } },
    cancelText: { control: { type: 'text' } },
    confirmText: { control: { type: 'text' } },
    buttonText: { control: { type: 'text' } },
  },
  parameters: {
    controls: {
      include: [
        'title',
        'description',
        'icon',
        'iconColor',
        'cancelText',
        'confirmText',
        'buttonText',
      ],
    },
  },
  render: (args) => <ConfirmationModalExample {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Confirmation modal is initially closed', async () => {
      const modal = canvas.queryByTestId('modal-root')
      expect(modal).not.toBeInTheDocument()
    })

    await step('Open button is present', async () => {
      const openButton = canvas.getByText('Delete Item')
      await expect(openButton).toBeInTheDocument()
    })

    await step('Modal opens when button is clicked', async () => {
      const openButton = canvas.getByText('Delete Item')
      await userEvent.click(openButton)

      await waitFor(async () => {
        const modal = canvas.getByTestId('modal-root')
        await expect(modal).toBeInTheDocument()
      })
    })

    await step('Confirmation modal displays correct content', async () => {
      const alert = canvas.getByTestId('modal-alert')
      await expect(alert).toBeInTheDocument()

      const title = canvas.getByText('Confirm Action')
      await expect(title).toBeInTheDocument()

      const description = canvas.getByText(
        'Are you sure you want to delete this item?',
      )
      await expect(description).toBeInTheDocument()
    })

    await step('Cancel and confirm buttons are present', async () => {
      const cancelButton = canvas.getByTestId('modal-alert-cancel')
      await expect(cancelButton).toBeInTheDocument()
      await expect(cancelButton).toHaveTextContent('Cancel')

      const confirmButton = canvas.getByTestId('modal-alert-confirm')
      await expect(confirmButton).toBeInTheDocument()
      await expect(confirmButton).toHaveTextContent('Delete Item')
    })

    await step('Close button is present', async () => {
      const closeButton = canvas.getByTestId('modal-close-button')
      await expect(closeButton).toBeInTheDocument()
    })

    await step('Modal closes when cancel button is clicked', async () => {
      const cancelButton = canvas.getByTestId('modal-alert-cancel')
      await userEvent.click(cancelButton)

      await waitFor(() => {
        const modal = canvas.queryByTestId('modal-root')
        expect(modal).not.toBeInTheDocument()
      })
    })

    await step('Modal opens again', async () => {
      const openButton = canvas.getByText('Delete Item')
      await userEvent.click(openButton)

      await waitFor(async () => {
        const modal = canvas.getByTestId('modal-root')
        await expect(modal).toBeInTheDocument()
      })
    })

    await step(
      'Mock alert is called when confirm button is clicked',
      async () => {
        // Mock window.alert
        const alertMock = jest
          .spyOn(window, 'alert')
          .mockImplementation(() => {})

        const confirmButton = canvas.getByTestId('modal-alert-confirm')
        await userEvent.click(confirmButton)

        await waitFor(() => {
          expect(alertMock).toHaveBeenCalledWith('Action confirmed!')
        })

        alertMock.mockRestore()

        await waitFor(() => {
          const modal = canvas.queryByTestId('modal-root')
          expect(modal).not.toBeInTheDocument()
        })
      },
    )
  },
}

export const FullScreenModal: FullScreenStory = {
  args: {
    fullScreen: true,
  },
  argTypes: {
    fullScreen: { control: { type: 'boolean' } },
  },
  parameters: {
    controls: { include: ['fullScreen'] },
  },
  render: (args) => <FullScreenModalExample {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Full screen modal is initially closed', async () => {
      const modal = canvas.queryByTestId('modal-root')
      expect(modal).not.toBeInTheDocument()
    })

    await step('Open full screen modal button is present', async () => {
      const openButton = canvas.getByText('Open Full Screen Modal')
      await expect(openButton).toBeInTheDocument()
    })

    await step('Modal opens in full screen mode', async () => {
      const openButton = canvas.getByText('Open Full Screen Modal')
      await userEvent.click(openButton)

      await waitFor(async () => {
        const modal = canvas.getByTestId('modal-root')
        await expect(modal).toBeInTheDocument()
      })
    })

    await step('Full screen modal displays correct content', async () => {
      const title = canvas.getByText('Full Screen Modal')
      await expect(title).toBeInTheDocument()

      const description = canvas.getByText(
        'This modal takes up the entire screen',
      )
      await expect(description).toBeInTheDocument()

      const bodyText = canvas.getByText(
        'This is a full screen modal that takes up the entire viewport.',
      )
      await expect(bodyText).toBeInTheDocument()
    })

    await step('Close button inside modal works', async () => {
      const closeButton = canvas.getByText('Close Full Screen Modal')
      await userEvent.click(closeButton)

      await waitFor(() => {
        const modal = canvas.queryByTestId('modal-root')
        expect(modal).not.toBeInTheDocument()
      })
    })
  },
}

export const NoCloseOutside: NoCloseOutsideStory = {
  args: {
    closeOutside: false,
  },
  argTypes: {
    closeOutside: { control: { type: 'boolean' } },
  },
  parameters: {
    controls: { include: ['closeOutside'] },
  },
  render: (args) => <NoCloseOutsideModalExample {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('NoCloseOutside modal is initially closed', async () => {
      const modal = canvas.queryByTestId('modal-root')
      expect(modal).not.toBeInTheDocument()
    })

    await step('Open button is present', async () => {
      const openButton = canvas.getByText('Open Modal (No Close Outside)')
      await expect(openButton).toBeInTheDocument()
    })

    await step('Modal opens when button is clicked', async () => {
      const openButton = canvas.getByText('Open Modal (No Close Outside)')
      await userEvent.click(openButton)

      await waitFor(async () => {
        const modal = canvas.getByTestId('modal-root')
        await expect(modal).toBeInTheDocument()
      })
    })

    await step(
      'Modal displays correct content about closeOutside',
      async () => {
        const title = canvas.getByText('Cannot Close by Clicking Outside')
        await expect(title).toBeInTheDocument()

        const description = canvas.getByText(
          'This modal requires explicit action to close',
        )
        await expect(description).toBeInTheDocument()
      },
    )

    await step('Modal has close button in footer', async () => {
      const closeButton = canvas.getByText('Close Modal')
      await expect(closeButton).toBeInTheDocument()
    })

    await step('Modal closes when footer close button is clicked', async () => {
      const closeButton = canvas.getByText('Close Modal')
      await userEvent.click(closeButton)

      await waitFor(() => {
        const modal = canvas.queryByTestId('modal-root')
        expect(modal).not.toBeInTheDocument()
      })
    })

    await step('Modal opens again and closes via X button', async () => {
      const openButton = canvas.getByText('Open Modal (No Close Outside)')
      await userEvent.click(openButton)

      await waitFor(async () => {
        const modal = canvas.getByTestId('modal-root')
        await expect(modal).toBeInTheDocument()
      })

      const closeXButton = canvas.getByTestId('modal-close-button')
      await userEvent.click(closeXButton)

      await waitFor(() => {
        const modal = canvas.queryByTestId('modal-root')
        expect(modal).not.toBeInTheDocument()
      })
    })
  },
}
