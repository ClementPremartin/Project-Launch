import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
            <SelectForm
              {...register(("schoolId"), {required: true})}
              className={`form-control ${errors.schoolId  ? "is-invalid" : ""}`}
            >
              <option value="" selected disabled hidden>Sélectionner votre Campus</option>
              {schools && schools.map((school) =>
                  <option key={school.id} value={school.id}>{school.city_name}</option>
              )}
            </SelectForm>
          </LabelForm>
          <LabelForm htmlFor="skills">
            Skills
            <SelectForm multiple
              {...register("skills")}>
                {skills.map((skill) =>
                  <option key={skill.id} value={skill.id}>{skill.skill_name}</option>
                )}
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

