import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { ChatBubble } from './ChatBubble'

const meta = {
  title: 'Data Display/Chat Bubble',
  component: ChatBubble,
  parameters: {
    docs: {
      description: {
        component:
          'A chat bubble component for displaying sent and received messages with user avatars.',
      },
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    onThumbUpClick: undefined,
    onThumbDownClick: undefined,
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(ChatBubble.Type),
      description: 'The type of message (sent or received)',
      defaultValue: ChatBubble.Type.Sent,
    },
    message: {
      control: 'text',
      description: 'The message text content',
    },
    userName: {
      control: 'text',
      description: 'The name of the user',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state with animated dots',
    },
    avatarSrc: {
      control: 'text',
      description: 'Avatar image source URL',
    },
    avatarInitials: {
      control: 'text',
      description: 'Avatar fallback initials',
    },
    avatarBgColor: {
      control: 'select',
      options: [
        'earth-300',
        'sun-300',
        'mars-300',
        'meteor-300',
        'neptune-300',
        'nova-300',
        'mercury-300',
        'aurora-300',
      ],
      description: 'Avatar background color',
    },
    topLabel: {
      control: 'text',
      description:
        'Optional label shown above the user name (e.g., role or title)',
    },
    bottomLabel: {
      control: 'text',
      description:
        'Optional label shown below the message (e.g., timestamp or status)',
    },
    onThumbUpClick: {
      description: 'Callback function when thumbs up button is clicked',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    onThumbDownClick: {
      description: 'Callback function when thumbs down button is clicked',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta<typeof ChatBubble>

export default meta
type Story = StoryObj<typeof meta>

export const SentShort: Story = {
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'Full name',
    message: 'Short comment!',
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    avatarInitials: 'FN',
    testId: 'chat-bubble-sent-short',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('ChatBubble is rendered', async () => {
      const chatBubble = canvas.getByTestId('chat-bubble-sent-short')
      await expect(chatBubble).toBeInTheDocument()
    })

    await step('Message content is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-sent-short-content')
      await expect(content).toHaveTextContent('Short comment!')
    })

    await step('User name is displayed', async () => {
      await expect(canvas.getByText('Full name')).toBeInTheDocument()
    })

    await step('Avatar is rendered', async () => {
      const avatar = canvas.getByTestId('chat-bubble-sent-short-avatar')
      await expect(avatar).toBeInTheDocument()
    })
  },
}

export const SentLong: Story = {
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'Full name',
    message:
      'Long comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    avatarInitials: 'FN',
    testId: 'chat-bubble-sent-long',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Long message content is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-sent-long-content')
      await expect(content).toHaveTextContent(
        'Long comment. Lorem ipsum dolor sit amet',
      )
    })
  },
}

export const SentLoading: Story = {
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'Full name',
    loading: true,
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    avatarInitials: 'FN',
    testId: 'chat-bubble-sent-loading',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Loading dots are displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-sent-loading-content')
      await expect(content).toBeInTheDocument()
      // The loading dots should be present
      const dots = content.querySelectorAll('span')
      expect(dots.length).toBe(3)
    })
  },
}

export const ReceivedShort: Story = {
  args: {
    type: ChatBubble.Type.Received,
    userName: 'Full name',
    message: 'Short comment!',
    avatarSrc: 'https://i.pravatar.cc/150?img=45',
    avatarInitials: 'FN',
    avatarBgColor: 'aurora-300',
    testId: 'chat-bubble-received-short',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('ChatBubble is rendered with received styling', async () => {
      const chatBubble = canvas.getByTestId('chat-bubble-received-short')
      await expect(chatBubble).toBeInTheDocument()
    })

    await step('Message content is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-received-short-content')
      await expect(content).toHaveTextContent('Short comment!')
    })
  },
}

export const ReceivedLong: Story = {
  args: {
    type: ChatBubble.Type.Received,
    userName: 'Full name',
    message:
      'Long comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    avatarSrc: 'https://i.pravatar.cc/150?img=45',
    avatarInitials: 'FN',
    avatarBgColor: 'aurora-300',
    testId: 'chat-bubble-received-long',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Long message wraps correctly', async () => {
      const content = canvas.getByTestId('chat-bubble-received-long-content')
      await expect(content).toHaveTextContent(
        'Long comment. Lorem ipsum dolor sit amet',
      )
    })
  },
}

export const ReceivedLoading: Story = {
  args: {
    type: ChatBubble.Type.Received,
    userName: 'Full name',
    loading: true,
    avatarSrc: 'https://i.pravatar.cc/150?img=45',
    avatarInitials: 'FN',
    avatarBgColor: 'aurora-300',
    testId: 'chat-bubble-received-loading',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Loading dots are displayed for received message', async () => {
      const content = canvas.getByTestId('chat-bubble-received-loading-content')
      await expect(content).toBeInTheDocument()
      const dots = content.querySelectorAll('span')
      expect(dots.length).toBe(3)
    })
  },
}

export const Conversation: Story = {
  args: {
    userName: 'Conversation Example',
  },
  render: () => (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <ChatBubble
        type={ChatBubble.Type.Sent}
        userName="John Doe"
        message="Hey! How are you doing?"
        avatarSrc="https://i.pravatar.cc/150?img=12"
        avatarInitials="JD"
      />
      <ChatBubble
        type={ChatBubble.Type.Received}
        userName="Jane Smith"
        message="I'm doing great! Thanks for asking."
        avatarSrc="https://i.pravatar.cc/150?img=45"
        avatarInitials="JS"
        avatarBgColor="aurora-300"
      />
      <ChatBubble
        type={ChatBubble.Type.Sent}
        userName="John Doe"
        message="That's wonderful to hear! Want to grab coffee later?"
        avatarSrc="https://i.pravatar.cc/150?img=12"
        avatarInitials="JD"
      />
      <ChatBubble
        type={ChatBubble.Type.Received}
        userName="Jane Smith"
        loading
        avatarSrc="https://i.pravatar.cc/150?img=45"
        avatarInitials="JS"
        avatarBgColor="aurora-300"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a conversation with multiple chat bubbles.',
      },
    },
  },
}

export const WithoutAvatar: Story = {
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'John Doe',
    message: 'Message without avatar image',
    testId: 'chat-bubble-no-avatar',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step(
      'Avatar is not rendered when no avatar props provided',
      async () => {
        const avatar = canvas.queryByTestId('chat-bubble-no-avatar-avatar')
        await expect(avatar).not.toBeInTheDocument()
      },
    )

    await step('Message is still displayed without avatar', async () => {
      const content = canvas.getByTestId('chat-bubble-no-avatar-content')
      await expect(content).toHaveTextContent('Message without avatar image')
    })

    await step('User name is displayed', async () => {
      await expect(canvas.getByText('John Doe')).toBeInTheDocument()
    })
  },
}

export const WithTopLabel: Story = {
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'John Doe',
    topLabel: '1:52 PM',
    message: 'Here is an update on the project status.',
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    avatarInitials: 'JD',
    testId: 'chat-bubble-top-label',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Top label is displayed', async () => {
      await expect(canvas.getByText('1:52 PM')).toBeInTheDocument()
    })

    await step('User name is displayed', async () => {
      await expect(canvas.getByText('John Doe')).toBeInTheDocument()
    })

    await step('Message is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-top-label-content')
      await expect(content).toHaveTextContent(
        'Here is an update on the project status.',
      )
    })
  },
}

export const WithBottomLabel: Story = {
  args: {
    type: ChatBubble.Type.Received,
    userName: 'Jane Smith',
    bottomLabel: 'Delivered',
    message: 'Thanks for the update!',
    avatarSrc: 'https://i.pravatar.cc/150?img=45',
    avatarInitials: 'JS',
    avatarBgColor: 'aurora-300',
    testId: 'chat-bubble-bottom-label',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Bottom label is displayed', async () => {
      await expect(canvas.getByText('Delivered')).toBeInTheDocument()
    })

    await step('User name is displayed', async () => {
      await expect(canvas.getByText('Jane Smith')).toBeInTheDocument()
    })

    await step('Message is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-bottom-label-content')
      await expect(content).toHaveTextContent('Thanks for the update!')
    })
  },
}

export const WithBothLabels: Story = {
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'Alex Johnson',
    topLabel: '1:53 PM',
    bottomLabel: 'Delivered',
    message:
      'The new feature will be released next week. Please review the documentation.',
    avatarSrc: 'https://i.pravatar.cc/150?img=33',
    avatarInitials: 'AJ',
    avatarBgColor: 'neptune-300',
    testId: 'chat-bubble-both-labels',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Top label is displayed', async () => {
      await expect(canvas.getByText('1:53 PM')).toBeInTheDocument()
    })

    await step('Bottom label is displayed', async () => {
      await expect(canvas.getByText('Delivered')).toBeInTheDocument()
    })

    await step('User name is displayed', async () => {
      await expect(canvas.getByText('Alex Johnson')).toBeInTheDocument()
    })

    await step('Message is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-both-labels-content')
      await expect(content).toHaveTextContent(
        'The new feature will be released next week',
      )
    })
  },
}

export const ConversationWithLabels: Story = {
  args: {
    userName: 'Conversation with Labels',
  },
  render: () => (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <ChatBubble
        type={ChatBubble.Type.Sent}
        userName="Sarah Wilson"
        topLabel="1:52 PM"
        message="Can we schedule a code review for tomorrow?"
        bottomLabel="Just now"
        avatarSrc="https://i.pravatar.cc/150?img=20"
        avatarInitials="SW"
        avatarBgColor="earth-300"
      />
      <ChatBubble
        type={ChatBubble.Type.Received}
        userName="Mike Chen"
        topLabel="1:54 PM"
        message="Sure! How about 2 PM?"
        bottomLabel="Delivered"
        avatarSrc="https://i.pravatar.cc/150?img=15"
        avatarInitials="MC"
        avatarBgColor="mars-300"
      />
      <ChatBubble
        type={ChatBubble.Type.Sent}
        userName="Sarah Wilson"
        message="Perfect! See you then."
        bottomLabel="Sent 30 seconds ago"
        avatarSrc="https://i.pravatar.cc/150?img=20"
        avatarInitials="SW"
        avatarBgColor="earth-300"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Example of a conversation using top labels for roles/titles and bottom labels for timestamps.',
      },
    },
  },
}

export const WithFeedbackButtons: Story = {
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'AI Assistant',
    topLabel: 'Bot',
    message:
      'Here is a detailed response to your question. The solution involves using React hooks and state management.',
    bottomLabel: '2:15 PM',
    avatarInitials: 'AI',
    avatarBgColor: 'neptune-300',
    testId: 'chat-bubble-feedback',
    onThumbUpClick: () => console.log('Thumbs up clicked!'),
    onThumbDownClick: () => console.log('Thumbs down clicked!'),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Thumb up button is rendered', async () => {
      const thumbUpButton = canvas.getByTestId('chat-bubble-feedback-thumb-up')
      await expect(thumbUpButton).toBeInTheDocument()
    })

    await step('Thumb down button is rendered', async () => {
      const thumbDownButton = canvas.getByTestId(
        'chat-bubble-feedback-thumb-down',
      )
      await expect(thumbDownButton).toBeInTheDocument()
    })

    await step('Message content is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-feedback-content')
      await expect(content).toHaveTextContent('Here is a detailed response')
    })

    await step('Top label is displayed', async () => {
      await expect(canvas.getByText('Bot')).toBeInTheDocument()
    })
  },
  parameters: {
    docs: {
      description: {
        story:
          'Chat bubble with feedback buttons for thumbs up and thumbs down actions. Useful for AI responses or help desk messages.',
      },
    },
  },
}
