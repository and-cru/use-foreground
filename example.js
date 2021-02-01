import useForeground from '@and-cru/use-foreground'

export const Example = () => {
  useForeground(() => {
    console.log('refreshing state...')
  })

  return null
}
