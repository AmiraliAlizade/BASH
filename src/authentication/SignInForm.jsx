import "./SignInForm.css";
import { UseAuth } from "../authentication/AuthContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("Sign In page");
  const { SignIn, isSigningIn } = UseAuth();

  async function onSubmit(data) {
    try {
      const { session } = await SignIn(data.email, data.password);
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
            disabled={isSigningIn}
          />
        </div>
        {errors?.email ? <FormError error={errors?.title?.message} /> : null}
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
            disabled={isSigningIn}
          />
          {errors?.password ? (
            <FormError error={errors?.password?.message} />
          ) : null}
        </div>
        <p>
          Don't have any account ? <Link to="/signUp"> Sign Up Now</Link>
        </p>
        <div className="button-wrapper">
          <button className="form-submit-button">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
