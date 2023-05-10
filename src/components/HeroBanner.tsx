import { Typography, Grid, Stack } from "@mui/material";
import couple from "../assets/Images/couple.jpg";
import React from "react";

const HeroBanner: React.FC = () => {
  return (
    <>
      <Grid container spacing={2} mt="50px">
        <Grid item xs={6}>
          <Typography
            sx={{
              fontSize: { lg: "3.5em", md: "3em", sm: "2em", xs: "1.2em" },
              marginTop: { xs: "20px" },
            }}
            fontWeight="900"
            fontFamily="Rubik"
            color="white"
          >
            Let's start cooking with us our Popular Recipes
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "1.8em", md: "1em", sm: "1em", xs: "0.9em" },
            }}
            fontWeight="200"
            color="white"
            fontFamily="Rubik"
            mt="20px"
          >
            want to learn cook but confused how to start? No need to worry
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center" alignSelf="center">
          <img src={couple} alt="recipe" className="recipeImg" />
        </Grid>
      </Grid>

      <Stack direction="row" justifyContent="center" mt="10rem">
        <Typography
          fontSize={{ md: "1.25em", sm: "1em", xs: "0.75em" }}
          lineHeight={3}
          align="justify"
          fontFamily="Rubik"
          style={{
            color: "white",
          }}
          sx={{ maxWidth: { md: "30rem", sm: "20rem", xs: "15rem" } }}
        >
          {" "}
          You are bored from thinking about good recipe for tomorrow's dinner.As
          well as you don't know what ingredient you should need . Leave this
          mission on us, we will plan for you very healthy and tasty food,that
          you can cook everyday for yourself
        </Typography>
      </Stack>
    </>
  );
};

export default HeroBanner;
