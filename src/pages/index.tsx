import {
  Text
} from '@chakra-ui/react';
import { dehydrate, useQuery } from 'react-query';
import { queryClient, getDogs } from '../../server/api';

export async function getServerSideProps() {
  await queryClient.prefetchQuery(["dogs"], () => getDogs());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

const Index = ({name}) => {
  const {data} = useQuery(["dogs"], () => getDogs()); 

  
  return (
    <div>

      <Text color="white">
        {JSON.stringify(data)}
        {data.dogs[0].name}
      </Text>

    </div>

  ) 
}

export default Index
