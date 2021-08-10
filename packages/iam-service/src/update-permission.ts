import * as db from '@xarples/iam-db'
import { grpc, Permission } from '@xarples/iam-proto-loader'
import { getPermissionMessage } from './utils'

export async function updatePermission(
  call: grpc.ServerUnaryCall<Permission, Permission>,
  cb: grpc.sendUnaryData<Permission>
) {
  try {
    const request = call.request.toObject()

    const updated = await db.permission.update({
      where: {
        id: request.id || undefined
      },
      data: {
        name: request.name
      }
    })

    const message = getPermissionMessage(updated)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
