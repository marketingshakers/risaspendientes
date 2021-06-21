import type { GetLayoutProps } from '@/components/page-layout'
import '@/styles/app.css'
import '@/styles/icons.css'

import type { AppProps } from 'next/app'
import { useMemo } from 'react'
import PageLayout from '@/components/page-layout'

const App = ({ Component, pageProps }: AppProps) => {
  const layoutProps = useMemo<GetLayoutProps>(() => {
    return (Component as any).getLayoutProps
      ? (Component as any).getLayoutProps(pageProps)
      : (pageProps) => pageProps 
  }, [(Component as any).getLayoutProps, pageProps])
  return (
    <PageLayout {...pageProps} {...layoutProps}>
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default App
