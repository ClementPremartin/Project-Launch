/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query SchoolsAndSkills {\n    skills {\n      id\n      skill_name\n    }\n    schools {\n      id\n      city_name\n    }\n  }\n": types.SchoolsAndSkillsDocument,
    "\n  mutation createWilder(\n    $firstname: String!\n    $lastname: String!\n    $schoolId: String!\n    $skills: [String!]!\n    $description: String!\n  ) {\n    addWilder(\n      firstname: $firstname\n      lastname: $lastname\n      schoolId: $schoolId\n      skills: $skills\n      description: $description\n    ) {\n      id\n      firstname\n      lastname\n    }\n  }\n": types.CreateWilderDocument,
    "\n    query Wilders {\n      wilders {\n      id\n      firstname\n      lastname\n      skills {\n        id\n        skill_name\n        rate\n      }\n      description\n      school {\n        id\n        city_name\n      }\n    }\n  }\n": types.WildersDocument,
};

export function graphql(source: "\n  query SchoolsAndSkills {\n    skills {\n      id\n      skill_name\n    }\n    schools {\n      id\n      city_name\n    }\n  }\n"): (typeof documents)["\n  query SchoolsAndSkills {\n    skills {\n      id\n      skill_name\n    }\n    schools {\n      id\n      city_name\n    }\n  }\n"];
export function graphql(source: "\n  mutation createWilder(\n    $firstname: String!\n    $lastname: String!\n    $schoolId: String!\n    $skills: [String!]!\n    $description: String!\n  ) {\n    addWilder(\n      firstname: $firstname\n      lastname: $lastname\n      schoolId: $schoolId\n      skills: $skills\n      description: $description\n    ) {\n      id\n      firstname\n      lastname\n    }\n  }\n"): (typeof documents)["\n  mutation createWilder(\n    $firstname: String!\n    $lastname: String!\n    $schoolId: String!\n    $skills: [String!]!\n    $description: String!\n  ) {\n    addWilder(\n      firstname: $firstname\n      lastname: $lastname\n      schoolId: $schoolId\n      skills: $skills\n      description: $description\n    ) {\n      id\n      firstname\n      lastname\n    }\n  }\n"];
export function graphql(source: "\n    query Wilders {\n      wilders {\n      id\n      firstname\n      lastname\n      skills {\n        id\n        skill_name\n        rate\n      }\n      description\n      school {\n        id\n        city_name\n      }\n    }\n  }\n"): (typeof documents)["\n    query Wilders {\n      wilders {\n      id\n      firstname\n      lastname\n      skills {\n        id\n        skill_name\n        rate\n      }\n      description\n      school {\n        id\n        city_name\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;