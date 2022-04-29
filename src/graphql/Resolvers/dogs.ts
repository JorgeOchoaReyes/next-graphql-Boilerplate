import { Resolver, Query } from "type-graphql";
import { Dog } from "../Entities/Dog";
import mockdata from '../mockData.json'; 

@Resolver(Dog) 
export class DogResolver {
    @Query(() => [Dog])
    dogs(): Dog[] {
        return mockdata; 
    }
}