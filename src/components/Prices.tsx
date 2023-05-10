import React from "react";
import { Typography, Grid, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Features {
  [key: string]: string;
}

const Prices: React.FC = () => {
  const navigate = useNavigate();
  const PricesData: Features[] = [
    {
      price: "$4",
      pro: "/Year",
      numberOfRecipes: "4 Recipes Videos/day",
      firstFeature: "lifetime video watching",
      secondFeature: "5 users allowed",
      thirdFeature: "3 Professional Mentors /User",
      fourthFeature: "4k videos",
      fifthFeature: "24/7 support",
      sixthFeature: "Chat support",
      seventhFeature: "Easy and secure sharing",
      buttonName: "Select Plan",
      className: "glass",
    },
    {
      price: "$20",
      pro: "/Year",
      numberOfRecipes: "25 Recipes Videos /day",
      firstFeature: "lifetime video watching",
      secondFeature: "unlimited users allowed",
      thirdFeature: "5 Professional Mentors/User",
      fourthFeature: "8k videos",
      fifthFeature: "24/7 support",
      sixthFeature: "Chat support",
      seventhFeature: "Easy and secure sharing",
      buttonName: "Select Plan",
      className: "glass",
      mb: "100px",
    },
    {
      price: "$10",
      pro: "/Year",
      numberOfRecipes: "10 Recipes Videos/Month",
      firstFeature: "lifetime video watching",
      secondFeature: "2 users allowed",
      thirdFeature: "1 Professional Mentors/User",
      fourthFeature: "4k videos",
      fifthFeature: "24/7 support",
      sixthFeature: "Chat support",
      seventhFeature: "Easy and secure sharing",
      buttonName: "Select Plan",
      className: "glass",
    },
  ];
  return (
    <>
      <Typography
        fontWeight="800"
        fontSize={{ md: "50px", xs: "25px" }}
        align="center"
        pb="100px"
        style={{
          background: "linear-gradient(to right, #bdc3c7, #2c3e50) ",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Prices
      </Typography>

      <Container className="wrapper">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          {PricesData.map((item, idx) => {
            return (
              <Grid
                item
                xs={4}
                sm={4}
                md={3}
                className={item.className}
                mb={item.mb}
                key={idx}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom={true}
                  color="white"
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.5rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.price}

                  <Typography
                    variant="h6"
                    color="white"
                    component="span"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {" "}
                    {item.pro}
                  </Typography>
                </Typography>
                <Typography
                  color="white"
                  variant="subtitle1"
                  component="p"
                  sx={{
                    fontSize: { sm: "0.9rem", xs: "0.4rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  {item.numberOfRecipes}
                </Typography>
                <Typography
                  color="white"
                  variant="subtitle1"
                  component="p"
                  sx={{
                    fontSize: { sm: "0.9rem", xs: "0.4rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  {item.firstFeature}
                </Typography>
                <Typography
                  color="white"
                  variant="subtitle1"
                  component="p"
                  sx={{
                    fontSize: { sm: "0.9rem", xs: "0.4rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  {item.secondFeature}
                  {}
                </Typography>
                <Typography
                  color="white"
                  variant="subtitle1"
                  component="p"
                  sx={{
                    fontSize: { sm: "0.9rem", xs: "0.4rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  {item.thirdFeature}
                </Typography>
                <Typography
                  color="white"
                  variant="subtitle1"
                  component="p"
                  sx={{
                    fontSize: { sm: "0.9rem", xs: "0.4rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.fourthFeature}
                </Typography>
                <Typography
                  color="white"
                  variant="subtitle1"
                  component="p"
                  sx={{
                    fontSize: { sm: "0.9rem", xs: "0.4rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.fifthFeature}
                </Typography>
                <Typography
                  color="white"
                  variant="subtitle1"
                  component="p"
                  sx={{
                    fontSize: { sm: "0.9rem", xs: "0.4rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  {item.sixthFeature}
                </Typography>

                <Typography
                  color="white"
                  variant="subtitle1"
                  component="p"
                  paragraph={true}
                  sx={{
                    fontSize: { sm: "0.9rem", xs: "0.4rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.seventhFeature}
                </Typography>
                <Button
                  className="button"
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    width: {
                      lg: "173px",
                      md: "173px",
                      sm: "120px",
                      xs: "30px",
                    },
                    height: { md: "55px", sm: "45px", xs: "20px" },
                    position: "absolute",
                    margin: "auto",
                    left: "0",
                    right: "0",

                    fontSize: { lg: "20px", md: "20px", sm: "14px", xs: "8px" },
                  }}
                  onClick={() =>
                    navigate("/payment", { state: PricesData[idx].price })
                  }
                >
                  {item.buttonName}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Prices;
