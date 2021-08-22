import * as db from '@xarples/iam-db'
import { grpc, User } from '@xarples/iam-protobuf'
import { getUserMessage, withAuthorization } from './utils'

export async function deleteUser(
  call: grpc.ServerUnaryCall<User, User>,
  cb: grpc.sendUnaryData<User>
) {
  try {
    const request = call.request.toObject()
    const deleted = await db.user.delete({
      where: {
        id: request.id || undefined
      }
    })

    const message = getUserMessage(deleted)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<User, User>(deleteUser, {
  scopes: ['iam.users:write']
})
