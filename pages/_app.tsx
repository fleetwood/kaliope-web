import "../styles/globals.css";

import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next/types";
import CachePage from "./_cachePage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

type NextComponentWithAuth = NextComponentType<NextPageContext, any, {}> &
  Partial<CachePage>;

type ExtendedAppProps<P = {}> = AppProps<P> & {
  Component: NextComponentWithAuth;
};

function KaliopeWebApp({ Component, pageProps }: ExtendedAppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
}

export default KaliopeWebApp;
