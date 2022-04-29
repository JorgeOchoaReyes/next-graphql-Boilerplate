import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AppProps } from 'next/app'
import { queryClient } from '../../server/api';
import {Hydrate, QueryClientProvider} from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
          <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
          </Hydrate>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
