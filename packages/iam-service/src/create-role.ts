import * as db from '@xarples/iam-db'
import { grpc, Role } from '@xarples/iam-protobuf'
import { getRoleMessage, withAuthorization } from './utils'

export async function createRole(
  call: grpc.ServerUnaryCall<Role, Role>,
  cb: grpc.sendUnaryData<Role>
) {
  try {
    const request = call.request.toObject()

    const created = await db.role.create({
      data: {
        project_id: request.projectId,
        name: request.name,
        description: request.description
      }
    })

    const message = getRoleMessage(created)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Role, Role>(createRole, {
  scopes: ['iam.roles:write']
})
