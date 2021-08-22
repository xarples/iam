import * as db from '@xarples/iam-db'
import { grpc, Project } from '@xarples/iam-protobuf'
import { getProjectMessage, withAuthorization } from './utils'

export async function updateProject(
  call: grpc.ServerUnaryCall<Project, Project>,
  cb: grpc.sendUnaryData<Project>
) {
  try {
    const request = call.request.toObject()

    const updated = await db.project.update({
      where: {
        id: request.id || undefined
      },
      data: {
        name: request.name
      }
    })

    const message = getProjectMessage(updated)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Project, Project>(updateProject, {
  scopes: ['iam.projects:write']
})
