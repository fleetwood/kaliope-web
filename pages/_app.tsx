import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../firebase/AuthContext'
import { NextComponentType, NextPageContext } from 'next/types';
import CachePage from './_cachePage';

type NextComponentWithAuth = NextComponentType<NextPageContext, any, {}> & Partial<CachePage>

type ExtendedAppProps<P = {}> = AppProps<P> & {
  Component: NextComponentWithAuth
};

function KaliopeWebApp({ Component, pageProps }: ExtendedAppProps) {

  return <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
}

export default KaliopeWebApp
