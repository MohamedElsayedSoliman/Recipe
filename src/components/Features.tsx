import React from "react";

import { Typography, Grid } from "@mui/material";

const Features: React.FC = () => {
  return (
    <>
      <Typography
        fontWeight="800"
        fontSize={{ md: "50px", xs: "25px" }}
        fontFamily="Rubik"
        align="center"
        mt="100px"
        style={{
          background: "linear-gradient(to right, #bdc3c7, #2c3e50) ",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {" "}
        Our service
      </Typography>

      <Grid container spacing={2} mt={{ md: "63px", sm: "13px", xs: "0px" }}>
        <Grid item xs={6} mt="100px">
          <Typography
            fontWeight="800"
            fontFamily="Rubik"
            sx={{ fontSize: { md: "1.2rem", sm: "1rem", xs: "0.65rem" } }}
            color="white"
            align="center"
          >
            Food of the World
          </Typography>

          <Typography
            fontWeight="500"
            fontFamily="Rubik"
            color="#94a3b8"
            mt="30px"
            align="justify"
            variant="body1"
            lineHeight="2"
            letterSpacing="2"
            sx={{ fontSize: { sm: "0.9rem", xs: "0.55rem" } }}
          >
            {" "}
            We have amazing Recipes from all over the world that are made by
            professional chef and fit to your taste{" "}
          </Typography>
        </Grid>
        <Grid item xs={6} mt="100px" mb="100px">
          <Typography
            fontWeight="800"
            fontFamily="Rubik"
            sx={{ fontSize: { md: "1.2rem", sm: "1rem", xs: "0.65rem" } }}
            color="white"
            align="center"
          >
            Restaurant Experience
          </Typography>
          <Typography
            fontWeight="500"
            fontFamily="Rubik"
            color="#94a3b8"
            mt="30px"
            align="justify"
            variant="body1"
            lineHeight="2"
            letterSpacing="2"
            sx={{ fontSize: { sm: "0.9rem", xs: "0.55rem" } }}
          >
            You can follow our Chef to make the same tasty and delicious food as
            in your favorite restaurants with cheap ingredients and easier
            instruction
          </Typography>
        </Grid>
        <Grid item xs={6} mb="100px">
          <Typography
            fontWeight="800"
            fontFamily="Rubik"
            sx={{ fontSize: { md: "1.2rem", sm: "1rem", xs: "0.65rem" } }}
            color="white"
            align="center"
          >
            Lifetime Recipe Videos
          </Typography>
          <Typography
            fontWeight="500"
            color="#94a3b8"
            fontFamily="Rubik"
            mt="30px"
            align="justify"
            variant="body1"
            lineHeight="2"
            letterSpacing="2"
            sx={{ fontSize: { sm: "0.9rem", xs: "0.55rem" } }}
          >
            You can watch our recipe videos for lifetime with paying one
            time.There is no need to pay monthly subscription.We also keep
            updating and adding new recipes everyday and we make all the time
            contracts with new professional chef.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            fontWeight="800"
            fontFamily="Rubik"
            color="white"
            sx={{ fontSize: { md: "1.2rem", sm: "1rem", xs: "0.65rem" } }}
            align="center"
          >
            Smart notifications
          </Typography>
          <Typography
            fontWeight="500"
            fontFamily="Rubik"
            color="#94a3b8"
            mt="30px"
            align="justify"
            variant="body1"
            lineHeight="2"
            letterSpacing="2"
            sx={{ fontSize: { sm: "0.9rem", xs: "0.55rem" } }}
          >
            As soon as there are new recipes and new chef available on our
            website. We will inform you of the new recipes by sending email to
            you to discover new recipes on our website and if you have question
            ,you can also directly ask our chef and contact him in person
          </Typography>
        </Grid>
        <Grid item xs={6} mb="100px" pb="200px">
          <Typography
            fontWeight="800"
            fontFamily="Rubik"
            sx={{
              fontSize: { md: "1.2rem", sm: "1rem", xs: "0.65rem" },
              whiteSpace: { xs: "nowrap" },
            }}
            color="white"
            align="center"
          >
            {" "}
            Easy to Share our Recipes
          </Typography>
          <Typography
            fontWeight="500"
            fontFamily="Rubik"
            color="#94a3b8"
            mt="30px"
            align="justify"
            variant="body1"
            lineHeight="2"
            letterSpacing="2"
            sx={{ fontSize: { sm: "0.9rem", xs: "0.55rem" } }}
          >
            It's also easier to share an online recipe that you and your family
            have loved. You can email or share it via Facebook or other social
            media platforms to your near and dear ones right away.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            fontWeight="800"
            fontFamily="Rubik"
            color="white"
            align="center"
            sx={{ fontSize: { md: "1.2rem", sm: "1rem", xs: "0.65rem" } }}
          >
            Eat fewer calories
          </Typography>
          <Typography
            fontWeight="500"
            fontFamily="Rubik"
            color="#94a3b8"
            mt="30px"
            pb={{ xs: "10px" }}
            align="justify"
            lineHeight="2"
            variant="body1"
            letterSpacing="2"
            sx={{ fontSize: { sm: "0.9rem", xs: "0.55rem" } }}
          >
            Restaurant meals are often heavy on butter and salt, however, our
            Recipes made by our professional chef, which tends to be more
            nutritious and contain fewer calories. As you cook for yourself, you
            control which ingredients you use with our professional chef and
            their quantities, therefore you will have a good health
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Features;
