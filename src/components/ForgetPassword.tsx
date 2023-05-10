import React, { useId, useState } from "react";
import * as Yup from "yup";
import { Formik, FormikProps } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { Box } from "@mui/material";

import signUpImage from "../assets/Images/signUp.jpg";


interface ResetPassword {
  email: string;
}

const ForgetPassword: React.FC  = () => {
  const [error, setError] = useState<string>("");

  const { ResetEmail } = useAuthContext();

  const id = useId();

  const navigate = useNavigate();

  let validationSchemas = Yup.object().shape({
    email: Yup.string().email().required(" Please Enter a valid email"),
  });
  return (
    <Box
      sx={{
        background: "#141e30",
        minHeight: "100vh",
        backgroundImage: `url(${signUpImage})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="login-box">
        <h2>Reset Password</h2>

        <Formik<ResetPassword>
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchemas}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(false);

            try {
              await ResetEmail(values.email);

              navigate("/Register");
            } catch (e) {
              setError((e as Error).message);
            }
          }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            handleBlur,
            touched,
            errors,
          }: FormikProps<ResetPassword>) => (
            <form onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  type="text"
                  name="email"
                  required
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  autoComplete="true"
                />
                <label htmlFor={id + "-email"}>Email</label>
                {touched.email && errors.email && (
                  <span className="invalid">{errors.email}</span>
                )}
              </div>

              {error && (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    marginBottom: "30px",
                    fontFamily: "Rubik",
                    fontWeight: "bold",
                  }}
                >
                  <span> Invalid Email </span>
                </div>
              )}

              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  marginBottom: "30px",
                  fontFamily: "Rubik",
                  fontWeight: "bold",
                }}
              >
                <span>
                  {" "}
                  Please check your Spam before making a new request.
                </span>
              </div>

              <button
                type="submit"
                style={{ display: "block", margin: "auto" }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Reset Password
              </button>

              <div style={{ marginTop: "20px" }}>
                <Link
                  to="/SignIn"
                  style={{
                    color: "#6c757d",
                    fontSize: "1.1em",
                    textDecoration: "none",
                    fontFamily: "Rubik",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  Already a Member?{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {" "}
                    Log In{" "}
                  </span>
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Box>
  );
}

export default ForgetPassword;
