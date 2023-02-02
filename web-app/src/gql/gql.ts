/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query MyProfile {\n    myProfile {\n      emailAddress\n    }\n  }\n": types.MyProfileDocument,
    "\n  mutation DeleteRide($id: String!) {\n    deleteRide(id: $id) {\n      id\n      driverName\n    }\n  }\n": types.DeleteRideDocument,
    "\n  mutation CreateRide($driverName: String!,\n    $departureCity: String!,\n    $departureAdress: String!,\n    $rideDate: DateTime!,\n    $arrivalCity: String!,\n    $maxPassagerNumber: Float!,\n    $maxPassagerLeft:Float!,\n    $ridePrice:Float!,\n    $smoker: Boolean!,\n    $pet: Boolean!,) {\n    createRide(driverName : $driverName, departureCity: $departureCity,\n      departureAdress: $departureAdress, rideDate: $rideDate, arrivalCity: $arrivalCity, maxPassagerNumber: $maxPassagerNumber, \n      maxPassagerLeft: $maxPassagerLeft, ridePrice: $ridePrice,\n     smoker: $smoker, pet: $pet) {\n       id\n       driverName\n       departureCity\n       departureAdress\n       rideDate\n       arrivalCity\n       maxPassagerNumber\n       maxPassagerLeft\n       ridePrice\n       smoker\n       pet\n    }\n  }\n": types.CreateRideDocument,
    "\n  query GetRides {\n    rides {\n      id\n      driverName\n       departureCity\n      departureAdress\n       rideDate\n        arrivalCity\n        maxPassagerNumber\n        maxPassagerLeft\n        ridePrice\n     smoker\n     pet\n     \n    }\n  }\n": types.GetRidesDocument,
    "\n  mutation SignIn($emailAddress: String!, $password: String!) {\n    signIn(emailAddress: $emailAddress, password: $password) {\n      id\n      emailAddress\n      firstName\n      lastName\n    }\n  }\n": types.SignInDocument,
    "\n  mutation SignUp(\n    $firstName: String!\n    $lastName: String!\n    $emailAddress: String!\n    $password: String!\n  ) {\n    signUp(\n      firstName: $firstName\n      lastName: $lastName\n      emailAddress: $emailAddress\n      password: $password\n    ) {\n      id\n      emailAddress\n    }\n  }\n": types.SignUpDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyProfile {\n    myProfile {\n      emailAddress\n    }\n  }\n"): (typeof documents)["\n  query MyProfile {\n    myProfile {\n      emailAddress\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteRide($id: String!) {\n    deleteRide(id: $id) {\n      id\n      driverName\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteRide($id: String!) {\n    deleteRide(id: $id) {\n      id\n      driverName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRide($driverName: String!,\n    $departureCity: String!,\n    $departureAdress: String!,\n    $rideDate: DateTime!,\n    $arrivalCity: String!,\n    $maxPassagerNumber: Float!,\n    $maxPassagerLeft:Float!,\n    $ridePrice:Float!,\n    $smoker: Boolean!,\n    $pet: Boolean!,) {\n    createRide(driverName : $driverName, departureCity: $departureCity,\n      departureAdress: $departureAdress, rideDate: $rideDate, arrivalCity: $arrivalCity, maxPassagerNumber: $maxPassagerNumber, \n      maxPassagerLeft: $maxPassagerLeft, ridePrice: $ridePrice,\n     smoker: $smoker, pet: $pet) {\n       id\n       driverName\n       departureCity\n       departureAdress\n       rideDate\n       arrivalCity\n       maxPassagerNumber\n       maxPassagerLeft\n       ridePrice\n       smoker\n       pet\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRide($driverName: String!,\n    $departureCity: String!,\n    $departureAdress: String!,\n    $rideDate: DateTime!,\n    $arrivalCity: String!,\n    $maxPassagerNumber: Float!,\n    $maxPassagerLeft:Float!,\n    $ridePrice:Float!,\n    $smoker: Boolean!,\n    $pet: Boolean!,) {\n    createRide(driverName : $driverName, departureCity: $departureCity,\n      departureAdress: $departureAdress, rideDate: $rideDate, arrivalCity: $arrivalCity, maxPassagerNumber: $maxPassagerNumber, \n      maxPassagerLeft: $maxPassagerLeft, ridePrice: $ridePrice,\n     smoker: $smoker, pet: $pet) {\n       id\n       driverName\n       departureCity\n       departureAdress\n       rideDate\n       arrivalCity\n       maxPassagerNumber\n       maxPassagerLeft\n       ridePrice\n       smoker\n       pet\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRides {\n    rides {\n      id\n      driverName\n       departureCity\n      departureAdress\n       rideDate\n        arrivalCity\n        maxPassagerNumber\n        maxPassagerLeft\n        ridePrice\n     smoker\n     pet\n     \n    }\n  }\n"): (typeof documents)["\n  query GetRides {\n    rides {\n      id\n      driverName\n       departureCity\n      departureAdress\n       rideDate\n        arrivalCity\n        maxPassagerNumber\n        maxPassagerLeft\n        ridePrice\n     smoker\n     pet\n     \n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignIn($emailAddress: String!, $password: String!) {\n    signIn(emailAddress: $emailAddress, password: $password) {\n      id\n      emailAddress\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  mutation SignIn($emailAddress: String!, $password: String!) {\n    signIn(emailAddress: $emailAddress, password: $password) {\n      id\n      emailAddress\n      firstName\n      lastName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignUp(\n    $firstName: String!\n    $lastName: String!\n    $emailAddress: String!\n    $password: String!\n  ) {\n    signUp(\n      firstName: $firstName\n      lastName: $lastName\n      emailAddress: $emailAddress\n      password: $password\n    ) {\n      id\n      emailAddress\n    }\n  }\n"): (typeof documents)["\n  mutation SignUp(\n    $firstName: String!\n    $lastName: String!\n    $emailAddress: String!\n    $password: String!\n  ) {\n    signUp(\n      firstName: $firstName\n      lastName: $lastName\n      emailAddress: $emailAddress\n      password: $password\n    ) {\n      id\n      emailAddress\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;