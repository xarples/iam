import { createClient } from '../prisma'

const client = createClient()

export const service = {
  ...client.role
}
