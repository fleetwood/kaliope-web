import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../firebase/AuthContext'

function KaliopeWebApp({ Component, pageProps }: AppProps) {
  return <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
}

export default KaliopeWebApp
