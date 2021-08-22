import * as db from '@xarples/iam-db'
import { grpc, Role, RoleList } from '@xarples/iam-protobuf'
import { getRoleMessage, withAuthorization } from './utils'

export async function listRoles(
  _: grpc.ServerUnaryCall<Role, RoleList>,
  cb: grpc.sendUnaryData<RoleList>
) {
  try {
    const list = await db.role.findMany()
    const message = new RoleList()

    message.setRoleList(list.map(getRoleMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Role, RoleList>(listRoles, {
  scopes: ['iam.roles:read']
})
