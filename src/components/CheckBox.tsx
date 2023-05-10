import React from "react";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useFormikContext } from "formik";

type Props = {
  legend: string;
  label: string;
  name: string;
};

const CheckBox: React.FC<Props> = ({ name, label, legend }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <FormGroup>
      <Typography
        sx={{
          background: "linear-gradient(to right, #bdc3c7, #2c3e50) ",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "800",
          fontSize: "2em",
          marginBottom: "10px",
        }}
      >
        {legend}
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            sx={{
              color: "white",

              "&.Mui-checked": {
                color: "#03e9f4",
              },
            }}
            onChange={(e) => setFieldValue(name, e.target.checked)}
          />
        }
        label={
          <Typography
            sx={{
              color: "#bdc3c7",
            }}
          >
            {label}
          </Typography>
        }
      />
    </FormGroup>
  );
};
export default CheckBox;
