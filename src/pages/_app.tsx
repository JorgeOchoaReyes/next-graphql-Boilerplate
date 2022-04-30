import { Box, ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AppProps } from 'next/app'
import { queryClient } from '../../server/api';
import {Hydrate, QueryClientProvider} from 'react-query';
import "../../styles.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
          <Hydrate state={pageProps.dehydratedState}>
              <Box bg='#cbcdd4'>
                <Component {...pageProps} />
              </Box>
          </Hydrate>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
