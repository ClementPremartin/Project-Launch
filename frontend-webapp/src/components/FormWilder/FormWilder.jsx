import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("/wilders", data);
      console.log(data);
      reset();
      console.log(`${data.firstname} a bien été ajouté`);
    } catch (err) {
      throw Error({
        error:
          "Impossible de joindre le serveur. Véfifiez votre connexion Internet.",
      });
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
          <LabelForm htmlFor="school">
            Campus
            <SelectForm
              name="school"
              {...register("school")}
              className={`form-control ${errors.school ? "is-invalid" : ""}`}
            >
              <option defaultValue="Lyon">Lyon</option>
              <option value="Brest">Brest</option>
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

