import {ApolloServer} from "apollo-server-micro";
import Cors from 'micro-cors'; 
import { buildSchema } from "type-graphql";
import 'reflect-metadata';
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { DogResolver } from "../../../server/graphql/Resolvers/dogs";

const cors = Cors(); 

const schema = await buildSchema({
    resolvers: [DogResolver]
}) 

const server  = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

const startServer = server.start();

export const config = {
    api: {
        bodyParser: false
    }
  }

export default cors( async (req, res) => {
    await startServer;
    if (req.method === 'OPTIONS') {
        res.end();
        return false;
    }
    return await server.createHandler({path: "/api/graphql"})(req, res);
});

