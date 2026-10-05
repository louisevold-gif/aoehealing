import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { pageQueryOptions } from '#/queries/page'
import { PortableText } from '@portabletext/react'

export const Route = createFileRoute('/$slug')({
  loader: ({ context: { queryClient }, params }) =>
    queryClient.query({
      ...pageQueryOptions(params.slug),
      staleTime: 'static',
    }),
  component: Page,
})

function Page() {
  const { slug } = Route.useParams()
  const { data } = useSuspenseQuery(pageQueryOptions(slug))

  if (!data) return <p>Page not found</p>

  return (
    <>
      <h1>{data.title.en_US}</h1>
      {data.content.map((content: any) => {
        return <PortableText value={content.en_US} key={content._key} />
      })}
    </>
  )
}
