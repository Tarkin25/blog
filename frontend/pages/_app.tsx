import { AppProps } from 'next/dist/next-server/lib/router/router';
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if(jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
