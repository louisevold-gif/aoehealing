import Button from '#/components/button/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/examples/')({
  component: RouteComponent,
})

function RouteComponent() {
  const functionStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyItems: 'center',
  }
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyItems: 'center',
  }
  return (
    <section style={sectionStyle as React.CSSProperties}>
      <h1>Examples</h1>
      <div style={functionStyle as React.CSSProperties}>
        <Button>Example button</Button>
        <Button disabled>Disabled button</Button>
        <Button type="submit">Submit button</Button>
        <Button type="reset">Reset button</Button>
        <Button type="button">Button button</Button>
        <Button type="button" disabled>
          Button button disabled
        </Button>
        <Button type="submit" disabled>
          Submit button disabled
        </Button>
        <Button type="reset" disabled>
          Reset button disabled
        </Button>
        <Button type="button" disabled>
          Button button disabled
        </Button>
      </div>
    </section>
  )
}
