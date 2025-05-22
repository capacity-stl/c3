import { Icon } from '@components/Icon/Icon'
import { Icons } from '@components/Icon/Glyphs'
import { Text } from '@components/Text/Text'
import { ColumnSchema } from './DataTable.props'

const TicketCellSlug = ({ slug, uuid }: { slug: string; uuid: string }) => {
  return (
    <div className="p-3">
      <a className="whitespace-nowrap text-earth-300" href={uuid}>
        {slug}
      </a>
    </div>
  )
}

const TicketCellTitle = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="flex min-w-0 max-w-[400px] gap-2 whitespace-nowrap p-3">
      <Text type="body" className="flex-none">
        {title}
      </Text>
      <Text
        type="body"
        color="meteor-300"
        className="flex-auto truncate whitespace-nowrap"
      >
        <span
          dangerouslySetInnerHTML={{
            __html: description?.replace(/<.*?>/g, ''),
          }}
        />
      </Text>
    </div>
  )
}

const TicketCellStatus = ({
  status,
}: {
  status: { statusTypeId: number; name: string }
}) => {
  const statusTypeIdToColorMapping = {
    1: { text: 'mars-300', bg: 'mars-100' },
    2: { text: 'sun-300', bg: 'sun-100' },
    3: { text: 'neptune-300', bg: 'neptune-100' },
  } as { [key: string]: { text: string; bg: string } }

  const { text, bg } = statusTypeIdToColorMapping[String(status.statusTypeId)]

  return (
    <div className="flex items-center justify-start p-3">
      <div
        className={`h-6 whitespace-nowrap rounded-full bg-${bg} text-${text} px-3 py-1 text-xs`}
      >
        {status?.name}
      </div>
    </div>
  )
}

const TicketCellPriority = ({ priorityId }: { priorityId: number }) => {
  const priorityIdToStyleMapping = {
    1: { color: 'meteor-300', glyph: Icon.Glyph.PriorityTrivial },
    2: { color: 'earth-300', glyph: Icon.Glyph.PriorityLow },
    3: { color: 'neptune-300', glyph: Icon.Glyph.PriorityMedium },
    4: { color: 'mercury-300', glyph: Icon.Glyph.PriorityHigh },
    5: { color: 'mars-300', glyph: Icon.Glyph.Alert },
  } as { [key: string]: { color: string; glyph: keyof typeof Icons } }

  const { color, glyph } = priorityIdToStyleMapping[String(priorityId)]

  return (
    <div className="p-3">
      <Icon color={color} icon={glyph} />
    </div>
  )
}

const TicketCellAssignee = ({
  assignee,
}: {
  assignee: {
    uuid: string
    firstName: string | null
    lastName: string | null
    avatarUrl: string | null
  } | null
}) => {
  return assignee?.uuid === null ? (
    <div className="p-3">
      <Text color="meteor-300" type="body">
        --
      </Text>
    </div>
  ) : (
    <div className="flex gap-2 whitespace-nowrap p-3">
      <img
        className="w-6 flex-none rounded-full"
        src={assignee?.avatarUrl ?? ''}
      />
      <Text type="body">
        {assignee?.firstName} {assignee?.lastName}
      </Text>
    </div>
  )
}

const TicketCellDate = ({ dateString }: { dateString: string | null }) => {
  if (!dateString)
    return (
      <div className="p-3">
        <Text color="meteor-300" type="body">
          --
        </Text>
      </div>
    )

  const date = new Date(dateString)

  return (
    <div className="p-3">
      <Text type="body">Apr {date.getDate()}</Text>
    </div>
  )
}

const queueExampleColumns = [
  {
    header: 'Slug',
    dataKeys: ['slug', 'uuid'],
    component: TicketCellSlug,
  },
  {
    header: 'Title / Message',
    dataKeys: ['title', 'description'],
    component: TicketCellTitle,
  },
  {
    header: 'Reporter',
    dataKeys: ['reporter'],
    component: ({ reporter }: { reporter: { email: string } }) => {
      return (
        <div className="p-3">
          <Text type="body">{reporter?.email}</Text>
        </div>
      )
    },
  },
  {
    header: 'Created',
    dataKeys: ['createdAt'],
    keyPropMapping: { createdAt: 'dateString' },
    component: TicketCellDate,
  },
  {
    header: 'Project',
    dataKeys: ['projectName'],
    textType: 'body-small',
  },
  {
    header: 'Status',
    dataKeys: ['status'],
    component: TicketCellStatus,
  },
  {
    header: 'Priority',
    dataKeys: ['priorityId'],
    component: TicketCellPriority,
  },
  {
    header: 'Assignee',
    dataKeys: ['assignee'],
    component: TicketCellAssignee,
  },
  {
    header: 'Due Date',
    dataKeys: ['dueDate'],
    keyPropMapping: { dueDate: 'dateString' },
    component: TicketCellDate,
  },
  {
    header: 'SLA',
    dataKeys: [],
    placeholder: '--',
  },
  {
    header: null,
    dataKeys: [],
  },
] as Array<ColumnSchema>

export { queueExampleColumns }
