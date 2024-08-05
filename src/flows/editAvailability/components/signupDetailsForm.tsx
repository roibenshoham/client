import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useSignupState } from "../data/signupState";

export const SignupDetailsForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setSignupDetails, signupDetails } = useSignupState();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    setSignupDetails({
      ...signupDetails,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    navigate("/signin");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h3>An email has been sent to you with a pincode</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("firstName", { required: true })}
          label="First Name"
          fullWidth
          error={!!errors.firstName}
          helperText={errors.firstName ? "First Name is required" : ""}
          margin="normal"
        />
        <TextField
          {...register("lastName", { required: true })}
          label="Last Name"
          fullWidth
          error={!!errors.lastName}
          helperText={errors.lastName ? "Last Name is required" : ""}
          margin="normal"
        />
        <TextField
          {...register("email", { required: false })}
          label="Email"
          fullWidth
          disabled
          defaultValue={signupDetails.email}
          margin="normal"
        />
        <div style={{ marginTop: "1rem" }}>
          <TextField
            {...register("pincode", { required: true })}
            label="Pincode"
            fullWidth
            error={!!errors.pincode}
            helperText={errors.pincode ? "Pincode is required" : ""}
            margin="normal"
          />
        </div>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sgin Up
        </Button>
      </form>
    </div>
  );
};
