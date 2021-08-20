import { UserProject } from '@xarples/iam-db'
import { UserProject as UserProjectMessage } from '@xarples/iam-protobuf'

export function getUserProjectMessage(item: UserProject): UserProjectMessage {
  const message = new UserProjectMessage()

  message.setId(item.id)
  message.setUserId(item.id)
  message.setProjectId(item.id)
  message.setUpdatedAt(item.updated_at.toString())
  message.setCreatedAt(item.created_at.toString())

  return message
}
