import { useForm } from "react-hook-form";
import "./SignUpForm.css";
import { UseAuth } from "./AuthContext";
import { Link } from "react-router";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  const { SignUp } = UseAuth();

  async function onSubmit(data) {
    try {
      const result = await SignUp(data.email, data.password);
      // console.log(result?.msg);
    } catch (err) {
      console.error("Sign up error:", err);
    }
  }
  return (
    <div className="form-wrapper">
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="auth-form-item">
          <label className="auth-form-label"> Email </label>
          <input
            {...register("email", {
              required: "Email is required !",
            })}
            type="email"
            className="auth-form-input"
            disabled={false}
          />
        </div>
        {/* {errors?.title ? <FormError error={errors?.title?.message} /> : null} */}
        <div className="auth-form-item">
          <label className="auth-form-label">Password</label>
          <input
            {...register("password", {
              required: "Password is required !",
            })}
            type="password"
            className="auth-form-input"
            min={1}
            max={100000}
            step={1}
            disabled={false}
          />
          {/* {errors?.size ? <FormError error={errors?.size?.message} /> : null} */}
        </div>
        <p>
          Already you have an account ? <Link to="/signIn"> Sign In</Link>
        </p>
        <div className="button-wrapper">
          <button className="form-submit-button">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
