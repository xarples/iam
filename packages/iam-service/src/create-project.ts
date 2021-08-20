import * as db from '@xarples/iam-db'
import { grpc, Project } from '@xarples/iam-protobuf'
import { getProjectMessage, withAuthorization } from './utils'

export async function createProject(
  call: grpc.ServerUnaryCall<Project, Project>,
  cb: grpc.sendUnaryData<Project>
) {
  try {
    const request = call.request.toObject()

    const created = await db.project.create({
      data: {
        user_id: request.userId,
        name: request.name,
        description: request.description
      }
    })

    const message = getProjectMessage(created)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Project, Project>(createProject, {
  scopes: ['projects:write']
})
