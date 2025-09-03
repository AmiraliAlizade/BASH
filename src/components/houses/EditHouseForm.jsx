import { useForm } from "react-hook-form";
import "./CreateHouseForm.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createHouse, editHouse } from "../../services/apiHouses";
import toast from "react-hot-toast";
import FormError from "../../ui/FormError";
import { useUserInfo } from "../Users/UserInfoContextProvider";
import Spinner from "../../ui/Spinner";
import { useEffect } from "react";
import { useHouse } from "./HouseContext";

function EditHouseForm() {
  const { userInfo, isLoading: isLoadignUser } = useUserInfo();
  if (isLoadignUser) {
    return <Spinner />;
  }
  const { House, isLoading: isLoadingHouse } = useHouse();
  const firstUser = userInfo?.[0] || {};

  const firstHouse = House?.[0];
  if (!firstHouse) {
    return <Spinner />;
  }
  if (isLoadingHouse) {
    return <Spinner />;
  }
  const {
    title,
    size,
    price,
    madeIn,
    address,
    description,
    numBathroom,
    numBedroom,
  } = firstHouse;
  const { fullName, phoneNumber, email, instagram, telegram } = firstUser;
  console.log(House);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title,
      size,
      price,
      madeIn,
      address,
      description,
      numBathroom,
      numBedroom,
    },
  });

  const formValues = {
    titleValue: watch("title"),
    sizeValue: watch("size"),
    priceValue: watch("price"),
    madeInValue: watch("madeIn"),
    addressValue: watch("address"),
    descriptionValue: watch("description"),
    numBathroomValue: watch("numBathroom"),
    numBedroomValue: watch("numBedroom"),
  };

  const {
    titleValue,
    sizeValue,
    priceValue,
    madeInValue,
    addressValue,
    descriptionValue,
    numBathroomValue,
    numBedroomValue,
  } = formValues;
  const queryClient = useQueryClient();
  const {
    mutateAsync: EditHouse,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ updatedHouse, id }) => editHouse({ updatedHouse, id }),
    onSuccess: () => {
      toast.success("The house was successfully updated !", {
        duration: 3000,
        position: "top-center",
      });
      queryClient.invalidateQueries({
        queryKey: ["houses"],
      });
    },
    onError: (err) => {
      toast.error(`The house can't be created!${err.message}`, {
        duration: 5000,
        position: "top-center",
      });
      console.error(err);
    },
  });

  console.log(firstHouse.id);
  useEffect(() => {
    if (firstUser) {
      setValue("user_fullName", fullName);
      setValue("user_phoneNumber", phoneNumber);
      setValue("user_email", email);
      setValue("user_instagram", instagram);
      setValue("user_telegram", telegram);
    }
  }, [firstUser, setValue]);

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    const finalData = {
      ...firstHouse,
      title: titleValue !== "" ? titleValue : firstHouse.title,
      size: titleValue !== "" ? sizeValue : firstHouse.size,
      price: titleValue !== "" ? priceValue : firstHouse.price,
      madeIn: titleValue !== "" ? madeInValue : firstHouse.madeIn,
      address: titleValue !== "" ? addressValue : firstHouse.address,
      description:
        titleValue !== "" ? descriptionValue : firstHouse.description,
      numBathroom:
        titleValue !== "" ? numBathroomValue : firstHouse.numBathroom,
      numBedroom: titleValue !== "" ? numBedroomValue : firstHouse.numBathroom,
    };
    EditHouse({
      updatedHouse: { ...finalData, image },
      id: firstHouse?.id,
    });
    reset();
  }
  return (
    <div
      className="form-wrapper
    "
    >
      <form className="create-house-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="house-form-item">
          <label className="house-form-label"> Title </label>
          <input
            {...register("title", {
              required: "Title is required for creating AD!",
            })}
            type="text"
            className="house-form-input"
            disabled={isPending}
            defaultValue={title}
          />
        </div>
        {errors?.title ? <FormError error={errors?.title?.message} /> : null}
        <div className="house-form-item">
          <label className="house-form-label">Size</label>
          <input
            {...register("size", {
              required: "Size is required for creating AD!",
            })}
            type="number"
            className="house-form-input"
            min={1}
            max={100000}
            step={1}
            disabled={isPending}
            defaultValue={size}
          />
          {errors?.size ? <FormError error={errors?.size?.message} /> : null}
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Price</label>
          <input
            {...register("price", {
              required: "Price is required for creating AD!",
            })}
            type="number"
            className="house-form-input"
            min={1}
            max={100000000}
            step={1}
            disabled={isPending}
            defaultValue={price}
          />
          {errors?.price ? <FormError error={errors?.price?.message} /> : null}
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Made in</label>
          <input
            {...register("madeIn", {
              required: "Made in year is required for creating AD!",
            })}
            type="date"
            className="house-form-date"
            min={1}
            step={1}
            disabled={isPending}
            defaultValue={madeIn}
          />
          {errors?.madeIn ? (
            <FormError error={errors?.madeIn?.message} />
          ) : null}
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Address</label>
          <textarea
            {...register("address", {
              required: "Address is required for creating AD!",
            })}
            className="house-form-input"
            disabled={isPending}
            defaultValue={address}
          />
          {errors?.address ? (
            <FormError error={errors?.address?.message} />
          ) : null}
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required for creating AD!",
            })}
            className="house-form-input"
            disabled={isPending}
            defaultValue={description}
          />
          {errors?.description ? (
            <FormError error={errors?.description?.message} />
          ) : null}
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Number of bathrooms</label>

          <input
            type="number"
            className="house-form-input"
            {...register("numBathroom", {
              required:
                "descriptioner of bathrooms is required for creating AD!",
            })}
            max={10}
            min={1}
            disabled={isPending}
            defaultValue={numBathroom}
          />
          {errors?.numBathroom ? (
            <FormError error={errors?.numBathroom?.message} />
          ) : null}
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Number of bedrooms</label>
          <input
            {...register("numBedroom", {
              required: "Number of bedrooms is required for creating AD!",
            })}
            type="number"
            className="house-form-input"
            min={1}
            max={20}
            disabled={isPending}
            defaultValue={numBedroom}
          />
          {errors?.numBedroom ? (
            <FormError error={errors?.numBedroom?.message} />
          ) : null}
        </div>
        <div className="house-form-item">
          <label className="house-form-label">House Image</label>
          <input
            {...register("image")}
            type="file"
            className="house-form-input"
            disabled={isPending}
          />
        </div>
        <div className="button-wrapper">
          <button className="form-submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EditHouseForm;
