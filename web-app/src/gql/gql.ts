/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query MyProfile {\n    myProfile {\n      emailAddress\n    }\n  }\n": types.MyProfileDocument,
    "\n  mutation DeleteRide($id: String!) {\n    deleteRide(id: $id) {\n      id\n      driverName\n    }\n  }\n": types.DeleteRideDocument,
    "\n  mutation CreateRide() {\n    createWilder(firstName: $firstName, lastName: $lastName) {\n      id\n      firstName\n    }\n  }\n": types.CreateRideDocument,
    "\n  query GetWilders {\n    wilders {\n      id\n      firstName\n      lastName\n      skills {\n        id\n        skillName\n      }\n    }\n  }\n": types.GetRidesDocument,
    "\n  mutation SignIn($emailAddress: String!, $password: String!) {\n    signIn(emailAddress: $emailAddress, password: $password) {\n      id\n      emailAddress\n      firstName\n      lastName\n    }\n  }\n": types.SignInDocument,
    "\n  mutation SignUp(\n    $firstName: String!\n    $lastName: String!\n    $emailAddress: String!\n    $password: String!\n  ) {\n    signUp(\n      firstName: $firstName\n      lastName: $lastName\n      emailAddress: $emailAddress\n      password: $password\n    ) {\n      id\n      emailAddress\n    }\n  }\n": types.SignUpDocument,
};

export function graphql(source: "\n  query MyProfile {\n    myProfile {\n      emailAddress\n    }\n  }\n"): (typeof documents)["\n  query MyProfile {\n    myProfile {\n      emailAddress\n    }\n  }\n"];
export function graphql(source: "\n  mutation DeleteWilder($id: String!) {\n    deleteWilder(id: $id) {\n      id\n      firstName\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteWilder($id: String!) {\n    deleteWilder(id: $id) {\n      id\n      firstName\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreateWilder($firstName: String!, $lastName: String!) {\n    createWilder(firstName: $firstName, lastName: $lastName) {\n      id\n      firstName\n    }\n  }\n"): (typeof documents)["\n  mutation CreateWilder($firstName: String!, $lastName: String!) {\n    createWilder(firstName: $firstName, lastName: $lastName) {\n      id\n      firstName\n    }\n  }\n"];
export function graphql(source: "\n  query GetWilders {\n    wilders {\n      id\n      firstName\n      lastName\n      skills {\n        id\n        skillName\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetWilders {\n    wilders {\n      id\n      firstName\n      lastName\n      skills {\n        id\n        skillName\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation SignIn($emailAddress: String!, $password: String!) {\n    signIn(emailAddress: $emailAddress, password: $password) {\n      id\n      emailAddress\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  mutation SignIn($emailAddress: String!, $password: String!) {\n    signIn(emailAddress: $emailAddress, password: $password) {\n      id\n      emailAddress\n      firstName\n      lastName\n    }\n  }\n"];
export function graphql(source: "\n  mutation SignUp(\n    $firstName: String!\n    $lastName: String!\n    $emailAddress: String!\n    $password: String!\n  ) {\n    signUp(\n      firstName: $firstName\n      lastName: $lastName\n      emailAddress: $emailAddress\n      password: $password\n    ) {\n      id\n      emailAddress\n    }\n  }\n"): (typeof documents)["\n  mutation SignUp(\n    $firstName: String!\n    $lastName: String!\n    $emailAddress: String!\n    $password: String!\n  ) {\n    signUp(\n      firstName: $firstName\n      lastName: $lastName\n      emailAddress: $emailAddress\n      password: $password\n    ) {\n      id\n      emailAddress\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;