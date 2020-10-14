import '../styles/globals.scss'
import '../styles/main.scss'
import NextNprogress from 'nextjs-progressbar'
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
      <>
      <NextNprogress
          color="black"
          startPosition="0.7"
          stopDelayMs="200"
          height="10"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
