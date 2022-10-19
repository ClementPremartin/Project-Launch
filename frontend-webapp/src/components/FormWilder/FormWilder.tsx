import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import Select from "react-select";
import { useQuery, gql } from "@apollo/client";

import { SchoolsAndSkillsQuery } from "../../gql/graphql";

import { getErrorMessage } from "../../utils";

import {
  FormContainer,
  LabelForm,
  CardLabel,
  CardTitle,
  Button,
  InputForm,
  SelectForm,
} from "./FormWilder_styled";

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
`;

export default function FormWilder() {
  const { data } = useQuery<SchoolsAndSkillsQuery>(
    GET_WILDER_SCHOOL_AND_SKILLS, {fetchPolicy: "cache-and-network"}
  );

  const [, setErrorMessage ]=useState("");
  const {
    control,
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {

    try {
      await axios.post("/wilders", data);
      console.log(data);
      reset();
      console.log(`${data.firstname} a bien été ajouté`);
    } catch (error) {
      setErrorMessage(getErrorMessage(error))
    }
  };

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
              {...register("firstname", {
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
              {...register("lastname", {
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
                  name="schoolId"
                  control={control}
                  rules={{required: true}}
                  render={({field}) => <Select
                    defaultValue={[]}
                    {...field}
                    options={data?.schools.map((school) => {
                      return {value: school.id, label: school.city_name}
                    })}
                  />}
              />
            </SelectForm>
          </LabelForm>
          <LabelForm htmlFor="skills">
            Skills
            <SelectForm>
            <Controller
              name="skills"
              control={control}
              rules={{required: true}}
              render={({field}) =>
                <Select {...field}
                    defaultValue={[]}
                    options={data?.skills.map((skill) => {
                      return {value: skill.id, label: skill.skill_name}
                    })}
                    isMulti
                  />
                }
              />
            </SelectForm>
          </LabelForm>
          <LabelForm htmlFor="description">
            Description
            <InputForm
              type="text"
              placeholder="Ecrivez votre description"
              {...register("description", {
                maxLength: 250,
              })}
            />
          </LabelForm>
          <Button type="submit" />
        </CardLabel>
      </FormContainer>
    </>
  );
}

