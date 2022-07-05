import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export interface AccountProfileLoaderData {
  account: null
}

export const loader: LoaderFunction = async ({ params }) => {
  // const account = await prisma.accounts.findFirst({
  //   where: {
  //     account: params.account,
  //   },
  // })

  return json<AccountProfileLoaderData>({ account: null })
}

export default function Index() {
  const { account } = useLoaderData<AccountProfileLoaderData>()
  return <pre>HOME PROTECTED</pre>
}
