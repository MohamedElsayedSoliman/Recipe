import React from "react";
import { Container, Typography, Paper, Avatar } from "@mui/material";
import Photo from "../assets/Images/photo.jpg";
import Photo2 from "../assets/Images/photo2.jpg";
import Photo3 from "../assets/Images/photo3.jpg";

const Testimonials: React.FC = () => {
  return (
    <>
      <Container sx={{ background: "#131A25" }}>
        <Typography
          fontWeight="800"
          fontSize={{ md: "50px", xs: "25px" }}
          align="center"
          mt="100px"
          pb="100px"
          style={{
            background: "linear-gradient(to right, #bdc3c7, #2c3e50) ",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {" "}
          Testimonials
        </Typography>
        <div className="first">
          <Paper
            className="paper"
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(67,108,125,0.5)",
              width: { md: "60%", sm: "50%", xs: "50%" },
              display: "flex",
              alignItems: { md: "start", sm: "center", xs: "center" },
              justifyContent: { md: "start", sm: "center", xs: "center" },
              flexWrap: "wrap",
              postion: "relative",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={Photo}
              className="photo"
              sx={{ width: 137, height: 137 }}
            />
            <Typography component={"span"}>
              <blockquote className="txt">
                It fills me with pride to see how the amazing recipes variety
                you have on your website. The latest work you have done for our
                customers is outstanding and gives them so much value.
              </blockquote>
            </Typography>
            <Typography
              pt="50px"
              textAlign="start"
              fontSize={{ md: "1.5rem", xs: "1rem" }}
              color="#9cb3c9"
              ml="30px"
              fontWeight="bold"
              mb="10px"
            >
              Jessica Simpson
            </Typography>
          </Paper>
        </div>

        <div className="second">
          <Paper
            className="paper"
            sx={{
              background: "rgba(189,195,189,0.5)",
              backdropFilter: "blur(10px)",
              width: { md: "60%", sm: "50%", xs: "50%" },
              display: "flex",
              alignitems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              postion: "relative",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={Photo2}
              className="photo-two"
              sx={{ width: 137, height: 137 }}
            />
            <Typography component={"span"}>
              <blockquote className="txt">
                I wanted to say a massive thank you for the support you have
                given me and my family over recent weeks since I have joined the
                Recipe Monster App. I recommd everyone to subscribe in this
                website
              </blockquote>
            </Typography>
            <Typography
              pt="50px"
              textAlign="center"
              fontSize={{ md: "1.5rem", xs: "1rem" }}
              color="#9cb3c9"
              mr="30px"
              fontWeight="bold"
              pb="10px"
            >
              John Smith
            </Typography>
          </Paper>
        </div>

        <div className="third">
          <Paper
            className="paper"
            sx={{
              background: "rgba(55,166,164,0.5)",
              backdropFilter: "blur(10px)",
              width: { md: "60%", sm: "50%", xs: "50%" },

              display: "flex",
              alignItems: { md: "end", sm: "center", xs: "center" },
              justifyContent: { md: "end", sm: "center", xs: "center" },
              flexWrap: "wrap",
              postion: "relative",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={Photo3}
              className="photo-three"
              sx={{ width: 137, height: 137 }}
            />
            <Typography component={"span"}>
              <blockquote className="txt">
                It is fantastic to see how committed professional Chef are to
                showing different recipes and I wanted to recognise your
                commitment and effort to teach new recipes with very easy ways
                was simply amazing for me
              </blockquote>
            </Typography>
            <Typography
              pt="50px"
              textAlign="right"
              fontSize={{ md: "1.5rem", xs: "1rem" }}
              color="#9cb3c9"
              mr="30px"
              fontWeight="bold"
              pb="10px"
            >
              Alaba Moskeny
            </Typography>
          </Paper>
        </div>
      </Container>
    </>
  );
};

export default Testimonials;
