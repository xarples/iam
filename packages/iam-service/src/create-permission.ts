import * as db from '@xarples/iam-db'
import { grpc, Permission } from '@xarples/iam-proto-loader'
import { getPermissionMessage } from './utils'

export async function createPermission(
  call: grpc.ServerUnaryCall<Permission, Permission>,
  cb: grpc.sendUnaryData<Permission>
) {
  try {
    const request = call.request.toObject()

    const created = await db.permission.create({
      data: {
        client_id: request.clientId,
        name: request.name,
        description: request.description
      }
    })

    const message = getPermissionMessage(created)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
