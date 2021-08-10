import * as db from '@xarples/iam-db'
import { grpc, Permission, PermissionList } from '@xarples/iam-proto-loader'
import { getPermissionMessage } from './utils'

export async function listPermissions(
  _: grpc.ServerUnaryCall<Permission, PermissionList>,
  cb: grpc.sendUnaryData<PermissionList>
) {
  try {
    // const request = call.request.toObject()
    const list = await db.permission.findMany()
    const message = new PermissionList()

    message.setPermissionList(list.map(getPermissionMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
