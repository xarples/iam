import * as db from '@xarples/iam-db'
import { grpc, Project } from '@xarples/iam-protobuf'
import { getProjectMessage, withAuthorization } from './utils'

export async function getProject(
  call: grpc.ServerUnaryCall<Project, Project>,
  cb: grpc.sendUnaryData<Project>
) {
  try {
    const request = call.request.toObject()
    const found = await db.project.findUnique({
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

    const message = getProjectMessage(found)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Project, Project>(getProject, {
  scopes: ['projects:read']
})
