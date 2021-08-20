import { Role } from '@xarples/iam-db'
import { Role as RoleMessage } from '@xarples/iam-protobuf'

export function getRoleMessage(item: Role): RoleMessage {
  const message = new RoleMessage()

  message.setId(item.id)
  message.setProjectId(item.id)
  message.setName(item.name)
  message.setDescription(item.description!)
  message.setUpdatedAt(item.updated_at.toString())
  message.setCreatedAt(item.created_at.toString())

  return message
}
