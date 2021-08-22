import * as db from '@xarples/iam-db'
import { grpc, User } from '@xarples/iam-protobuf'
import { getUserMessage, withAuthorization } from './utils'

export async function createUser(
  call: grpc.ServerUnaryCall<User, User>,
  cb: grpc.sendUnaryData<User>
) {
  try {
    const request = call.request.toObject()

    const created = await db.user.upsert({
      where: {
        email: request.email
      },
      create: {
        first_name: request.firstName,
        last_name: request.lastName,
        email: request.email
      },
      update: {
        first_name: request.firstName,
        last_name: request.lastName,
        email: request.email
      }
    })

    const message = getUserMessage(created)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<User, User>(createUser, {
  scopes: ['iam.users:write']
})
