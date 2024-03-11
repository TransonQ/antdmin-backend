import { faker } from '@faker-js/faker'
import { LoaderFunctionArgs, json } from '@remix-run/node'
import { cors } from '../config/index'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const token = request.headers.get('Athorization')

  if (!token?.includes('_ANTDMIN_')) {
    return json(
      { code: '401', message: 'Unauthorized' },
      {
        ...cors,
        status: 401,
      }
    )
  }

  return json(
    {
      id: faker.string.uuid(),
      name: faker.finance.accountName(),
    },
    {
      ...cors,
    }
  )
}
