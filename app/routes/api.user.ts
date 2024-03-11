import { faker } from '@faker-js/faker'
import { LoaderFunctionArgs, json } from '@remix-run/node'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const token = request.headers.get('Authorization')

  if (!token?.includes('_ANTDMIN_')) {
    return json(
      { code: '401', message: 'Unauthorized' },
      {
        status: 401,
      }
    )
  }

  return json({
    id: faker.string.uuid(),
    name: faker.internet.userName(),
  })
}
