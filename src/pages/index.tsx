import { useGetDogsQuery } from '../../server/generated/graphql';
import {Layout} from '../components/Layout';
import {Box, CircularProgress, Flex, Heading, Link, Stack, Text} from '@chakra-ui/react'; 
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from '../Util/createUrql';

const Index = () => {
  const [{data, fetching}] = useGetDogsQuery(); 
  
  if(!fetching && !data) {
    return <div> Query did not return anything adter loading </div>
}
  return (
    <Layout>
      <Stack>
        {!data && fetching ? <CircularProgress m='auto' isIndeterminate color='green.300' /> : 
        data!.dogs.map((p) => {
          return (
            <Box key={p.name} bg="black" p={5} shadow='md' borderWidth='1px'>
              <Flex >
                <Box>
                    <Heading fontSize='xl'> {p.name} </Heading>
                    <Text textColor='orange' fontWeight="bold" mt={4}> Color: <Text> {p.color} </Text> </Text>                        
                    <Text mt={4}>Age: {p.ageInWeeks}</Text>
                    <Text mt={4}>{p.description[0]}</Text>
                </Box>
              </Flex>
            </Box>

          )
        })}
      </Stack>
    </Layout>

  ) 
}

export default withUrqlClient(createUrqlClient)(Index); 
