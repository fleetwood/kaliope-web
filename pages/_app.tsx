import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../firebase/AuthContext'
import {kaliopeClient} from "kaliope-types"

function KaliopeWebApp({ Component, pageProps }: AppProps) {
  
  pageProps = {...pageProps, kaliopeClient}

  return <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
}

export default KaliopeWebApp
