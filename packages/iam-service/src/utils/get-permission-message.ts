import { Permission } from '@xarples/iam-db'
import { Permission as PermissionMessage } from '@xarples/iam-proto-loader'

export function getPermissionMessage(item: Permission): PermissionMessage {
  const message = new PermissionMessage()

  message.setId(item.id)
  message.setName(item.name)
  message.setDescription(item.description!)
  message.setUpdatedAt(item.updated_at.toString())
  message.setCreatedAt(item.created_at.toString())

  return message
}
