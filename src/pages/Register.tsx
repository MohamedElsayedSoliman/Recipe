import React from "react";

import { Box } from "@mui/material";

import signUpImage from "../assets/Images/signUp.jpg";

import SignUp from "../components/SignUp";

const Register: React.FC = () => {
  return (
    <Box
      sx={{
        background: "#141e30",
        minHeight: "130vh",

        backgroundImage: `url(${signUpImage})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <SignUp />
    </Box>
  );
};

export default Register;
