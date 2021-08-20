import { Permission } from '@xarples/iam-db'
import { Permission as PermissionMessage } from '@xarples/iam-protobuf'

export function getPermissionMessage(item: Permission): PermissionMessage {
  const message = new PermissionMessage()

  message.setId(item.id)
  message.setRoleId(item.id)
  message.setProjectId(item.id)
  message.setName(item.name)
  message.setDescription(item.description!)
  message.setUpdatedAt(item.updated_at.toString())
  message.setCreatedAt(item.created_at.toString())

  return message
}
