import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstname">
        Prénom
        <input
          type="text"
          placeholder="Jeanjean"
          {...register("firstname", {
            required: true,
            minLength: 2,
            maxLength: 35,
          })}
        />
      </label>
      <label htmlFor="lastname">
        Nom
        <input
          type="text"
          placeholder="Bon"
          {...register("lastname", {
            required: true,
            minLength: 2,
            maxLength: 35,
          })}
        />
      </label>
      <label htmlFor="city_name">
        Campus
        <select
          name="city_name"
          {...register("city_name")}
          className={`form-control ${errors.city_name ? "is-invalid" : ""}`}
        >
          <option defaultValue="Lyon">Lyon</option>
          <option value="Brest">Brest</option>
        </select>
      </label>
      <label htmlFor="description">
        Description
        <input
          type="text"
          placeholder="Ecrivez votre description"
          {...register("description", {
            maxLength: 250,
          })}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

