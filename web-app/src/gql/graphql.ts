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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
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
  arrivalCity: Scalars['String'];
  departureAdress: Scalars['String'];
  departureCity: Scalars['String'];
  driverName: Scalars['String'];
  maxPassagerLeft: Scalars['Float'];
  maxPassagerNumber: Scalars['Float'];
  pet: Scalars['Boolean'];
  rideDate: Scalars['DateTime'];
  ridePrice: Scalars['Float'];
  smoker: Scalars['Boolean'];
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
  arrivalCity: Scalars['String'];
  departureAdress: Scalars['String'];
  departureCity: Scalars['String'];
  driverName: Scalars['String'];
  id: Scalars['ID'];
  maxPassagerLeft: Scalars['Float'];
  maxPassagerNumber: Scalars['Float'];
  pet: Scalars['Boolean'];
  rideDate: Scalars['DateTime'];
  ridePrice: Scalars['Float'];
  smoker: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  myProfile: AppUser;
  rides: Array<Ride>;
};

export type Ride = {
  __typename?: 'Ride';
  arrivalCity: Scalars['String'];
  departureAdress: Scalars['String'];
  departureCity: Scalars['String'];
  driverName: Scalars['String'];
  id: Scalars['ID'];
  maxPassagerLeft: Scalars['Float'];
  maxPassagerNumber: Scalars['Float'];
  pet: Scalars['Boolean'];
  rideDate: Scalars['DateTime'];
  ridePrice: Scalars['Float'];
  smoker: Scalars['Boolean'];
};

export type MyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProfileQuery = { __typename?: 'Query', myProfile: { __typename?: 'AppUser', emailAddress: string } };

export type DeleteRideMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteRideMutation = { __typename?: 'Mutation', deleteRide: { __typename?: 'Ride', id: string, driverName: string } };

export type CreateRideMutationVariables = Exact<{
  driverName: Scalars['String'];
  departureCity: Scalars['String'];
  departureAdress: Scalars['String'];
  rideDate: Scalars['DateTime'];
  arrivalCity: Scalars['String'];
  maxPassagerNumber: Scalars['Float'];
  maxPassagerLeft: Scalars['Float'];
  ridePrice: Scalars['Float'];
  smoker: Scalars['Boolean'];
  pet: Scalars['Boolean'];
}>;


export type CreateRideMutation = { __typename?: 'Mutation', createRide: { __typename?: 'Ride', id: string, driverName: string, departureCity: string, departureAdress: string, rideDate: any, arrivalCity: string, maxPassagerNumber: number, maxPassagerLeft: number, ridePrice: number, smoker: boolean, pet: boolean } };

export type GetRidesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRidesQuery = { __typename?: 'Query', rides: Array<{ __typename?: 'Ride', id: string, driverName: string, departureCity: string, departureAdress: string, rideDate: any, arrivalCity: string, maxPassagerNumber: number, maxPassagerLeft: number, ridePrice: number, smoker: boolean, pet: boolean }> };

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
export const DeleteRideDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRide"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRide"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"driverName"}}]}}]}}]} as unknown as DocumentNode<DeleteRideMutation, DeleteRideMutationVariables>;
export const CreateRideDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRide"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"driverName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"departureCity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"departureAdress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rideDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"arrivalCity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPassagerNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPassagerLeft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ridePrice"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"smoker"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pet"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRide"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"driverName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"driverName"}}},{"kind":"Argument","name":{"kind":"Name","value":"departureCity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"departureCity"}}},{"kind":"Argument","name":{"kind":"Name","value":"departureAdress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"departureAdress"}}},{"kind":"Argument","name":{"kind":"Name","value":"rideDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rideDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"arrivalCity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"arrivalCity"}}},{"kind":"Argument","name":{"kind":"Name","value":"maxPassagerNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPassagerNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"maxPassagerLeft"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPassagerLeft"}}},{"kind":"Argument","name":{"kind":"Name","value":"ridePrice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ridePrice"}}},{"kind":"Argument","name":{"kind":"Name","value":"smoker"},"value":{"kind":"Variable","name":{"kind":"Name","value":"smoker"}}},{"kind":"Argument","name":{"kind":"Name","value":"pet"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pet"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"driverName"}},{"kind":"Field","name":{"kind":"Name","value":"departureCity"}},{"kind":"Field","name":{"kind":"Name","value":"departureAdress"}},{"kind":"Field","name":{"kind":"Name","value":"rideDate"}},{"kind":"Field","name":{"kind":"Name","value":"arrivalCity"}},{"kind":"Field","name":{"kind":"Name","value":"maxPassagerNumber"}},{"kind":"Field","name":{"kind":"Name","value":"maxPassagerLeft"}},{"kind":"Field","name":{"kind":"Name","value":"ridePrice"}},{"kind":"Field","name":{"kind":"Name","value":"smoker"}},{"kind":"Field","name":{"kind":"Name","value":"pet"}}]}}]}}]} as unknown as DocumentNode<CreateRideMutation, CreateRideMutationVariables>;
export const GetRidesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"driverName"}},{"kind":"Field","name":{"kind":"Name","value":"departureCity"}},{"kind":"Field","name":{"kind":"Name","value":"departureAdress"}},{"kind":"Field","name":{"kind":"Name","value":"rideDate"}},{"kind":"Field","name":{"kind":"Name","value":"arrivalCity"}},{"kind":"Field","name":{"kind":"Name","value":"maxPassagerNumber"}},{"kind":"Field","name":{"kind":"Name","value":"maxPassagerLeft"}},{"kind":"Field","name":{"kind":"Name","value":"ridePrice"}},{"kind":"Field","name":{"kind":"Name","value":"smoker"}},{"kind":"Field","name":{"kind":"Name","value":"pet"}}]}}]}}]} as unknown as DocumentNode<GetRidesQuery, GetRidesQueryVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emailAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"emailAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emailAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emailAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"emailAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emailAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;