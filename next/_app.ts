// import App from "next/app";
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import Head from 'next/head'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Home Page</title>
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="description" content="A simple Page" />
    </Head>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>
  </>
)
}

export default App
