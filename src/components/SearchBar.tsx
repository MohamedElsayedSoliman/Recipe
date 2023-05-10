import React from "react";
import { TextField, Button, Grid } from "@mui/material";

import { useDataContext } from "../Context/data";

type Props = {
  search: string;

  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ search, setSearch }: Props) => {
  const { recipeData } = useDataContext();

  const handleSearch = () => {
    if (search) {
      recipeData.filter((item: any) =>
        item.name.toLowerCase().includes(search)
      );
    }

    setSearch("");
  };

  return (
    <Grid container mt="6.25em" justifyContent="center">
      <Grid item xs={8} md={6}>
        <TextField
          fullWidth
          sx={{
            input: {
              fontWeight: "700",
              "&::placeholder": {
                color: "black !important",
                opacity: "0.6 !important",
                fontSize: { xs: "12px" },
              },
            },

            background: "linear-gradient(to Right, #bdc3c7, #2c3e50) ",
            borderBottomLeftRadius: "30px",
            borderTopLeftRadius: "30px",
            "& fieldset": { border: "none" },
            label: { color: "black" },
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Recipe"
          type="text"
        />
      </Grid>
      <Grid item alignItems="stretch" style={{ display: "flex" }}>
        <Button
          className="btn-hover-two"
          sx={{
            color: "#fff",
            textTransform: "none",
            fontSize: { lg: "20px", md: "20px", xs: "12px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
