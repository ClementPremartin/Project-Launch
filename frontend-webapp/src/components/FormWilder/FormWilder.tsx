import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import Select from "react-select";

import { getErrorMessage } from "../../utils";
import {SchoolType, SkillType} from "../../types";

import {
  FormContainer,
  LabelForm,
  CardLabel,
  CardTitle,
  Button,
  InputForm,
  SelectForm,
} from "./FormWilder_styled";

export default function App() {
  const [schools, setSchools] = useState<[]| SchoolType[]>([]);
  const [skills, setSkills] = useState<[] | SkillType[]>([]);
  const [, setErrorMessage ]=useState("");
  const {
    control,
    register,
    handleSubmit,
    reset,
  } = useForm();

  const handleOptionsMultiSelect = () => {
    const skillsArr = [];
    for (let i = 0; i<skills.length; i++){
      skillsArr.push({value: skills[i].id, label: skills[i].skill_name});
    }
    return skillsArr;
  }

  const handleOptionsSingleSelect = () => {
    const schoolsArr = [];
    for (let i = 0; i<schools.length; i++){
      schoolsArr.push({value: schools[i].id, label: schools[i].city_name});
    }
    return schoolsArr;
  }

  useEffect(() => {
    (async() => {
      try{
        const res = await axios.get("/schools");
        setSchools(res.data);
        const result = await axios.get("/skills");
        setSkills(result.data);
      }catch(error){
        console.log(error)
      }
    })();
  }, [])

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
                    options={handleOptionsSingleSelect()}
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
                    options={handleOptionsMultiSelect()}
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

