import * as db from '@xarples/iam-db'
import { grpc, Role } from '@xarples/iam-protobuf'
import { getRoleMessage, withAuthorization } from './utils'

export async function updateRole(
  call: grpc.ServerUnaryCall<Role, Role>,
  cb: grpc.sendUnaryData<Role>
) {
  try {
    const request = call.request.toObject()

    const updated = await db.role.update({
      where: {
        id: request.id || undefined
      },
      data: {
        name: request.name
      }
    })

    const message = getRoleMessage(updated)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Role, Role>(updateRole, {
  scopes: ['roles:write']
})
