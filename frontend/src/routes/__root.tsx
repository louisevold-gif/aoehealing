import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { createIsomorphicFn } from '@tanstack/react-start'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import { useSuspenseQuery, type QueryClient } from '@tanstack/react-query'
import Header from '#/components/header/header'
import { SavvyCalFloatingAction } from '#/integrations/savvycal/savvycal'
import { settingsQueryOptions } from '#/queries/settings'
import { urlFor } from '#/utils/image'
import type { SettingsQueryResult } from '../../sanity.types'

interface MyRouterContext {
  queryClient: QueryClient
}

const getRequestOrigin = createIsomorphicFn()
  .server(async () => {
    const { getRequestUrl } = await import('@tanstack/react-start/server')
    return getRequestUrl().origin
  })
  .client(() => window.location.origin)

function textValue(value: unknown) {
  return typeof value === 'string' && value.length > 0 ? value : undefined
}

function socialImageUrl(settings: SettingsQueryResult) {
  const image = settings?.image
  if (!image?.asset) return undefined
  return urlFor(image).width(1200).height(630).fit('crop').auto('format').url()
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  loader: ({ context: { queryClient } }) =>
    queryClient.query(settingsQueryOptions()),
  head: async ({ loaderData, matches }) => {
    const title = textValue(loaderData?.title) ?? 'AOE Healing'
    const description = textValue(loaderData?.description)
    const pathname = matches.at(-1)?.pathname || '/'
    const origin = textValue(loaderData?.siteUrl) ?? (await getRequestOrigin())
    const pageUrl = new URL(pathname, origin).toString()
    const imageUrl = socialImageUrl(loaderData)

    const meta: Array<
      | { charSet: 'utf-8' }
      | { title: string }
      | { name: string; content: string }
      | { property: string; content: string }
    > = [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title },
      { property: 'og:title', content: title },
      { property: 'og:url', content: pageUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:url', content: pageUrl },
    ]

    if (description) {
      meta.push(
        { name: 'description', content: description },
        { property: 'og:description', content: description },
        { name: 'twitter:description', content: description },
      )
    }

    if (imageUrl) {
      meta.push(
        { property: 'og:image', content: imageUrl },
        { name: 'twitter:image', content: imageUrl },
      )
    }

    return {
      meta,
      links: [
        { rel: 'stylesheet', href: appCss },
        {
          rel: 'icon',
          href: `${import.meta.env.BASE_URL}favicon.ico`,
          type: 'image/x-icon',
        },
      ],
    }
  },
  scripts: () => [
    {
      children:
        'window.SavvyCal=window.SavvyCal||function(){(SavvyCal.q=SavvyCal.q||[]).push(arguments)};',
    },
    {
      async: true,
      src: 'https://embed.savvycal.com/v1/embed.js',
    },
    {
      children: "SavvyCal('init')",
    },
  ],
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { data } = useSuspenseQuery(settingsQueryOptions())

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <SavvyCalFloatingAction link={data?.savvyCalLink ?? undefined}>
          {data?.savvyCalButtonText ?? 'Schedule time'}
        </SavvyCalFloatingAction>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
