import * as db from '@xarples/iam-db'
import { grpc, Project } from '@xarples/iam-protobuf'
import { getProjectMessage, withAuthorization } from './utils'

export async function deleteProject(
  call: grpc.ServerUnaryCall<Project, Project>,
  cb: grpc.sendUnaryData<Project>
) {
  try {
    const request = call.request.toObject()
    const deleted = await db.project.delete({
      where: {
        id: request.id || undefined
      }
    })

    const message = getProjectMessage(deleted)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Project, Project>(deleteProject, {
  scopes: ['projects:write']
})
