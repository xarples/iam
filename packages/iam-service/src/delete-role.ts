import * as db from '@xarples/iam-db'
import { grpc, Role } from '@xarples/iam-protobuf'
import { getRoleMessage, withAuthorization } from './utils'

export async function deleteRole(
  call: grpc.ServerUnaryCall<Role, Role>,
  cb: grpc.sendUnaryData<Role>
) {
  try {
    const request = call.request.toObject()
    const deleted = await db.role.delete({
      where: {
        id: request.id || undefined
      }
    })

    const message = getRoleMessage(deleted)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Role, Role>(deleteRole, {
  scopes: ['roles:write']
})
