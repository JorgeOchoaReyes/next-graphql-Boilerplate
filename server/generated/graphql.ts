import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Dog = {
  __typename?: 'Dog';
  ageInWeeks: Scalars['Float'];
  attributes: Array<DogAttribute>;
  availableDate: Scalars['String'];
  breed: Scalars['String'];
  color: Scalars['String'];
  description: Array<Scalars['String']>;
  fee: Scalars['Float'];
  image: Scalars['String'];
  name: Scalars['ID'];
  sex: Scalars['String'];
  weight: Scalars['Float'];
};

export type DogAttribute = {
  __typename?: 'DogAttribute';
  key: Scalars['ID'];
  value: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  dog?: Maybe<Dog>;
  dogs: Array<Dog>;
};


export type QueryDogArgs = {
  name: Scalars['String'];
};

export type GetDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDogsQuery = { __typename?: 'Query', dogs: Array<{ __typename?: 'Dog', name: string, breed: string, ageInWeeks: number, image: string, sex: string, description: Array<string>, color: string, attributes: Array<{ __typename?: 'DogAttribute', key: string, value: string }> }> };

export type DogByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type DogByNameQuery = { __typename?: 'Query', dog?: { __typename?: 'Dog', name: string, breed: string, ageInWeeks: number, image: string, sex: string, description: Array<string>, color: string, attributes: Array<{ __typename?: 'DogAttribute', key: string, value: string }> } | null };


export const GetDogsDocument = gql`
    query getDogs {
  dogs {
    name
    breed
    ageInWeeks
    image
    sex
    description
    color
    attributes {
      key
      value
    }
  }
}
    `;

export function useGetDogsQuery(options?: Omit<Urql.UseQueryArgs<GetDogsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetDogsQuery>({ query: GetDogsDocument, ...options });
};
export const DogByNameDocument = gql`
    query dogByName($name: String!) {
  dog(name: $name) {
    name
    breed
    ageInWeeks
    image
    sex
    description
    color
    attributes {
      key
      value
    }
  }
}
    `;

export function useDogByNameQuery(options: Omit<Urql.UseQueryArgs<DogByNameQueryVariables>, 'query'>) {
  return Urql.useQuery<DogByNameQuery>({ query: DogByNameDocument, ...options });
};