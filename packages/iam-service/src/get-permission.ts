import * as db from '@xarples/iam-db'
import { grpc, Permission } from '@xarples/iam-proto-loader'
import { getPermissionMessage } from './utils'

export async function getPermission(
  call: grpc.ServerUnaryCall<Permission, Permission>,
  cb: grpc.sendUnaryData<Permission>
) {
  try {
    const request = call.request.toObject()
    const found = await db.permission.findUnique({
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

    const message = getPermissionMessage(found)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
