import { ColumnSchema } from './DataTable.props'

const getKeyFromDataObject = (
  data: { [key: string]: any }, // eslint-disable-line @typescript-eslint/no-explicit-any
  index: number,
  uniqueKey?: string,
): string => {
  if (typeof uniqueKey === 'string') return JSON.stringify(data?.[uniqueKey])
  if (data?.id) return String(data.id)
  if (data?.uuid) return String(data.uuid)

  return String(data?.name ? `${data.name}-${index}` : index)
}

const getKeyFromColumnSchema = <T extends object>(
  columnSchema: ColumnSchema<T>,
) => columnSchema?.key ?? `${columnSchema?.dataKeys?.join('-')}`

export { getKeyFromColumnSchema, getKeyFromDataObject }
