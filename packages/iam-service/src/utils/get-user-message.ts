import { User } from '@xarples/iam-db'
import { User as UserMessage } from '@xarples/iam-protobuf'

export function getUserMessage(user: User): UserMessage {
  const message = new UserMessage()

  message.setId(user.id)
  message.setFirstName(user.first_name)
  message.setLastName(user.last_name)
  message.setEmail(user.email)
  message.setCreatedAt(user.created_at.toString())
  message.setUpdatedAt(user.updated_at.toString())

  return message
}
