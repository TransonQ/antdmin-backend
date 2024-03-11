import { faker } from '@faker-js/faker'
import { LoaderFunctionArgs, json } from '@remix-run/node'
import { cors } from 'remix-utils/cors'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const token = request.headers.get('Authorization')

  // if (!token?.includes('_ANTDMIN_')) {
  //   return json(
  //     { code: '401', message: 'Unauthorized' },
  //     {
  //       status: 401,
  //     }
  //   )
  // }

  return await cors(
    request,
    json({
      id: faker.string.uuid(),
      name: faker.internet.userName(),
      token,
    })
  )
}
