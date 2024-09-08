"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-tooltip/dist/react-tooltip.css'

const queryClient = new QueryClient()

function PagesWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default PagesWrapper;
