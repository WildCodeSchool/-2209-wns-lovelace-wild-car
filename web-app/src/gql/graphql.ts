/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AppUser = {
  __typename?: 'AppUser';
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRide: Ride;
  deleteRide: Ride;
  signIn: AppUser;
  signUp: AppUser;
  updateRide: Ride;
};





export type MutationCreateRideArgs = {
  driverName: Scalars['String'];
  departureCity: Scalars['String'];
  departureAdress: Scalars['String'];
  rideDate: Scalars['String'];
  arrivalCity: Scalars['String'];
  maxPassagerNumber: Scalars['Int'];
  maxPassagerLeft: Scalars['Int'];
  ridePrice: Scalars['Int'];
  smoker: Scalars['Boolean'];
  pet: Scalars['Boolean'];
};


export type MutationDeleteRideArgs = {
  id: Scalars['String'];
};


export type MutationSignInArgs = {
  emailAddress: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateRideArgs = {
  id: Scalars['ID'];
  driverName: Scalars['String'];
  departureCity: Scalars['String'];
  departureAdress: Scalars['String'];
  rideDate: Scalars['String'];
  arrivalCity: Scalars['String'];
  maxPassagerNumber: Scalars['Int'];
  maxPassagerLeft: Scalars['Int'];
  ridePrice: Scalars['Int'];
  smoker: Scalars['Boolean'];
  pet: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  myProfile: AppUser;
  Rides: Array<Ride>;
};





export type Ride = {
  __typename?: 'Ride';
  id: Scalars['ID'];
  driverName: Scalars['String'];
  departureCity: Scalars['String'];
  departureAdress: Scalars['String'];
  rideDate: Scalars['String'];
  arrivalCity: Scalars['String'];
  maxPassagerNumber: Scalars['Int'];
  maxPassagerLeft: Scalars['Int'];
  ridePrice: Scalars['Int'];
  smoker: Scalars['Boolean'];
  pet: Scalars['Boolean'];

};

export type MyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProfileQuery = { __typename?: 'Query', myProfile: { __typename?: 'AppUser', emailAddress: string } };

export type DeleteRideMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteRideMutation = { __typename?: 'Mutation', deleteRide: { __typename?: 'Ride', id: string, driverName: string,
departureCity: string,
departureAdress: string,
rideDate: Date,
arrivalCity: string,
maxPassagerNumber: number,
maxPassagerLeft:number,
ridePrice:number,
smoker: boolean,
pet: boolean } };

export type CreateRideMutationVariables = Exact<{
  id: Scalars['ID'];
  driverName: Scalars['String'];
  departureCity: Scalars['String'];
  departureAdress: Scalars['String'];
  rideDate: Scalars['String'];
  arrivalCity: Scalars['String'];
  maxPassagerNumber: Scalars['Int'];
  maxPassagerLeft: Scalars['Int'];
  ridePrice: Scalars['Int'];
  smoker: Scalars['Boolean'];
  pet: Scalars['Boolean'];
}>;


export type CreateRideMutation = { __typename?: 'Mutation', createRide: { __typename?: 'Ride', id: string, driverName: string,
departureCity: string,
departureAdress: string,
rideDate: Date,
arrivalCity: string,
maxPassagerNumber: number,
maxPassagerLeft:number,
ridePrice:number,
smoker: boolean,
pet: boolean, } };

export type GetRidesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRidesQuery = { __typename?: 'Query', rides: Array<{ __typename?: 'Ride', id: string, driverName: string }> };

export type SignInMutationVariables = Exact<{
  emailAddress: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AppUser', id: string, emailAddress: string, firstName: string, lastName: string } };

export type SignUpMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  emailAddress: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'AppUser', id: string, emailAddress: string } };


export const MyProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}}]}}]}}]} as unknown as DocumentNode<MyProfileQuery, MyProfileQueryVariables>;
export const DeleteRideDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRide"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRide"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}}]}}]}}]} as unknown as DocumentNode<DeleteRideMutation, DeleteRideMutationVariables>;
export const CreateRideDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRide"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRide"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}}]}}]}}]} as unknown as DocumentNode<CreateRideMutation, CreateRideMutationVariables>;
export const GetRidesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWilders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wilders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"skillName"}}]}}]}}]}}]} as unknown as DocumentNode<GetRidesQuery, GetRidesQueryVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emailAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"emailAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emailAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emailAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"emailAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emailAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;