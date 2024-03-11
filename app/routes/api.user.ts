import { faker } from '@faker-js/faker'
import { LoaderFunctionArgs, json } from '@remix-run/node'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const token = request.headers.get('Athorization')

  if (!token?.includes('_ANTDMIN_')) {
    return json({ code: '401', message: 'Unauthorized' }, 401)
  }

  return json(
    {
      id: faker.string.uuid(),
      name: faker.finance.accountName(),
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  )
}
