import { UserRole } from '@xarples/iam-db'
import { UserRole as UserRoleMessage } from '@xarples/iam-protobuf'

export function getUserRoleMessage(item: UserRole): UserRoleMessage {
  const message = new UserRoleMessage()

  message.setId(item.id)
  message.setUserId(item.id)
  message.setRoleId(item.id)
  message.setProjectId(item.id)
  message.setUpdatedAt(item.updated_at.toString())
  message.setCreatedAt(item.created_at.toString())

  return message
}
