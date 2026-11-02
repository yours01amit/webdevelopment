import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ users, setUsers, setToggle, userUpdate, setUserUpdate }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: userUpdate,
  });

  console.log(errors);

  let formSubmit = (data) => {
    if (userUpdate) {
      setUsers((prev) =>
        prev.map((user, index) => (index === userUpdate.index ? data : user)),
      );
    } else {
      let arr = [...users, data];
      localStorage.setItem("users", JSON.stringify(arr))
    }
    
    reset();
    setUserUpdate(null);
    setToggle(true);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="text-xl font-bold">Create User</h1>

      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-60 flex flex-col gap-3 p-4 border-2 rounded"
      >
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^[^\s].*$/,
              message: "Blank spaces is not allowed",
            },
          })}
          className="p-2 border rounded "
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "Email is required",
          })}
          className="p-2 border rounded "
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            required: "mobile is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "maximum 10 digits are required",
            },
          })}
          className="p-2 border rounded "
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", {
            required: "image is required",
          })}
          className="p-2 border rounded "
          type="url"
          placeholder="Image"
        />
        {errors.image && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}

        <button className="bg-blue-700 p-2 rounded">Add User</button>
      </form>
    </div>
  );
};

export default Form;
