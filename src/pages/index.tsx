import {
  Text
} from '@chakra-ui/react';
import { dehydrate, useQuery } from 'react-query';
import { queryClient, getDogs } from '../../server/api';
import { Colony } from '../components/Colony';
import {Layout} from '../components/Layout';

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
    <Layout>
        <Colony />
    </Layout>

  ) 
}

export default Index
