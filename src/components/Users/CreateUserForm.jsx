import { useForm } from "react-hook-form";
import "./CreateUserForm.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserInfo } from "../../services/apiUsers";
import toast from "react-hot-toast";
import { UseAuth } from "../../authentication/AuthContext";
import FormError from "../../ui/FormError";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { useUserInfo } from "./UserInfoContextProvider";
import Spinner from "../../ui/Spinner";

function CreateUserForm() {
  const { user, isLoading } = UseAuth();
  const { userInfo, UpdateUserInfo } = useUserInfo();

  const firstUser = userInfo?.[0] || {};
  const userId = firstUser?.userId;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      setValue("email", user.email);
      setValue("userId", user.id);
    }
  }, [user, setValue]);

  const { mutateAsync: createUserMutation } = useMutation({
    mutationFn: (userInfo) => createUserInfo(userInfo),
    onSuccess: () => {
      toast.success("The User Information  was successfully created!", {
        duration: 3000,
        position: "top-center",
      });
      navigate("/");
    },

    onError: (error) => {
      toast.error(`The User can't be created!${error.message}`, {
        duration: 5000,
        position: "top-center",
      });
      console.error(error);
    },
  });

  function onSubmit(data) {
    if (user.id !== userId) {
      createUserMutation(data);
      reset();
    }
    if (user.id === userId) {
      UpdateUserInfo(data, userId);
    }
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (user?.id === userId) {
    return <Navigate to="/" />;
  }

  return (
    <div className="form-wrapper">
      <form className="create-user-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="user-form-item">
          <label className="user-form-label"> Full name </label>
          <input
            {...register("fullName", {
              required: "Full name is required for creating User!",
            })}
            type="text"
            className="user-form-input"
            placeholder={firstUser.fullName}
          />
        </div>
        {errors?.fullName ? (
          <FormError error={errors?.fullName?.message} />
        ) : null}
        <div className="user-form-item">
          <label className="user-form-label"> Phone number </label>
          <input
            {...register("phoneNumber", {
              required: "Phone number is required for creating User!",
            })}
            type="number"
            className="user-form-input"
          />
        </div>
        {errors?.phoneNumber ? (
          <FormError error={errors?.phoneNumber?.message} />
        ) : null}
        {/* <div className="user-form-item">
          <label className="user-form-label"> Email </label>
          <input
          {...register("email")}  
          // value={user.email}
          disabled={true}
          type="email"
          className="user-form-input"
          />
          </div>
          {errors?.email ? <FormError error={errors?.email?.message} /> : null} */}
        <div className="user-form-item">
          <label className="user-form-label"> Instagram username </label>
          <input
            {...register("instagram", {
              required: "Instagram username is required for creating User!",
            })}
            type="text"
            className="user-form-input"
          />
        </div>
        {errors?.instagram ? (
          <FormError error={errors?.instagram?.message} />
        ) : null}
        <div className="user-form-item">
          <label className="user-form-label">Telegram id</label>
          <input
            {...register("telegram", {
              required: "Telegram id is required for creating User!",
            })}
            type="text"
            className="user-form-input"
          />
        </div>
        {errors?.telegram ? (
          <FormError error={errors?.telegram?.message} />
        ) : null}

        <div className="button-wrapper">
          <button className="form-submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUserForm;
