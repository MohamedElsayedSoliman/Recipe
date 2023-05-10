import React, { useEffect } from "react";
import { Typography, Grid, TextField, Container } from "@mui/material";
import * as Yup from "yup";
import { SxProps } from "@mui/system";
import TimePicker from "../components/DatePicker";

import Select from "../components/countrySelect";
import CheckBox from "../components/CheckBox";

import { Formik, FormikProps, Form } from "formik";
import valid from "card-validator";
import { useLocation, useNavigate } from "react-router-dom";

import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase/firebaseDatabase";
import { useDataContext } from "../Context/data";

interface PaymentType {
  firstName: string;
  lastName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  cvc: string;
  nameOnCard: string;
  creditCardNumber: string;
  expiryMonthAndYear: null;
  city: string;
  state: string;
  country: string;
  message: string;
  termsOfService: boolean;
}

const Payment: React.FC = () => {
  const userId = uuidv4();

  const userCollection = collection(db, "PaymentInformation");

  const navigate = useNavigate();
  const location = useLocation();
  const { setPrice, setPay } = useDataContext();

  const priceData: string | null = location.state;

  useEffect(() => {
    setPrice(priceData);
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, [priceData]);

  const style: SxProps = {
    "& label": {
      color: "#fff",
    },
    "& label.Mui-focused": {
      color: "#03e9f4",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "hsla(0,0%,100%,0.2)",
      },
      "&:hover fieldset": {
        borderColor: "#03e9f4",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#03e9f4",
      },

      "&:hover .MuiOutlinedInput-input": {
        color: "#03e9f4",
      },
      ".MuiOutlinedInput-input": {
        color: "white",
      },

      svg: {
        color: "#fff",
        "&:hover": {
          color: "#03e9f4",
        },
      },
      input: { color: "#fff" },
    },
  };

  const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    cvc: "",
    nameOnCard: "",
    creditCardNumber: "",
    expiryMonthAndYear: null,
    city: "",
    state: "",
    country: "",
    message: "",
    termsOfService: false,
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("required"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("required"),
    phone: Yup.number()
      .integer()
      .typeError("invalid phone number")
      .required("required"),
    postalCode: Yup.string()
      .test(
        "test-number", // this is used internally by yup
        "Postal Code is invalid", //validation message
        (value) => valid.postalCode(value).isValid
      ) // return true false based on validation
      .required(),

    addressLine1: Yup.string().required("required"),
    addressLine2: Yup.string(),
    city: Yup.string().required("required"),
    state: Yup.string().required("required"),
    country: Yup.string().required("required"),
    message: Yup.string(),
    creditCardNumber: Yup.string()
      .test(
        "test-number",
        "Credit Card number is invalid",
        (value) => valid.number(value).isValid
      )
      .required(),
    cvc: Yup.string()
      .test(
        "test-number",
        "CVC is invalid",
        (value) => valid.cvv(value).isValid
      )
      .required(),

    nameOnCard: Yup.string().required(),
    expiryMonthAndYear: Yup.string()
      .nullable()
      .test(
        "test-number",
        "Expiry Month and Year is invalid",
        (value) => valid.expirationDate(value).isValid
      )
      .required(),
    termsOfService: Yup.boolean()
      .oneOf([true], "The terms and conditions must be accepted")
      .required("The terms and conditions must be accepted"),
  });
  return (
    <Grid
      container
      sx={{
        // background: "#2c3e50",
        // opacity: "0.9",
        background: "#1E293B",
      }}
    >
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Container
            sx={{
              marginTop: 5,
              marginBottom: 8,
            }}
          >
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={async (values, actions) => {
                try {
                  console.log(values);
                  await addDoc(userCollection, {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    phone: values.phone,
                    addressLine1: values.addressLine1,
                    addressLine2: values.addressLine2,
                    postalCode: values.postalCode,
                    cvc: values.cvc,
                    nameOnCard: values.nameOnCard,
                    creditCardNumber: values.creditCardNumber,
                    expiryMonthAndYear: values.expiryMonthAndYear,
                    city: values.city,
                    state: values.state,
                    country: values.country,
                    message: values.message,
                    termsOfService: values.termsOfService,
                    id: userId,
                    price: priceData,
                  });

                  setPay(true);
                  actions.setSubmitting(false);
                  navigate("/recipe");
                } catch (e) {
                  console.log((e as Error).message);
                }
              }}
            >
              {({
                handleChange,
                handleSubmit,
                values,

                touched,
                errors,
              }: FormikProps<PaymentType>) => (
                <Form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          background:
                            "linear-gradient(to right, #bdc3c7, #2c3e50) ",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "800",
                          fontSize: { md: "3rem", xs: "2rem" },
                        }}
                      >
                        {" "}
                        Your Details
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth={true}
                        variant="outlined"
                        name="firstName"
                        label="First Name"
                        sx={style}
                        onChange={handleChange}
                        value={values.firstName}
                        error={Boolean(touched.firstName && errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth={true}
                        variant="outlined"
                        name="lastName"
                        label="Last Name"
                        sx={style}
                        onChange={handleChange}
                        value={values.lastName}
                        error={Boolean(touched.lastName && errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth={true}
                        variant="outlined"
                        name="postalCode"
                        label="Postal Code"
                        sx={style}
                        onChange={handleChange}
                        value={values.postalCode}
                        error={Boolean(touched.postalCode && errors.postalCode)}
                        helperText={touched.postalCode && errors.postalCode}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth={true}
                        variant="outlined"
                        name="phone"
                        label="Phone"
                        sx={style}
                        onChange={handleChange}
                        value={values.phone}
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          background:
                            "linear-gradient(to right, #bdc3c7, #2c3e50) ",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "800",
                          fontSize: { md: "3rem", xs: "2rem" },
                        }}
                      >
                        {" "}
                        Address
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth={true}
                        variant="outlined"
                        name="addressLine1"
                        label="Address Line 1"
                        sx={style}
                        onChange={handleChange}
                        value={values.addressLine1}
                        error={Boolean(
                          touched.addressLine1 && errors.addressLine1
                        )}
                        helperText={touched.addressLine1 && errors.addressLine1}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth={true}
                        variant="outlined"
                        name="addressLine2"
                        label="Address Line 2"
                        sx={style}
                        onChange={handleChange}
                        value={values.addressLine2}
                        error={Boolean(
                          touched.addressLine2 && errors.addressLine2
                        )}
                        helperText={touched.addressLine2 && errors.addressLine2}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth={true}
                        variant="outlined"
                        name="city"
                        label="City"
                        sx={style}
                        onChange={handleChange}
                        value={values.city}
                        error={Boolean(touched.city && errors.city)}
                        helperText={touched.city && errors.city}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth={true}
                        variant="outlined"
                        name="state"
                        label="State"
                        sx={style}
                        onChange={handleChange}
                        value={values.state}
                        error={Boolean(touched.state && errors.state)}
                        helperText={touched.state && errors.state}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Select
                        name="country"
                        value={values.country}
                        sx={style}
                        error={Boolean(touched.country && errors.country)}
                        helperText={touched.country && errors.country}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          background:
                            "linear-gradient(to right, #bdc3c7, #2c3e50) ",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "800",
                          fontSize: { md: "3rem", xs: "2rem" },
                        }}
                      >
                        {" "}
                        Booking Information
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth={true}
                        variant="outlined"
                        name="nameOnCard"
                        label="Name on Card"
                        sx={style}
                        onChange={handleChange}
                        value={values.nameOnCard}
                        error={Boolean(touched.nameOnCard && errors.nameOnCard)}
                        helperText={touched.nameOnCard && errors.nameOnCard}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth={true}
                        variant="outlined"
                        name="creditCardNumber"
                        label="Credit Card Number"
                        sx={style}
                        onChange={handleChange}
                        value={values.creditCardNumber}
                        error={Boolean(
                          touched.creditCardNumber && errors.creditCardNumber
                        )}
                        helperText={
                          touched.creditCardNumber && errors.creditCardNumber
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth={true}
                        variant="outlined"
                        name="cvc"
                        label="CVC"
                        sx={style}
                        onChange={handleChange}
                        value={values.cvc}
                        error={Boolean(touched.cvc && errors.cvc)}
                        helperText={touched.cvc && errors.cvc}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TimePicker
                        sx={style}
                        label="Expiry Month and Year"
                        value={values.expiryMonthAndYear}
                        name="expiryMonthAndYear"
                        error={Boolean(
                          touched.expiryMonthAndYear &&
                            errors.expiryMonthAndYear
                        )}
                        helperText={
                          touched.expiryMonthAndYear &&
                          errors.expiryMonthAndYear
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="message"
                        label="Message"
                        multiline={true}
                        fullWidth={true}
                        variant="outlined"
                        rows={4}
                        sx={style}
                        onChange={handleChange}
                        value={values.message}
                        error={Boolean(touched.message && errors.message)}
                        helperText={touched.message && errors.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CheckBox
                        name="termsOfService"
                        legend="Terms Of Service"
                        label="I agree to the Terms Of Service"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <button
                        type="submit"
                        disabled={!priceData}
                        className="submit-btn"
                      >
                        Pay Now {priceData}
                      </button>
                      {!priceData ? (
                        <Typography
                          sx={{
                            color: "white",
                            textAlign: "center",
                            marginTop: "50px",
                            fontFamily: "Rubik",
                            fontWeight: "bold",
                            fontSize: { md: "1.25rem", xs: "1rem" },
                          }}
                        >
                          Please Select Plan before Proceding Payment
                        </Typography>
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Container>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Payment;
