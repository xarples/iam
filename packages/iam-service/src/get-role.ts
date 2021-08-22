import * as db from '@xarples/iam-db'
import { grpc, Role } from '@xarples/iam-protobuf'
import { getRoleMessage, withAuthorization } from './utils'

export async function getRole(
  call: grpc.ServerUnaryCall<Role, Role>,
  cb: grpc.sendUnaryData<Role>
) {
  try {
    const request = call.request.toObject()
    const found = await db.role.findUnique({
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

    const message = getRoleMessage(found)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Role, Role>(getRole, {
  scopes: ['iam.roles:read']
})
