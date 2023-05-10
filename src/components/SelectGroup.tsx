import React, { Dispatch, SetStateAction } from "react";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Checkbox, MenuItem, ListSubheader } from "@mui/material";

const SelectGroup = (props: {
  selected: string[] | any;
  setSelected: Dispatch<SetStateAction<string[] | any>>;
  country: any;
  data: any;
}) => {
  const isAllSelected =
    props.country.length > 0 && props.selected?.length === props.country.length;

  const handleChange = (event: SelectChangeEvent<typeof props.selected>) => {
    const value = event.target.value;

    if (value[value.length - 1] === "All") {
      props.setSelected(
        props.selected?.length === props.country.length ? [] : props.country
      );
      return;
    }
    props.setSelected(value);
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 143,
        width: 150,
      },
      sx: {
        "& .MuiMenu-list": {
          paddingTop: 0,
          paddingBottom: 0,
        },

        "& .Mui-selected": {
          backgroundColor: "#104547 !important",
          opacity: 0.7,

          "&:hover": {
            backgroundColor: "#104547",
            opacity: 1,
          },
        },
      },
    },
  };

  function makeItems(data: any) {
    const items = [];
    for (let country of data) {
      items.push(
        <ListSubheader
          sx={{
            color: "white",
            backgroundColor: "#00414d",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          key={country.id}
        >
          {country.name}
        </ListSubheader>
      );
      for (let state of country.state) {
        items.push(
          <MenuItem
            key={state.id}
            value={state.name}
            sx={{
              backgroundColor: "#37b2b2",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#104547",
              },
            }}
          >
            <Checkbox
              key={state.label}
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "#03e9f4",
                },
              }}
              checked={props.selected?.includes(state.name)}
              inputProps={{ "aria-label": "controlled" }}
            />
            {state.name}
          </MenuItem>
        );
      }
    }
    return items;
  }

  return (
    <div>
      <FormControl
        sx={{
          mt: 9,

          minWidth: 250,

          backgroundColor: "#008199",
          borderRadius: "50px",
          border: "none",
          color: "white",
        }}
      >
        <Select
          labelId="mutiple-select-label"
          multiple
          displayEmpty
          value={props.selected || []}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em style={{ color: "white" }}>Select a Country</em>;
            }
            return (
              <em style={{ color: "white" }}>
                {selected.slice(-2).join(", ")}
              </em>
            );
          }}
          inputProps={{ "aria-label": "Without label" }}
          MenuProps={MenuProps}
          sx={{
            svg: {
              color: "#fff",
            },

            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
              boxShadow: "0 0 30px 0 #008199, 0 20px 25px 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "50px",
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
              boxShadow: "0 0 30px 0 #008199, 0 20px 25px 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "50px",
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor:
                "0 0 30px 0 #008199, 0 20px 25px 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "50px",
              border: "none",
              boxShadow: "0 0 30px 0 #008199, 0 20px 25px 0 rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <MenuItem
            value="All"
            sx={{
              color: "white",
              backgroundColor: "#4d001b",
              opacity: 0.7,
              fontWeight: "bold",
              padding: "10px",
              fontSize: "16px",
              "&:hover": {
                opacity: 0.5,
                backgroundColor: "#4d001b",
              },
              "&:focus": {
                backgroundColor: "#4d001b",
              },
            }}
          >
            <Checkbox
              checked={isAllSelected}
              indeterminate={
                props.selected?.length > 0 &&
                props.selected.length < props.country.length
              }
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "#03e9f4",
                },
              }}
              inputProps={{ "aria-label": "controlled" }}
            />
            All
          </MenuItem>
          {makeItems(props.data)}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectGroup;
