import { useState } from "react";
import { useForm, useController } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useProfile } from "../contexts/ProfileProvider";
import { processFirebaseErrors } from "../utils/errors";

const cities = [
  { value: "Stuttgart", label: "Stuttgart" },
  { value: "Berlin", label: "Berlin" },
  { value: "Dresden", label: "Dresden" },
  { value: "Hamburg", label: "Hamburg" },
];

const Profile = () => {
  const { register, handleSubmit, reset } = useForm();
  const { firebaseRegister, user } = useAuth();
  const { addProfile } = useProfile();

  const post = async (formValues) => {
    await addProfile({ ...formValues, userId: user.uid });
  };
  // const post = async (formValues) => {
  //   await firebaseRegister;
  //   reset();
  //   console.log(formValues);
  // };

  return (
    <div className="formInput">
      <form className="formInput" onSubmit={handleSubmit(post)}>
        <h1>Add your profile</h1>

        <div className="formInput">
          <label>Name</label>
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            maxLength="18"
          />
        </div>
        <div className="formInput">
          <label>Description</label>
          <input
            {...register("description", { required: true })}
            placeholder="Description"
            maxLength="60"
          />
        </div>
        <div className="formInput">
          <label>How many people can you host?</label>
          <input
            {...register("beds", { required: true })}
            placeholder="Free Beds"
            type="number"
            min="0"
            max="10"
          />
        </div>

        <div className="formInput">
          <label>City</label>
          <select {...register("city", { required: true })}>
            {cities.map((city, i) => (
              <option key={i} value={city.value}>
                {city.value}
              </option>
            ))}
          </select>
        </div>

        <div className="formInput">
          <label>Gender</label>
          <select {...register("gender", { required: true })}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="formInput">
          <label>Active</label>
          <select {...register("availability", { required: true })}>
            <option value="active">Open</option>
            <option value="inactive">Closed</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
