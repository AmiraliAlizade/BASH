import { useForm } from "react-hook-form";
import "./CreateHouseForm.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createHouse } from "../../services/apiHouses";
import toast from "react-hot-toast";

function CreateHouseForm() {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const {
    isLoading,
    mutate: CreateHouse,
    error,
  } = useMutation({
    mutationFn: createHouse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["houses"],
      });
      toast.success("The house was successfully created!", {
        duration: 3000,
        position: "top-center",
      });
    },
    onError: () => {
      toast.error("The house can't be created!", {
        duration: 5000,
        position: "top-center",
      });
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
            {...register("title", { required: "This field is required!" })}
            type="text"
            className="house-form-input"
          />
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Size</label>
          <input
            {...register("size", { required: "This field is required!" })}
            type="number"
            className="house-form-input"
            min={1}
            step={1}
          />
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Price</label>
          <input
            {...register("price", { required: "This field is required!" })}
            type="number"
            className="house-form-input"
            min={1}
            step={1}
          />
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Made in</label>
          <input
            {...register("madeIn", { required: "This field is required!" })}
            type="number"
            className="house-form-input"
            min={1}
            step={1}
          />
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Address</label>
          <textarea
            {...register("address", { required: "This field is required!" })}
            className="house-form-input"
          />
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Description</label>
          <textarea
            {...register("description", {
              required: "This field is required!",
            })}
            className="house-form-input"
          />
        </div>
        <div className="house-form-item">
          <label className="house-form-label">Number of bathrooms</label>

          <input
            type="number"
            className="house-form-input"
            {...register("numBathroom", {
              required: "This field is required!",
            })}
          />
        </div>{" "}
        <div className="house-form-item">
          <label className="house-form-label">Number of bedrooms</label>
          <input
            {...register("numBedroom", { required: "This field is required!" })}
            type="number"
            className="house-form-input"
          />
        </div>
        <div className="house-form-item">
          <label className="house-form-label">House Image</label>
          <input
            {...register("image")}
            type="file"
            className="house-form-input"
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
