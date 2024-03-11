import { faker } from '@faker-js/faker'
import { ActionFunctionArgs, json } from '@remix-run/node'
import { cors } from 'remix-utils/cors'

export const action = async ({ request }: ActionFunctionArgs) => {
  return await cors(
    request,
    json({ token: '_ANTDMIN_' + faker.string.uuid() }, 200)
  )
}
