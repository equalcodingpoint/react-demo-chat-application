import React from "react";
// import firebaseConfig from "../../firebase/config";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Link } from "react-router-dom";
function SignUp() {


  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_lame: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    // password: Yup.string().required("password is required"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Pasword must be 8 or more characters")
      .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
      .matches(/\d/, "Password should contain at least one number")
      .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
    termsCondition: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;



  function onSubmit(e) {
    console.log("e=====>e", e);
    //Backend API Call operation is handled here.
  }



  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { email, password } = e.target.elements;
  //   console.log("email=>", email, password)
  //   try {
  //     firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} id="reset" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="first_name"
                required
                fullWidth
                id="first_name"
                label="First Name"
                autoFocus
                {...register("first_name")}
              />
              <div className="text-red-500 ml-2 mt-2">{errors.first_name?.message}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="last_lame"
                label="Last Name"
                name="last_lame"
                autoComplete="family-name"
                {...register("last_lame")}
              />
              <div className="text-red-500 ml-2 mt-2">{errors.last_lame?.message}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register("email")}
              />
              <div className="text-red-500 ml-2 mt-2">{errors.email?.message}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                {...register("password")}
              />
              <div className="text-red-500 ml-2 mt-2">{errors.password?.message}</div>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                name="termsCondition"
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Terms and Conditions."
              />
              <div className="text-red-500 ml-2 mt-2">{errors.termsCondition?.message}</div>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default SignUp