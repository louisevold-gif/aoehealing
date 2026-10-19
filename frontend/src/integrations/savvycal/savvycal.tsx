import { useEffect, useId } from 'react'

import Button from '#/components/button/button'
import FloatingAction from '#/components/floating-action/floating-action'

type SavvyCalInlineOptions = {
  link: string
  selector: string
}

type SavvyCalOpenOptions = {
  link: string
}

type SavvyCal = {
  (command: 'init'): void
  (command: 'inline', options: SavvyCalInlineOptions): void
  (command: 'open', options: SavvyCalOpenOptions): void
}

declare global {
  interface Window {
    SavvyCal?: SavvyCal
  }
}

export function SavvyCalInline({ link }: { link?: string }) {
  const reactId = useId()
  const id = `savvycal-${reactId.replaceAll(':', '')}`

  useEffect(() => {
    if (!link) return

    window.SavvyCal?.('inline', {
      link,
      selector: `#${id}`,
    })
  }, [id, link])

  if (!link) return null

  return (
    <div style={{ width: '100%', minHeight: '700px' }}>
      <div id={id} />
    </div>
  )
}

export function SavvyCalButton({
  children = 'Schedule time',
  link,
}: {
  children?: React.ReactNode
  link?: string
}) {
  if (!link) return null

  return (
    <Button
      type="button"
      onClick={() => {
        window.SavvyCal?.('open', { link })
      }}
    >
      {children}
    </Button>
  )
}

export function SavvyCalFloatingAction({
  children = 'Schedule time',
  link,
}: {
  children?: React.ReactNode
  link?: string
}) {
  if (!link) return null

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '0' }}>
      <FloatingAction
        onClick={() => window.SavvyCal?.('open', { link })}
        ariaLabel="Schedule time"
      >
        {children}
      </FloatingAction>
    </div>
  )
}
