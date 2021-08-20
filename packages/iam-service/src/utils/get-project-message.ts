import { Project } from '@xarples/iam-db'
import { Project as ProjectMessage } from '@xarples/iam-protobuf'

export function getProjectMessage(item: Project): ProjectMessage {
  const message = new ProjectMessage()

  message.setId(item.id)
  message.setUserId(item.id)
  message.setName(item.name)
  message.setDescription(item.description!)
  message.setUpdatedAt(item.updated_at.toString())
  message.setCreatedAt(item.created_at.toString())

  return message
}
