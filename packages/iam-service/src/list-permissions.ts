import * as db from '@xarples/iam-db'
import { grpc, Permission, PermissionList } from '@xarples/iam-protobuf'
import { getPermissionMessage, withAuthorization } from './utils'

export async function listPermissions(
  _: grpc.ServerUnaryCall<Permission, PermissionList>,
  cb: grpc.sendUnaryData<PermissionList>
) {
  try {
    const list = await db.permission.findMany()
    const message = new PermissionList()

    message.setPermissionList(list.map(getPermissionMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Permission, PermissionList>(listPermissions, {
  scopes: ['permissions:read']
})
