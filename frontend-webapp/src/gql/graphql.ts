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

export type Query = {
  __typename?: 'Query';
  schools: Array<School>;
  skills: Array<Skill>;
  wilders: Array<Wilder>;
};

export type School = {
  __typename?: 'School';
  city_name: Scalars['String'];
  id: Scalars['ID'];
  wilders: Array<Wilder>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  rate: Scalars['Float'];
  skill_name: Scalars['String'];
  wilders: Array<Wilder>;
};

export type Wilder = {
  __typename?: 'Wilder';
  description: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  school: School;
  skills: Array<Skill>;
};

export type SchoolsAndSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type SchoolsAndSkillsQuery = { __typename?: 'Query', skills: Array<{ __typename?: 'Skill', id: string, skill_name: string }>, schools: Array<{ __typename?: 'School', id: string, city_name: string }> };

export type WildersQueryVariables = Exact<{ [key: string]: never; }>;


export type WildersQuery = { __typename?: 'Query', wilders: Array<{ __typename?: 'Wilder', id: string, firstname: string, lastname: string, description: string, skills: Array<{ __typename?: 'Skill', id: string, skill_name: string, rate: number }>, school: { __typename?: 'School', id: string, city_name: string } }> };


export const SchoolsAndSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SchoolsAndSkills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"skill_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"schools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city_name"}}]}}]}}]} as unknown as DocumentNode<SchoolsAndSkillsQuery, SchoolsAndSkillsQueryVariables>;
export const WildersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Wilders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wilders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"skill_name"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"school"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city_name"}}]}}]}}]}}]} as unknown as DocumentNode<WildersQuery, WildersQueryVariables>;