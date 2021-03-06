import * as db from '@xarples/iam-db'
import { grpc, Permission } from '@xarples/iam-protobuf'
import { getPermissionMessage, withAuthorization } from './utils'

export async function deletePermission(
  call: grpc.ServerUnaryCall<Permission, Permission>,
  cb: grpc.sendUnaryData<Permission>
) {
  try {
    const request = call.request.toObject()
    const deleted = await db.permission.delete({
      where: {
        id: request.id || undefined
      }
    })

    const message = getPermissionMessage(deleted)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Permission, Permission>(deletePermission, {
  scopes: ['iam.permissions:write']
})
