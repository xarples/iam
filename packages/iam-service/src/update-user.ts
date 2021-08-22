import * as db from '@xarples/iam-db'
import { grpc, User } from '@xarples/iam-protobuf'
import { getUserMessage, withAuthorization } from './utils'

export async function updateUser(
  call: grpc.ServerUnaryCall<User, User>,
  cb: grpc.sendUnaryData<User>
) {
  try {
    const request = call.request.toObject()

    const updated = await db.user.update({
      where: {
        id: request.id || undefined
      },
      data: {
        first_name: request.firstName || undefined,
        last_name: request.lastName || undefined
      }
    })

    const message = getUserMessage(updated)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<User, User>(updateUser, {
  scopes: ['iam.users:write']
})
