import { useForm } from "react-hook-form";
import "./CreateHouseForm.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createHouse } from "../../services/apiHouses";
import toast from "react-hot-toast";
import FormError from "../../ui/FormError";

function CreateHouseForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  const {
    mutate: CreateHouse,
    isPending,
    error,
  } = useMutation({
    mutationFn: createHouse,
    onSuccess: () => {
      toast.success("The house was successfully created!", {
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

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    CreateHouse({ ...data, image: image });
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
            step={1}
            disabled={isPending}
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
            step={1}
            disabled={isPending}
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
            disabled={isPending}
          />
          {errors?.numBathroom ? (
            <FormError error={errors?.numBathroom?.message} />
          ) : null}
        </div>{" "}
        <div className="house-form-item">
          <label className="house-form-label">Number of bedrooms</label>
          <input
            {...register("numBedroom", {
              required: "Number of bedrooms is required for creating AD!",
            })}
            type="number"
            className="house-form-input"
            disabled={isPending}
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

export default CreateHouseForm;
