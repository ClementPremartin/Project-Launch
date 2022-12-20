import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import { useQuery, useMutation, gql } from '@apollo/client'

import {
  SchoolsAndSkillsQuery,
  CreateWilderMutationVariables,
  CreateWilderMutation,
} from '../../gql/graphql'

import { getErrorMessage } from '../../utils'

import {
  FormContainer,
  LabelForm,
  CardLabel,
  CardTitle,
  Button,
  InputForm,
  SelectForm,
} from './FormWilder_styled'

const GET_WILDER_SCHOOL_AND_SKILLS = gql`
  query SchoolsAndSkills {
    skills {
      id
      skill_name
    }
    schools {
      id
      city_name
    }
  }
`

const CREATE_WILDER = gql`
  mutation createWilder(
    $firstname: String!
    $lastname: String!
    $schoolId: String!
    $skills: [String!]!
    $description: String!
  ) {
    addWilder(
      firstname: $firstname
      lastname: $lastname
      schoolId: $schoolId
      skills: $skills
      description: $description
    ) {
      id
      firstname
      lastname
    }
  }
`

export default function FormWilder() {
  const { data } = useQuery<SchoolsAndSkillsQuery>(
    GET_WILDER_SCHOOL_AND_SKILLS,
    { fetchPolicy: 'cache-and-network' },
  )

  const [createWilder] = useMutation<
    CreateWilderMutation,
    CreateWilderMutationVariables
  >(CREATE_WILDER)

  const [, setErrorMessage] = useState('')
  const { control, register, handleSubmit, reset } = useForm()

  const onSubmit = async (data: any) => {
    const { firstname, lastname, school, description } = data
    const schoolId = school.value

    const skills = data.skills.map((skill: { value: string }) => skill.value)
    try {
      await createWilder({
        variables: {
          firstname,
          lastname,
          schoolId,
          skills,
          description,
        },
      })
      console.log(data)
      reset()
      console.log(`${data.firstname} a bien été ajouté`)
    } catch (error) {
      setErrorMessage(getErrorMessage(error))
    }
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <CardTitle>Créer un Wilder</CardTitle>
        <CardLabel>
          <LabelForm htmlFor="firstname">
            Prénom
            <InputForm
              type="text"
              placeholder="Jeanjean"
              {...register('firstname', {
                required: true,
                minLength: 2,
                maxLength: 35,
              })}
            />
          </LabelForm>
          <LabelForm htmlFor="lastname">
            Nom
            <InputForm
              type="text"
              placeholder="Bon"
              {...register('lastname', {
                required: true,
                minLength: 2,
                maxLength: 35,
              })}
            />
          </LabelForm>
          <LabelForm htmlFor="schoolId ">
            Campus
            <SelectForm>
              <Controller
                name="school"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    defaultValue={[]}
                    {...field}
                    options={data?.schools.map((school) => {
                      return { value: school.id, label: school.city_name }
                    })}
                  />
                )}
              />
            </SelectForm>
          </LabelForm>
          <LabelForm htmlFor="skills">
            Skills
            <SelectForm>
              <Controller
                name="skills"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    defaultValue={[]}
                    options={data?.skills.map((skill) => {
                      return { value: skill.id, label: skill.skill_name }
                    })}
                    isMulti
                  />
                )}
              />
            </SelectForm>
          </LabelForm>
          <LabelForm htmlFor="description">
            Description
            <InputForm
              type="text"
              placeholder="Ecrivez votre description"
              {...register('description', {
                maxLength: 250,
              })}
            />
          </LabelForm>
          <Button type="submit" />
        </CardLabel>
      </FormContainer>
    </>
  )
}
