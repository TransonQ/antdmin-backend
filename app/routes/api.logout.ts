import { json } from '@remix-run/node'

export const action = async () => {
  return json({}, 200)
}
