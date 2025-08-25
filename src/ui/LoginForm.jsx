import { useMutation } from "@tanstack/react-query";
import { signIn, signUp } from "../services/apiAuthentication";

function LoginForm() {
  const {
    mutate: signUp,
    isPending,
    error,
  } = useMutation({
    mutationFn: signUp,
  });

  return (
    <form>
      <div className="auth-form-item">
        <label className="auth-form-label"> Email </label>
        <input
          {...register("email", {
            required: "Email is required !",
          })}
          type="text"
          className="auth-form-input"
          disabled={isPending}
        />
      </div>
      {/* {errors?.title ? <FormError error={errors?.title?.message} /> : null} */}
      <div className="auth-form-item">
        <label className="house-form-label">Size</label>
        <input
          {...register("password", {
            required: "Password is required !",
          })}
          type="number"
          className="auth-form-input"
          min={1}
          max={100000}
          step={1}
          disabled={isPending}
        />
        {/* {errors?.size ? <FormError error={errors?.size?.message} /> : null} */}
      </div>

      <div className="button-wrapper">
        <button className="form-submit-button">Sign Up</button>
      </div>
    </form>
  );
}

export default LoginForm;
