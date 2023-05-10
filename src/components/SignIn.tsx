import React, { useId, useState } from "react";
import * as Yup from "yup";
import { Formik, FormikProps } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { Box } from "@mui/material";

import signUpImage from "../assets/Images/signUp.jpg";
import Divider from "@mui/material/Divider";
import { Chip } from "@mui/material";

interface signIn {
  password: string;
  email: string;
}



const SignIn : React.FC = () => {
  const [error, setError] = useState<string>("");
  const id = useId();
  const navigate = useNavigate();
  const { signIn, googleSignIn } = useAuthContext();

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  let validationSchemas = Yup.object().shape({
    email: Yup.string().email().required(" Please Enter a valid email"),
    password: Yup.string()
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/)
      .required(
        "Please Enter a valid password.One uppercase,one lowercase,one special character and no spaces"
      ),
  });
  return (
    <Box
      sx={{
        background: "#141e30",
        minHeight: "110vh",
        backgroundImage: `url(${signUpImage})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="login-box" style={{ top: "55%" }}>
        <h2>Sign In</h2>
        <Formik<signIn>
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchemas}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(false);

            try {
              await signIn(values.email, values.password);

              navigate("/");
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
          }: FormikProps<signIn>) => (
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
              <div className="user-box">
                <input
                  type="password"
                  required
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  autoComplete="true"
                />
                <label htmlFor={id + "-password"}>Password</label>
                {touched.password && errors.password && (
                  <span className="invalid">{errors.password}</span>
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
                  <span> Invalid Email or Password </span>
                </div>
              )}

              <div style={{ marginBottom: "30px" }}>
                <Link
                  to="/forgetPassword"
                  style={{
                    color: "rgb(106 155 187)",
                    fontSize: "1.1em",
                    textDecoration: "none",
                    fontFamily: "Rubik",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      color: "white",
                    }}
                  >
                    Did you forget your password?
                  </span>
                </Link>
              </div>

              <button
                type="submit"
                style={{ display: "block", margin: "auto" }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign In
              </button>

              <Divider
                component="li"
                sx={{
                  "&::before, &::after": {
                    borderColor: "#6c757d",
                  },
                  marginTop: "30px",
                  "&.MuiDivider-root": {
                    "&::before": {
                      borderTop: "3px solid #6c757d ",
                    },
                    "&::after": {
                      borderTop: "3px solid  #6c757d",
                    },
                  },
                }}
              >
                <Chip
                  label="or"
                  sx={{ backgroundColor: "#6c757d", color: "white" }}
                />
              </Divider>

              <button className="google-btn" onClick={handleGoogleLogin}>
                Sign In with Google
              </button>

              <div style={{ marginTop: "40px" }}>
                <Link
                  to="/Register"
                  style={{
                    color: "#6c757d",
                    fontSize: "1.1em",
                    textDecoration: "none",
                    fontFamily: "Rubik",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  New Member?{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {" "}
                    Register Now{" "}
                  </span>
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Box>
  );
};

export default SignIn;
