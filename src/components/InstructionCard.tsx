import React from "react";
import { Grid, Typography } from "@mui/material";

import { Recipe } from "../Context/data";
type Props = {
  recipeData: Recipe[];
  recipeName: string;
};

const InstructionCard = ({ recipeData, recipeName }: Props) => {
  let text = "Instruction";

  return (
    <>
      {recipeData
        .filter((item: any) => item.name === recipeName)
        .map((item: any, idx: number) => {
          return (
            <Grid
              container
              mb="100px"
              gap={3}
              key={idx}
              justifyContent="center"
            >
              <Grid item xs={12} sm={5} marginTop={7}>
                <img
                  src={item.thumbnail_url}
                  className="instruction-img"
                  loading="lazy"
                  alt="img"
                />
              </Grid>
              <Grid
                item
                md={5}
                sm={5}
                xs={12}
                sx={{ marginTop: { xs: "10px" } }}
              >
                <Typography
                  color="white"
                  fontSize={{ md: "3rem", xs: "2rem" }}
                  align="center"
                  fontFamily="Rubik"
                  fontWeight="800"
                >
                  {text}
                </Typography>
                <Typography
                  color="white"
                  fontSize={{ md: "1em", sm: "0.95em", xs: "0.6rem" }}
                  align="justify"
                  fontFamily="Rubik"
                >
                  <span style={{ color: "red" }}> 1. </span>{" "}
                  {item.instructions[0].display_text}{" "}
                </Typography>
                <Typography
                  color="white"
                  fontSize={{ md: "1em", sm: "0.95em", xs: "0.6rem" }}
                  align="justify"
                  fontFamily="Rubik"
                >
                  <span style={{ color: "red" }}> 2. </span>
                  {item.instructions[1].display_text}{" "}
                </Typography>
                <Typography
                  color="white"
                  fontSize={{ md: "1em", sm: "0.95em", xs: "0.6rem" }}
                  align="justify"
                  fontFamily="Rubik"
                >
                  <span style={{ color: "red" }}> 3. </span>{" "}
                  {item.instructions[2].display_text}{" "}
                </Typography>
                <Typography
                  color="white"
                  fontSize={{ md: "1em", sm: "0.95em", xs: "0.6rem" }}
                  align="justify"
                  fontFamily="Rubik"
                >
                  <span style={{ color: "red" }}> 4. </span>{" "}
                  {item.instructions[3].display_text}{" "}
                </Typography>
                <Typography
                  color="white"
                  fontSize={{ md: "1em", sm: "0.95em", xs: "0.6rem" }}
                  align="justify"
                  fontFamily="Rubik"
                >
                  <span style={{ color: "red" }}> 5.</span>{" "}
                  {item.instructions[4].display_text}{" "}
                </Typography>
                <Typography
                  color="white"
                  fontSize={{ md: "1em", sm: "0.95em", xs: "0.6rem" }}
                  align="justify"
                  fontFamily="Rubik"
                >
                  <span style={{ color: "red" }}> 6. </span>{" "}
                  {item.instructions[5].display_text}{" "}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
    </>
  );
};

export default InstructionCard;
