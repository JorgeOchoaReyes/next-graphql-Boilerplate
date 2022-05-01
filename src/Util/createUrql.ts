import { cacheExchange, dedupExchange, Exchange, fetchExchange } from "urql";
import {pipe, tap} from 'wonka'; 
import Router from 'next/router';

//Global Error Handling 
const errorExchange: Exchange = ({forward}) => ops$ => {

  return pipe(
    forward(ops$),
    tap(({error}) => {
        if (error) {
          if(error?.message.includes("not authenthicated")) {
            Router.replace('/login');
        }
      }
    })
  )
}

//URQL Config
export const createUrqlClient = (ssrExchange: any) => { 
  let url = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:3000/api/graphql'
  console.log(url)
  return {
    url: url as string,
    fetchOptions: {
      credentials: 'include' as const,
    }, 
    exchanges: [dedupExchange, errorExchange, cacheExchange, 
    ssrExchange,
    fetchExchange],
  }

};

