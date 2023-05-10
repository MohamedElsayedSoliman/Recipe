import React from "react";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/system";
import { useFormikContext } from "formik";

type Props = {
  label: string;
  name: string;
  value: any;
  sx: SxProps;
  error: boolean;
  helperText: string | false | undefined;
};

declare module "dayjs" {
  interface Dayjs {
    $d: any;
  }
}

const TimePicker: React.FC<Props> = ({
  sx,
  label,
  name,
  value,
  helperText,
  error,
}) => {
  const { setFieldValue } = useFormikContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        views={["year", "month"]}
        label={label}
        value={value}
        minDate={dayjs("2012-03-01")}
        maxDate={dayjs("2050-06-01")}
        onChange={(value) => {
          const val = value?.$d.toISOString();
          const date = new Date(val);
          const finalValue = date.getFullYear() + "-" + (date.getMonth() + 1);
          console.log(finalValue);
          setFieldValue("expiryMonthAndYear", finalValue, true);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            fullWidth={true}
            sx={sx}
            name={name}
            helperText={helperText}
            error={error}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
