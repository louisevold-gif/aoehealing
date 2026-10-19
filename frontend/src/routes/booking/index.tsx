import {
  SavvyCalButton,
  SavvyCalInline,
} from '#/integrations/savvycal/savvycal'
import { settingsQueryOptions } from '#/queries/settings'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/booking/')({
  component: Booking,
})

function Booking() {
  const { data } = useSuspenseQuery(settingsQueryOptions())
  const link = data?.savvyCalLink

  return (
    <main>
      <h1>Booking</h1>
      <SavvyCalButton link={link} />
      <SavvyCalInline link={link} />
    </main>
  )
}
