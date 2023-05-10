import React, { useId } from "react";
import * as Yup from "yup";
import { Formik, FormikProps } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase/firebaseDatabase";

interface signUp {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  confirmPassword: string;
}



const SignUp : React.FC = () =>  {
  const id = useId();
  const userId = uuidv4();

  const userCollection = collection(db, "users");

  const navigate = useNavigate();
  const { register } = useAuthContext();

  let validationSchemas = Yup.object().shape({
    email: Yup.string().email().required(" Please Enter a valid email"),
    firstName: Yup.string().required("Please Enter a valid First name"),
    lastName: Yup.string().required("Please Enter a valid Last name"),
    password: Yup.string()
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/)
      .required(
        "Please Enter a valid password.One uppercase,one lowercase,one special character and no spaces"
      ),
    confirmPassword: Yup.string()
      .required("Please Confirm Your Password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  return (
    <div className="login-box">
      <h2>Sign Up</h2>

      <Formik<signUp>
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchemas}
        onSubmit={async (values, actions) => {
          console.log(values);

          actions.setSubmitting(false);

          try {
            await register(values.email, values.password);

            await addDoc(userCollection, {
              firstName: values.firstName,
              email: values.email,
              LastName: values.lastName,
              password: values.password,
              confirmPassword: values.confirmPassword,
              id: userId,
            });

            navigate("/");
          } catch (e) {
            console.log((e as Error).message);
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
        }: FormikProps<signUp>) => (
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                required
                autoComplete="true"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                onBlur={handleBlur}
              />
              <label htmlFor={id + "-firstName"}>First Name</label>
              {touched.firstName && errors.firstName && (
                <span className="invalid">{errors.firstName}</span>
              )}
            </div>
            <div className="user-box">
              <input
                type="text"
                required
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                onBlur={handleBlur}
                autoComplete="true"
              />
              <label htmlFor={id + "-lastName"}>Last Name</label>
              {touched.lastName && errors.lastName && (
                <span className="invalid">{errors.lastName}</span>
              )}
            </div>
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
            <div className="user-box">
              <input
                type="password"
                required
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
                onBlur={handleBlur}
                autoComplete="true"
              />
              <label htmlFor={id + "-confirmPassword"}> Confirm Password</label>
              {touched.confirmPassword && errors.confirmPassword && (
                <span className="invalid">{errors.confirmPassword}</span>
              )}
            </div>

            <button type="submit" style={{ display: "block", margin: "auto" }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
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
  );
};

export default SignUp;
