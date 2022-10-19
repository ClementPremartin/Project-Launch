/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\nquery Wilders {\nwilders {\nid\nfirstname\nlastname\nskills {\n  id\n  skill_name\n  rate\n}\ndescription\nschool {\n  id\n  city_name\n}\n}\n}\n": types.WildersDocument,
};

export function graphql(source: "\nquery Wilders {\nwilders {\nid\nfirstname\nlastname\nskills {\n  id\n  skill_name\n  rate\n}\ndescription\nschool {\n  id\n  city_name\n}\n}\n}\n"): (typeof documents)["\nquery Wilders {\nwilders {\nid\nfirstname\nlastname\nskills {\n  id\n  skill_name\n  rate\n}\ndescription\nschool {\n  id\n  city_name\n}\n}\n}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;