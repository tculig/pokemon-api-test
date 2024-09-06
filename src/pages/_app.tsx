import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type AppProps } from 'next/app';

const queryClient = new QueryClient()

function PagesWrapper({ Component, pageProps }:AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default PagesWrapper;
