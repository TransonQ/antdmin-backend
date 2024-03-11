import { faker } from '@faker-js/faker'
import { ActionFunctionArgs, json } from '@remix-run/node'
import { cors } from 'remix-utils/cors'

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== 'POST')
    return await cors(
      request,
      json({ code: '405', message: 'Method Not Allowed' })
    )

  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })

  return await cors(
    request,
    json({
      token: `_ANTDMIN_${faker.string.uuid()}`,
    })
  )
}
