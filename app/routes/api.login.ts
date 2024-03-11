import { faker } from '@faker-js/faker'
import { ActionFunctionArgs, json } from '@remix-run/node'

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== 'POST')
    return json({ code: '405', message: 'Method Not Allowed' })

  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })

  return json({
    token: `_ANTDMIN_${faker.string.uuid()}`,
  })
}
