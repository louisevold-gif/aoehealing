import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import { useSuspenseQuery, type QueryClient } from '@tanstack/react-query'
import Header from '#/components/header/header'
import { SavvyCalFloatingAction } from '#/integrations/savvycal/savvycal'
import { settingsQueryOptions } from '#/queries/settings'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  loader: ({ context: { queryClient } }) =>
    queryClient.query(settingsQueryOptions()),
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'AOE Healing',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
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
