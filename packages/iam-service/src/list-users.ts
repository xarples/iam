import * as db from '@xarples/iam-db'
import { grpc, User, UserList } from '@xarples/iam-protobuf'
import { getUserMessage, withAuthorization } from './utils'

export async function listUsers(
  _: grpc.ServerUnaryCall<User, UserList>,
  cb: grpc.sendUnaryData<UserList>
) {
  try {
    const list = await db.user.findMany()
    const message = new UserList()

    message.setUserList(list.map(getUserMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<User, UserList>(listUsers, {
  scopes: ['iam.users:read']
})
