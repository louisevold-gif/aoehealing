import { homePageQueryOptions } from '#/queries/home-page'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const { data } = useQuery(homePageQueryOptions())
  console.log(data)
  return (
    <main>
      <h1>Welcome to TanStack Start</h1>
      <p>
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
    </main>
  )
}
