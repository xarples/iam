import * as db from '@xarples/iam-db'
import { grpc, User } from '@xarples/iam-protobuf'
import { getUserMessage, withAuthorization } from './utils'

export async function getUser(
  call: grpc.ServerUnaryCall<User, User>,
  cb: grpc.sendUnaryData<User>
) {
  try {
    const request = call.request.toObject()
    const found = await db.user.findUnique({
      where: {
        id: request.id || undefined
      }
    })

    if (!found) {
      cb({
        code: grpc.status.NOT_FOUND
      })

      return
    }

    const message = getUserMessage(found)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<User, User>(getUser, {
  scopes: ['iam.users:read']
})
