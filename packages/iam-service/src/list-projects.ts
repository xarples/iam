import * as db from '@xarples/iam-db'
import { grpc, Project, ProjectList } from '@xarples/iam-protobuf'
import { getProjectMessage, withAuthorization } from './utils'

export async function listProjects(
  _: grpc.ServerUnaryCall<Project, ProjectList>,
  cb: grpc.sendUnaryData<ProjectList>
) {
  try {
    const list = await db.project.findMany()
    const message = new ProjectList()

    message.setProjectList(list.map(getProjectMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Project, ProjectList>(listProjects, {
  scopes: ['projects:read']
})
